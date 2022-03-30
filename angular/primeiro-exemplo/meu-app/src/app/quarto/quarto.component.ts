import { Component } from '@angular/core';

@Component({
  selector: 'app-quarto',
  template: `
  <div>
    <input type="text" placeholder="Senha" (blur) = 'onBlur()' #campoInput >
    <button type="button"  placeholder="confirma Senha" (click)="onClick(campoInput)">CLIQUE</button>
  </div>
`,
})
export class QuartoComponent {
public onBlur(): void {
  console.log('O foco está perdido para a senha');
}
public onClick(campoInput: HTMLInputElement): void {
  console.log(campoInput.value);
}
}
