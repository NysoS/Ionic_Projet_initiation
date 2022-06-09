import { Component } from '@angular/core';
import { OpenTriviaServiceService } from '../open-trivia-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pseudo:string = null;
  lunchGame:boolean = false;

  intNbQuestion:number = 0;
  nbQuestion:number = 0;
  questionsGame:Array<any> = [];

  constructor(private questionService : OpenTriviaServiceService) {}

  ngOnInit(){
    //this.getQuestion();    
  }

  async getQuestion(){
    this.questionService.getQuestions(this.intNbQuestion)
    .then((questions:any) => {
      console.log(this.questionService.getNbQuestion());
      
      this.nbQuestion = this.questionService.getNbQuestion();
      this.questionsGame = questions;
      this.lunchGame = true;
    })
  }

  setPseudo(pseudo){
    this.pseudo = pseudo;
    this.getQuestion();
  }

  newQuestion(){
    if(this.questionsGame != null){
      this.intNbQuestion = this.intNbQuestion+1;
      this.getQuestion();
    }
  }

  finishGame(){
    this.intNbQuestion = 0;
    this.lunchGame = false;
  }

}
