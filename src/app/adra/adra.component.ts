import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adra',
  templateUrl: './adra.component.html',
  styleUrls: ['./adra.component.css']
})
export class AdraComponent {

  users = [
    {id: 1, name: 'Alívio da fome'},
    {id: 2, name: 'Avaliação da Comunidade'},
    {id: 3, name: 'Serviço Comunitário'},
    {id: 4, name: 'Resposta e Emergência de Desastres'},
    {id: 5, name: 'Resposta e Emergência de Desastres-avançado'},
    {id: 6, name: 'Alfabetização'},
    {id: 7, name: 'Resolução de Conflitos'},
    {id: 8, name: 'Reassentamento de Refugiados'},
    {id: 9, name: 'Desenvolvimento Comunitário'}
    
  ]
}
