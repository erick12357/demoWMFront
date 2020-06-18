import { AdItem } from './AdItem';
import { Injectable } from '@angular/core';
import { EjemploUnoComponent } from './ejemplo-uno/ejemplo-uno.component';

@Injectable({
  providedIn: 'root'
})
export class ItemsServiceService {

  constructor() { }

  getItems(){
    return [new AdItem(EjemploUnoComponent, { texto: "hola.." })];
  }
}
