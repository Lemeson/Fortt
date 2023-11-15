import { Component } from '@angular/core';
import { Contact } from '../models/Contact';


@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent {

  title = 'Contatos';
  contactSelected: Contact | null = null;

  public contacts: Contact[] 
  
  = [
  {id: 1,nome : 'Maria', sobrenome : 'Silva', telefone : '123456'},
  {id: 2,nome : 'Marta', sobrenome : 'Marta', telefone : '123456'},
  {id: 3,nome: 'Leandro', sobrenome : 'Querido', telefone : '123456'},
    {id: 4,nome : 'Pedro', sobrenome : 'Tesouro', telefone : '123456'},
    {id: 5,nome : 'Zeca', sobrenome : 'Silva', telefone : '123456'},
    {id: 6,nome: 'Feni', sobrenome : 'Silva', telefone : '123456'},
    {id: 7,nome : 'João', sobrenome : 'Silva', telefone : '123456'},
  ];

  contactSelect(contact: Contact){
    this.contactSelected = contact;
   // this.alunoForm.patchValue(aluno); //patchValue é um método do FormGroup. Aluno tem o mesmo propriedades criaForm o patchValue vai preencher o formulário com os dados do aluno selecionado. Ele reconhece automaticamente.
  }

}
