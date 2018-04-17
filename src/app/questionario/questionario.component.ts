import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
declare var firebase: any;

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent implements OnInit {

  resposta1: boolean;
  resposta2: boolean;
  resposta3: boolean;
  resposta4: boolean;
  resposta5: boolean;
  resposta6: boolean;
  resposta7: boolean;
  resposta8: boolean;
  resposta9: boolean;
  resposta10: boolean;
  
  constructor() {    
  }

  ngOnInit() {

  }

  adiciona(event){
    event.preventDefault();

    firebase.database().ref('respostas/').push({
      questao1: this.resposta1,
      questao2: this.resposta2,
      questao3: this.resposta3,
      questao4: this.resposta4,
      questao5: this.resposta5,
      questao6: this.resposta6,
      questao7: this.resposta7,
      questao8: this.resposta8,
      questao9: this.resposta9,
      questao10: this.resposta10,
    });
  }

  onRadioClicked(myRadio){
    console.log(myRadio.name);
    if(myRadio.name == "resposta1"){
      this.resposta1 = myRadio.value;
    }else if(myRadio.name == "resposta2"){
      this.resposta2 = myRadio.value;
    }else if(myRadio.name == "resposta3"){
      this.resposta3 = myRadio.value;
    }else if(myRadio.name == "resposta4"){
      this.resposta4 = myRadio.value;
    }else if(myRadio.name == "resposta5"){
      this.resposta5 = myRadio.value;
    }else if(myRadio.name == "resposta6"){
      this.resposta6 = myRadio.value;
    }else if(myRadio.name == "resposta7"){
      this.resposta7 = myRadio.value;
    }else if(myRadio.name == "resposta8"){
      this.resposta8 = myRadio.value;
    }else if(myRadio.name == "resposta9"){
      this.resposta9 = myRadio.value;
    }else if(myRadio.name == "resposta10"){
      this.resposta10 = myRadio.value;
    }else{
      console.log("erro!");
    }
    
  }

}
