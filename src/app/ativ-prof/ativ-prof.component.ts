import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-ativ-prof',
  templateUrl: './ativ-prof.component.html',
  styleUrls: ['./ativ-prof.component.css']
})
export class AtivProfComponent  {

  users = [
    {id: 1, name: 'Conserto de Sapatos'},
    {id: 2, name: 'Fotografia'},
    {id: 3, name: 'Mecânica Automotiva'},
    {id: 4, name: 'Radioamadorismo'},
    {id: 5, name: 'Datilografia'},
    {id: 6, name: 'Eletricidade'},
    {id: 7, name: 'Carpintaria'},
    {id: 8, name: 'Corte e Costura'},
    {id: 9, name: 'Taquigrafia'},
    {id: 10, name: 'Tipografia'}

    
  ]

 

}
