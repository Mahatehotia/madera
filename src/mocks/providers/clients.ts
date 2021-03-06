import { Injectable } from '@angular/core';


import { Client } from "../../models/client";

@Injectable()
export class Clients {
  clients: Client[] = [];

  defaultClient: any = {
    "name": "Ouellet",
    "firstname": "Stéphanie",
    "adresse": "82 Rue de Verdun 40000 MONT-DE-MARSAN",
    "tel": "0601368422",
    "email": "stephanie.ouellet@monemail.fr",
    "idClient":"1",
  };


  constructor() {
    let clients = [
      {

        "name": "Ouellet",
        "firstname": "Stéphanie",
        "adresse": "82 Rue de Verdun 40000 MONT-DE-MARSAN",
        "tel": "0601368422",
        "email": "stephanie.ouellet@monemail.fr",
        "idClient":"1",
      },

      {

        "name": "Prewitt",
        "firstname": "Alexandre",
        "adresse": " 28 Place de la Madeleine 75010 PARIS",
        "tel": "0658281282",
        "email": "alexandre.prewitt@monemail.fr",
        "idClient":"2",
      },

      {

        "name": "Beaulé",
        "firstname": "Dominique",
        "adresse": "77, rue La Boétie 75013 PARIS",
        "tel": "0730693445",
        "email": "dominique.beaule@monemail.fr",
        "idClient":"3",
      },

      {

        "name": "Bellemare",
        "firstname": "Gaston",
        "adresse": "70, rue Adolphe Wurth 76140 LE PETIT-QUEVILLY",
        "tel": "0602753923",
        "email": "gaston.bellemare@monemail.fr",
        "idClient":"4",
      },

      {

        "name": "Lauzier",
        "firstname": "Gustave",
        "adresse": "16, avenue Jules Ferry 93240 STAINS",
        "tel": "0748768952",
        "email": "gustave.lauzier@monemail.fr",
        "idClient":"5",
      },

      {

        "name": "Charron",
        "firstname": "Jacques",
        "adresse": "52, rue des Nations Unies 42400 SAINT-CHAMOND",
        "tel": "0769662823",
        "email": "jacques.charron@monemail.fr",
        "idClient":"6",

      },

      {

        "name": "Duval",
        "firstname": "René",
        "adresse": "84, rue du Château 44800 SAINT-HERBLAIN",
        "tel": "0749005185",
        "email": "rene.duval@monemail.fr",
        "idClient":"7",

      },

      {

        "name": "Boulé",
        "firstname": "Coralie",
        "adresse": "99, Rue de la Pompe 04100 MANOSQUE",
        "tel": "0741042643",
        "email": "coralie.boule@monemail.fr",
        "idClient":"8",
      },

      {

        "name": "Lanteigne",
        "firstname": "Maureen",
        "adresse": "55, rue de l'Epeule 97440 SAINT-ANDRÉ",
        "tel": "0690934126",
        "email": "maureen.lanteigne@monemail.fr",
        "idClient":"9",
      },

      {

        "name": "Bérubé",
        "firstname": "Maurelle",
        "adresse": "38, route de Lyon 67400 ILLKIRCH-GRAFFENSTADEN",
        "tel": "0777579276",
        "email": "maurelle.berube@monemail.fr",
        "idClient":"10",
      }
    ];

    for (let client of clients) {
      this.clients.push(new Client(client));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.clients;
    }

    return this.clients.filter((client) => {
      for (let key in params) {
        let field = client[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return client;
        } else if (field == params[key]) {
          return client;
        }
      }
      return null;
    });
  }

  add(client: Client) {
    this.clients.push(client);
  }

  delete(client: Client) {
    this.clients.splice(this.clients.indexOf(client), 1);
  }
}
