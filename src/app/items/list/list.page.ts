import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  items: any = [];

  handlerMessage = '';
  roleMessage = '';

  constructor( 
    private itemService: ItemService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.getAllItems();
  }

  ionViewDidEnter(){
    this.getAllItems();
  }

  getAllItems() {
    this.itemService.getItems().subscribe(response => {
      this.items = response;
    });
  }

  deleteItem(id) {
    console.log('Id='+id);
    this.itemService.deleteItem(id).subscribe(() => {
      this.ionViewDidEnter();
      console.log('Deleted item');
    });
  }  

  goBack(){
    this.router.navigateByUrl("/home");
  }

  async presentAlert(id: BigInteger, description: String) {

    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: '¿Borramos '+description+'? ',
      buttons: [
        {
          text: 'Ok',
          role: 'confirm',
          handler: () => {
            this.deleteItem(id);
          },
        },        
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'my-custom-class'
        },
      ],
    });
    await alert.present();
  }


  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Articulo',
      buttons: [
        {
          text: 'Continuar',
          role: 'confirm',
          handler: () => {
            
          },
        },        
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'my-custom-class'
        },
      ],
      inputs: [
        {
          type: 'textarea',
          placeholder: 'descripccion',
        },        
        {
          type: 'number',
          placeholder: 'PVP',
          min: 1,
          max: 100,
        },
      ],
    });

    await alert.present();
  }

}