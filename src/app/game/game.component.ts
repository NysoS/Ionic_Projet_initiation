import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2 } from '@angular/core';
import { flush } from '@angular/core/testing';
import * as confetti from 'canvas-confetti';


@Component({
  selector: 'app-game-component',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit, OnChanges {
 
  @Input() pseudo!:string;
  @Input() question:any;
  @Input() nbQuestion:number;

  @Output() nextQ = new EventEmitter<any>();
  @Output() finishGame = new EventEmitter<any>();
  
  nextQuestion:boolean = false;
  answers:Array<string> = Array();
  displayError:boolean = false;
  canvas:any;
  endGame:boolean = false;
  score:number = 0;
  show = false;

  constructor(private renderer2: Renderer2,
    private elementRef: ElementRef) {
      this.canvas = this.renderer2.createElement('canvas');
      this.canvas.setAttribute("id","conf")
      this.renderer2.appendChild(this.elementRef.nativeElement, this.canvas);
     }

  ngOnInit() {
  }

  ngOnChanges() {
    this.loadAnswers();    
  }

  loadAnswers() {
    this.answers = [];
    this.show = false;
    if(this.question != null || this.question != undefined){
      if (this.question.incorrect_answers) {
        this.question.incorrect_answers.forEach(elt =>{
          this.answers.push(elt);
        });
        this.answers.push(this.question.correct_answer)
    
        this.answers.sort(()=> Math.random() -0.5);
        this.show = true;

      }  
    }else{
      this.endGame = true;
    }
  }

  pushAnswer(answer){
    if(answer === this.question.correct_answer){
      this.score++;
      const myConfetti = confetti.create(this.canvas, {
        resize: true, // will fit all screen sizes
        useWorker: true
      });
      myConfetti({
        particleCount:600,
        shapes: ['circle', 'square', 'circle'],
        spread: 50
      });
    }
    this.displayError = true;
    this.nextQuestion = true;
  }

  goToNextQuestion(){
    this.displayError = false;
    this.nextQuestion = false;
    this.show = false;
    let resp = this.nextQ.emit(this.loadAnswers());
  }

  goToMenu(){
    this.endGame = false;
    this.finishGame.emit(this.resetGame());
  }

  async resetGame(){
    this.endGame = false;
  }
}
