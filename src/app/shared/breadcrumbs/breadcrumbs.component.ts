import { Component, OnDestroy} from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo: string = '';
  public titulosub$!: Subscription;
  constructor(private router:Router) { 
    this.titulosub$ = this.getDataRutas().subscribe(({titulo}) =>{
      this.titulo = titulo;
      document.title = `Admincli - ${titulo}`;
     });

  }
  ngOnDestroy(): void {
   this.titulosub$.unsubscribe();
  }

  getDataRutas(){
    return this.router.events
    .pipe(
      filter((event):event is ActivationEnd => event instanceof ActivationEnd),
      filter((event:ActivationEnd) => event.snapshot.firstChild===null),
      map((event:ActivationEnd) => event.snapshot.data),
      );
  }

  

}
