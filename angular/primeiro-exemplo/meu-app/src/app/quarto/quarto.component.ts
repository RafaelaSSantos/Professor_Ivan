import { Component } from '@angular/core';

@Component({
  selector: 'app-quarto',
  template: `
    <div>
      <input type="text" placeholder="Name" (blur) = 'onBlur()' #campoInput >
      <button type="button" (click)="onClick(campoInput)">CLIQUE</button>
    </div>
  `,
})
export class QuartoComponent {
  public onBlur(): void {
    console.log('O foco está perdido para este elemento');
}
  public onClick(campoInput: HTMLInputElement): void {
    console.log(campoInput.value);
  }
}
