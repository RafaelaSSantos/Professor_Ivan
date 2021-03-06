import { Component } from '@angular/core';

@Component({
  selector: 'app-quarto',
  template: `
  <input type="text" placeholder="Senha" #campoSenha />
  <input type="text" placeholder="Confirmar senha" #campoVerificaSenha (blur)="verificadorSenha(campoSenha.value, campoVerificaSenha.value)"/>
  <div>{{ textoSenha }}</div>
`,
})
export class QuartoComponent {
public textoSenha: string = '';
public verificadorSenha(senha: string, verificaSenha: string): void {
  if (senha !== verificaSenha)
    this.textoSenha = 'Senhas são diferentes';
  else this.textoSenha = '';
}
}
