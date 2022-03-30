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
  onBlur(): void {
    console.log('Focus Is Lost for this Element');
}
  public onClick(campoInput: HTMLInputElement): void {
    console.log(campoInput.value);
  }
}
