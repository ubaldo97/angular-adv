import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{
  ngOnInit(){
    this.btnClass = `btn ${this.btnClass}`;
  }  

  @Input('valor') progreso: number = 10;
  @Input() btnClass: string = "btn-primary";
  //Si se desea renombrar alguna propiedad cambie la linea anterior por:
  //@Input('nuevo_nombre') progreso: number = 10;
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor(value: number){
 
   if(this.progreso>=100&&value>0){
     this.valorSalida.emit(100);
     return this.progreso = 100;
   }
 
   if(this.progreso<=0&&value<0){
    this.valorSalida.emit(0);
     return this.progreso = 0;
   }
   
   this.progreso = this.progreso + value;
   this.valorSalida.emit(this.progreso);
   return this.progreso;
  }

  onChange(valor:number){
    if(valor>=100){
      this.progreso = 100;
    } else if(valor<=0){
      this.progreso = 0;
    }else{
      this.progreso = valor;
    }
    this.valorSalida.emit(this.progreso);
  }
 
  
}
