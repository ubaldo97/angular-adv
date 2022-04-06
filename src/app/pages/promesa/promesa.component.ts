import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html',
  styles: [
  ]
})
export class PromesaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios().then(usuarios =>{
      console.log(usuarios);
    });
    //EJEMPLO DE UNA PROMESA BASICA
    // const promise = new Promise((resolve, reject)=>{
    //   resolve('Hola mundo');
    // });
    // promise.then((mensaje)=>{
    //   console.log(mensaje);
    // });
    // console.log('Fin del init');


  }
  getUsuarios(){
    return new Promise(resolve => {
      fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then(body => resolve( body.data ));
    });
    
  }
  

}
