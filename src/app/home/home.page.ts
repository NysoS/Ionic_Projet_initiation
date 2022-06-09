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
    this.nbQuestion = this.questionService.getNbQuestion();
    this.questionsGame = await this.questionService.getQuestions(this.intNbQuestion);
  }

  setPseudo(pseudo){
    this.pseudo = pseudo;
    this.lunchGame = true;
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
