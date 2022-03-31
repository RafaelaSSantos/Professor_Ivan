import { Component, OnInit } from '@angular/core';
import { OnePieceInterface } from '../onePiece.interface';

@Component({
  selector: 'app-diretivas',
  template: `
    <div>
      <input
        type="number"
        #campoNumero
        (input)="maxPiece = +campoNumero.value - 1"
        [value]="onePieces.length"
        [max]="onePieces.length"
        min="0"
      />
    </div>

    <div *ngFor="let onePiece of onePieces; index as indice">
      <ul *ngIf="indice <= maxPiece">
           <p><li class="cap"> Capitão: {{ onePiece.capitao }},</li>
            <li class="rec" > Recompensa: B{{ onePiece.recompensa | currency}}</li>
            <li class="fat" > Fruta: {{ onePiece.fruta }},</li>
            <li class="suce" > Tripulação: {{ onePiece.tripulacao }}.</li></p>
      </ul>
    </div>
  `,

  styles: [
    `
    .cap{color: black; font-size: 25px}
    .suce{color: blue; font-size: 18px}
    .fat{color: green; font-size: 18px}
    .rec{color: red; font-size: 18px}
    `]
})
export class DiretivasComponent {
  public maxPiece: number;
  public onePieces: OnePieceInterface[];

  constructor() {
    this.onePieces = [
      {
        capitao: 'Monkey D. Luffy',
        recompensa: 1500000000,
        fruta: ' Gomu Gomu no Mi',
        tripulacao: [
          ' Roronoa Zoro',
          ' Sanji',
          ' Usopp',
          ' Nami',
          ' Tony Tony Chopper',
          ' Nico Robbin',
          ' Franky',
          ' Brook',
          ' Jinbe',
        ],
      },
      {
        capitao: 'Trafalgar D. Water Law',
        recompensa: 500000000,
        fruta: ' Ope Ope no Mi',
        tripulacao: [
          ' Bepo',
          ' Jean Bart',
          ' Shachi',
          ' Penguin',
          ' Ikkaku',
          ' Uni',
          ' Cilione',
        ],
      },
      {
        capitao: 'Shanks Ruivo',
        recompensa: 4048900000,
        fruta: ' PODER BRUTO',
        tripulacao: [' Benn', ' Lucky', ' Yasopp', ' Rockstar'],
      },
      {
        capitao: 'Eustass Kid',
        recompensa: 670000000,
        fruta: ' Jiki Jiki no Mi',
        tripulacao: [' Killer', ' Heart', ' Wire'],
      },
      {
        capitao: 'Edward Newgate Barba Branca',
        recompensa: 5046000000,
        fruta: ' Guru Guru no Mi',
        tripulacao: [
          ' Marco',
          ' Portgas D. Ace',
          ' Izo',
          ' Marshall D. Teach',
          ' Thatch',
          ' Stefan',
          ' Chameleone',
          ' Atmos',
          ' Namur',
          ' Kozuki Oden',
          ' Nekomamushi',
          ' Inuarashi',
        ],
      },
    ];
    this.maxPiece = this.onePieces.length;
  }
}
