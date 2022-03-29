import {Component} from "@angular/core";

@Component({
  selector: 'app-terceiro',
  template: `
  <input type="text" value="{{texto}}" [disabled]="isDisable">
  <button type="button" (click)="cliqueBota()"> clique em mim</button>


  <h2 class="suce">Jogos</h2>
  <h2 class="fat">Novos</h2>
  <h2 [class.suce]="isSucess">Ganheiii</h2>
  <p [style.color]="'orange'"> binding de style</p>
  <p [style.color]="cor"> binding de style novo</p>

  <h2 [class.suce]="isSucessoo">Cor mudada legal</h2>
  <button type="button" (click)="cliqueBotaoo()"> clique em mim</button>

  <h2 [class]="parOuImpar">{{ getContador() }}</h2>
    <button type="button" (click)="cliqueBotao()">CLIQUE EM MIM</button>


  `,
  styles: [
    `
    .suce{color: green;}
    .fat{color: blue;}

    .par{color: green;}
    .impar{color: red;}

    `]})

export class TerceiroComponent{
  public isDisable = false;
  public texto = "Digite aqui ...";
  public suce: string = "claro";
  public isSucess = true;
  public cor: string= "blue";

  private contador: number = 0;
  public cliqueBota(){
    console.log('Botão Clicado! ' + ++this.contador);
  }

  public isSucessoo = true;
  public cliqueBotaoo(){
    this.isSucessoo = !this.isSucessoo;
    console.log('Botão Clicado! ' + ++this.contador);
  }
  public isSucesso = true;

  public parOuImpar: string = 'par';
  private cont: number = 0;

  public cliqueBotao() {
    console.log('BOTÃO CLICADO! ' + ++this.cont);
    if (this.cont % 2 == 0) {
      console.log('par');
      this.parOuImpar = 'par';
    } else {
      this.parOuImpar = 'impar';
    }
  }
  public getContador() {
    return this.cont;
  }
}
