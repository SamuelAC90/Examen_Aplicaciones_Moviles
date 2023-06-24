import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  handlerMessage = '';
  roleMessage = '';


  constructor(private alertCtrl: AlertController) { }
  ngOnInit() {
    }
   
async presentAlertpeButtonImput() {
  const alert = await this.alertCtrl.create({
  backdropDismiss: false,
  header: 'Pront!',
  inputs: [
    {
    
      placeholder: 'Nombres',
    },
    {
      placeholder: 'Apellidos',
    },
    {
      placeholder: 'Descripcion de la materia',
    },
    {
      type:'url',
      value:'https://ionicframework.com',
       disabled: true,
    },
    {
      type:'date',
      value:'dd/mm/aa',
    },
    {
      type:'password',
      placeholder: 'Clave',
    },
    {
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      }
    },
    {
      type:'number',
      placeholder: 'Edad',
      
    }
  ],  
  
  
  buttons: ['Cancel', 'OK']
  
  });
  await alert.present();
  };
 

  

}

