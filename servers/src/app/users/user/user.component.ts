import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {
  user!: {id: number, name: string};


  constructor(private route: ActivatedRoute) { }

  //A través de ella y del ActivatedRoute podemos acceder a los datos de la URL y 
  //rescatarlos (en inglés, fetch)
  //esta operación cuando nuestro componente se inicializa, es decir, en el ngOnInit. 

  //l user object espera dos propiedades (id y name). 
  //{ path: 'users/:id', component: UserComponent }=>	{ path: 'users/:id/:name', component: UserComponent },

  ngOnInit(): void {
    //Dentro del ngOnInit, accedemos al Observable "params" del router object y nos suscribimos a él usando el método subscribe.

    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.route.params
  .subscribe(
    (updatedParams) => {
      this.user.id = updatedParams['id'];
      this.user.name = updatedParams['name'];
    }
  );
  }
 //crear una suscripcion y descupcribirnos
   //paramsSubscription: Subscription | undefined; //Definimos un tipo suscripcion apra aaprender como podriamso desupcribirnos
//ngOnDestroy() {
  //  this.paramsSubscription.unsubscribe();
 // }
 
}
