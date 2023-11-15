import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterfaceRelatorioComponent } from './interface-relatorio/interface-relatorio.component';
import { ContatosComponent } from './contatos/contatos.component';



const routes: Routes = [
  {path: 'interface-relatorio', component: InterfaceRelatorioComponent},
  {path: 'contatos', component: ContatosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

