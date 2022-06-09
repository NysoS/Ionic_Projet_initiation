import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenTriviaServiceService {

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

  constructor() { }

  getQuestions(nbQuestion = null){
    return this.questions[nbQuestion];
  }
}

