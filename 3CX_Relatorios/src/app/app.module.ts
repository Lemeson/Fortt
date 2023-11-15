import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterfaceRelatorioComponent } from './interface-relatorio/interface-relatorio.component';
import { NavComponent } from './nav/nav.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ContatosComponent } from './contatos/contatos.component';
import { ContactComponent } from './src/models/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    InterfaceRelatorioComponent,
    NavComponent,
    ContatosComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
