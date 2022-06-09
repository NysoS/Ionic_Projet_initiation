import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenTriviaServiceService {

  nbQuestion:number = 0;

  constructor(private http : HttpClient){}

  questions:Array<any> = [
    {
      category:"Entertainment: Espace",
      type: "multiple",
      difficulty: "easy",
      question: "Quelle est la distance Mars - Terre ?",
      correct_answer: "62 Millions/km",
      incorrect_answer: ["2 Millions/km", "250 Millions/km", "5 km"]
    },
    {
      category:"Entertainment: Video Games",
      type: "boolean",
      difficulty: "medium",
      question: "Rocket League a t-il été racheté par Epic Games ?",
      correct_answer: "True",
      incorrect_answer: ["False"]
    }
  ]

  async getQuestions(nbQuestion = null){
    return new Promise((resolve,reject)=>{
        let data;
        this.http.get('https://opentdb.com/api.php?amount=10&difficulty=easy').toPromise()
        .then(
          (res:any) => {
            data = res.results;
            this.nbQuestion = res.results.length;
          }
        )
        .finally(()=>{
         resolve(data[nbQuestion]);
        })
    })
  }

  getNbQuestion(){
    return this.nbQuestion;
  }
}

