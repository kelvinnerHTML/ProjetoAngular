import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ativ-rec',
  templateUrl: './ativ-rec.component.html',
  styleUrls: ['./ativ-rec.component.css']
})
export class AtivRecComponent  {
  
  users = [
    {id: 1, name: 'Arte de Acampar'},
    {id: 2, name: 'Cultura Física'},
    {id: 3, name: 'Natação Principiante'},
    {id: 4, name: 'Natação Intermediário'},
    {id: 5, name: 'Natação - avançado'},
    {id: 6, name: 'Salvamento de Afogados'},
    {id: 7, name: 'Ciclismo'},
    {id: 8, name: 'Excursionismo Pedestre'},
    {id: 9, name: 'Filatelia'},
    {id: 10, name: 'Filatelia - avançado'},

  ]

}
