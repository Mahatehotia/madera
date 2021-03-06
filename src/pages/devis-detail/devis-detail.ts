import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Deviss } from '../../providers';
import {Client} from "../../models/client";
import {Clients} from "../../providers";

/**
 * Generated class for the DevisDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-devis-detail',
  templateUrl: 'devis-detail.html',
})
export class DevisDetailPage {

  devis:any;
  client: Client;
  clients: Client[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public deviss:Deviss) {
    this.devis = navParams.get('devis');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevisDetailPage');
    console.log(this.devis.idClient);
  }

}
