import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hab-man',
  templateUrl: './hab-man.component.html',
  styleUrls: ['./hab-man.component.css']
})
export class HabManComponent {

  users = [
    {id: 1, name: 'Automodelismo'},
    {id: 2, name: 'Trabalhos com Agulha'},
    {id: 3, name: 'Desenho e Pintura'},
    {id: 4, name: 'Música - básico'},
    {id: 5, name: 'Música - intermediário'},
    {id: 6, name: 'Música - avançado'},
    {id: 7, name: 'Letreiros e Cartazes'},
    {id: 8, name: 'Cestaria'},
    {id: 9, name: 'Trabalhos em Metal'},
    {id: 10, name: 'Arte de Oleiro'},
    {id: 11, name: 'Entalhe em Madeira'},

  ]



}
