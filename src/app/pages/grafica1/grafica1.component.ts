import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {

labels1:string[] = ["Tacos","Refresco","Limones"];
data1:number[] = [150,50,100];


labels2:string[] = ["Telefonos","Audifonos","Tablets","Laptops"];
data2:number[] = [30,200,80,20];


}
