import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-componente',
  template: `
  <h2 [class.suce]="isSucesso">Cor mudada legal</h2>
  <button type="button" (click)="cliqueBotao()"> clique em mim</button>

  `,
  styles: [
    `
    .suce{color: green;}
    .fat{color: blue;}

    `]})
export class NovoComponenteComponent  {
//Crie um botão que quando é pressionado, desabilita um elemento de input se for pressionado novamente, habilita o elemento de input

public isSucesso: boolean = true;
public cliqueBotao(){
  this.isSucesso = !this.isSucesso;
  console.log('Botão Clicado! ');
  }
}
