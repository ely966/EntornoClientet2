import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Libro } from '../interfaces/libro.interfaces';
import { Libros } from '../interfaces/libros.interfaces';
import { BibliotecaServiceService } from '../services/biblioteca-service.service';


@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {


  booksAll: Array<Libro>;
  book: Libro;

  constructor( private serviBiblio:BibliotecaServiceService, public navCtrl: NavController, ) { 
  }

  
 //**Para metodo siguiente */
 
//**metodo que recogera y llamara al metodo del servicio libro de recoger libros */
  //**No se usa then, sino subcribe ya que http no devuelve una promesa sino un observable */
 //**Un observable se queda a la espera de recibir datos y nos suscribimos para recibir los datos cuando esten disponibles */
 // la promesa devuelve los datos una única vez cuando estos son recibidos mientras que un observable se queda «vigilando» si se han producido cambios//
 mostrarTodosLibros(){ 
  this.serviBiblio.getLibros3().subscribe({
    next: respuesta=>{
      this.booksAll=respuesta.docs //recoge la respuesta de getLibros y lo añade a booksAll
    },
    error: error=>{
      console.log(error),//Muestre los errores en la consola
      console.log(this.booksAll);
    }
  });
    //(res) => {
      //this.books = res [Libro];
     // },
     // (error) => {
     //   console.error(error);
     // }
    //}
  
 }
 ngOnInit():void {this.mostrarTodosLibros(); //se nombra para que se ejecute
 }

}

