import { Component } from "@angular/core";

@Component({
  selector: 'app-segundo',
  template: `
  <div>{{preco}}</div>
  <div>{{preco + 1}}</div>
  <div>{{preco * 20}}</div>
  <div>{{preco / 10}}</div>
  <div>{{user.nome}}</div>
  <div>{{getPreco()}}</div>
  <div>{{preco > 0}}</div>
  `,
})
export class SegundoComponent{
  public user: {id:number; nome:string} = {
    id: 3045,
    nome:'Rafa'
  };
  public preco: number = 10;

  getPreco(): string {
    return `R$ ${this.preco}`;
  }
}
