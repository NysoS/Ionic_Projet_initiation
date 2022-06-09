import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pseudo',
  templateUrl: './pseudo.component.html',
  styleUrls: ['./pseudo.component.scss'],
})
export class PseudoComponent implements OnInit {

  pseudo:string="";
  difficulties:string[] = ["easy","normal","hard"];
  difficultySelected:string="";
  isNotValid:boolean = false;
  
  @Output() oPseudo = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit() {}

  onStart(){
    if(this.pseudo !== "" && this.difficultySelected !== ""){
      if(this.pseudo.length > 3){
        this.isNotValid=false;
        this.oPseudo.emit(this.pseudo);
        //this.router.navigate(['/game']);
      }else{
        this.isNotValid=true;
      }
    }else{
      this.isNotValid=true;
    }
  }

}
