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
    min="0"/>
    </div>

    <div *ngFor="let onePiece of onePieces; index as par">
      <ul>
        <li *ngIf="par <= maxPiece">
          <p [style.color]="par ? 'green' : 'red'">
            {{ onePiece.capitao }},
            <li>{{ onePiece.recompensa }},</li>
            <li>{{ onePiece.fruta }},</li>
            <li>{{ onePiece.tripulacao }}.</li>
          </p>
        </li>
      </ul>
    </div>
  `,
})
export class DiretivasComponent {
  public maxPiece: number;
  public onePieces: OnePieceInterface[];

  constructor() {
    this.onePieces = [
      {
        capitao: 'Monkey D. Luffy',
        recompensa: 3161000100,
        fruta: 'Gomu Gomu no Mi',
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
        fruta: 'Ope Ope no Mi',
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
        fruta: 'sem nada',
        tripulacao: [' Benn', ' Lucky', ' Yasopp', ' Rockstar'],
      },
      {
        capitao: 'Eustass Kid',
        recompensa: 670000000,
        fruta: 'Jiki Jiki no Mi',
        tripulacao: [' Killer', ' Heart', ' Wire'],
      },
      {
        capitao: 'Edward Newgate Barba Branca',
        recompensa: 5046000000,
        fruta: 'Guru Guru no Mi',
        tripulacao: [' Marco', ' Portgas D. Ace', ' Izo', ' Marshall D. Teach', ' Thatch', ' Stefan', 'Chameleone', ' Atmos', 'Namur', 'Kozuki Oden', 'Nekomamushi', 'Inuarashi'],
      },

    ];
    this.maxPiece = this.onePieces.length;
  }
}
