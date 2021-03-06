import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { SegundoComponent } from './segundo/segundo.component';
import { TerceiroComponent } from './terceiro/terceiro.component';
import { NovoComponenteComponent } from './novo-componente/novo-componente.component';
import { QuartoComponent } from './quarto/quarto.component';
import { DiretivasComponent } from './diretivas/diretivas.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    SegundoComponent,
    TerceiroComponent,
    NovoComponenteComponent,
    QuartoComponent,
    DiretivasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
