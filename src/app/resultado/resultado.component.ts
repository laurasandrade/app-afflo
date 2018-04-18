import { Component, OnInit } from '@angular/core';
declare var firebase: any;
   
@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  valor: string;
  msg: any;
  

  constructor() { }

  ngOnInit() {
    var usersRef = firebase.database().ref("respostas/");
    var cont = 0;
    usersRef.orderByChild("usuario").equalTo(localStorage.getItem("usuario")).limitToFirst(1).on("child_added", function(data) {
       var valor = data.val();
  
         for (var prop in valor) {
  
          // console.log("valor." + prop + " = " + valor[prop]);
        if(valor[prop] == "true"){
             cont++;
          }
         else{
           console.log("não entrou");
         }
      }
      valor = document.querySelector("#resultado");
      var msg = 0;
      // msg = document.querySelector("#msg");
      

      if(cont == 0 && cont <= 4){
        cont = cont * 10;
        valor.innerText = cont + "%";  
        valor.innerText += " Seu nível é iniciante";
      }else if(cont == 5 && cont <= 8){
        cont = cont * 10;
        valor.innerText = cont + "%";               
        valor.innerText += " Seu nível é intermediário";
      }else if(cont == 9 && cont <= 10){
        cont = cont * 10;
        valor.innerText = cont + "%";               
        valor.innerText += " Seu nível é avançado";
      }
      
    });
  }


}
