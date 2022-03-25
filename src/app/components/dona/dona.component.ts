import { Component, Input} from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  // Doughnut 
  
  //Definimos los colores a utilizar en nuestra grafica
 public colors = [
  '#6857E6',
  '#2A8EFF',
  '#F02059',
  '#0080c0',
  '#8000ff'
 ];
 
 public hoverColors=[
  '#705BF7' ,
  '#00abfd',
  '#FF3281',
  '#009FEE',
  '#ce00ce'
 ];

 @Input() title="Sin titulo";
 @Input() labels = ["Label1","Label2","Label3"];
 @Input('data') data = [33,33,34];

  public doughnutChartData: ChartData<'doughnut'> = {
   labels: this.labels, 
   datasets: [
     { data: this.data,
      backgroundColor: this.colors,
      hoverBackgroundColor: this.hoverColors,
      hoverBorderColor:this.hoverColors
    }
   ],
 };

 ngOnChanges(){
  this.doughnutChartData = {
    labels: this.labels,
    datasets: [{ data: this.data,
      backgroundColor: this.colors,
      hoverBackgroundColor: this.hoverColors,
      hoverBorderColor:this.hoverColors }],
  };
} 

 public doughnutChartType: ChartType = 'doughnut';

}
