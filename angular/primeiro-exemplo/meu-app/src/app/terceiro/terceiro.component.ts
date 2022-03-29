import {Component} from "@angular/core";

@Component({
  selector: 'app-terceiro',
  template: `<input type="text" value="{{texto}}" [disabled]="isDisable">
  <h2 class="suce">Jogos</h2>
  <h2 class="fat">Novos</h2>
  <h2 [class.suce]="isSucesso">Ganheiii</h2>
  <p [style.color]="'orange'"> binding de style</p>
  <p [style.color]="cor"> binding de style</p>
  `,
  styles: [
    `
    .suce{color: green;}
    .fat{color: blue;}

    `]})

export class TerceiroComponent{
  public isDisable = false;
  public texto = "Digite aqui ...";
  public suce: string = "claro";
  public isSucesso = true;
  public cor: string= "blue";
}
