import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-componente',
  template: `

  <input type="text" [disabled]="isDisable"/>
  <button type="button" (click)= "isDisable = !isDisable"> {{isDisable ? 'Aberto' : 'Fechado'}}</button>

  `})
export class NovoComponenteComponent  {
//Crie um botão que quando é pressionado, desabilita um elemento de input se for pressionado novamente, habilita o elemento de strictInputAccessModifiers

public isDisable: boolean = false;


}
