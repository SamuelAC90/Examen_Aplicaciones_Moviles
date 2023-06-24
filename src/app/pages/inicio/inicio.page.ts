import { Component, OnInit } from '@angular/core';


interface Componente {
  icon:string;
  name:string;
  redirecto:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {

  constructor() { }

  componentes: Componente[]=[
    
    {
      icon: 'alert-circle-outline',
      name: ' Alerta',
      redirecto: '/alert'
    },
    {
      icon: 'hammer-outline',
      name: ' Examen ion-input',
      redirecto: '/input'
    }
  ]

  ngOnInit() {
  }

}
