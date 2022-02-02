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
  libroBuscado="";
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
    next: resultadoDeServi=>{
      this.booksAll=resultadoDeServi.docs;//recoge la respuesta de getLibros (concretamente el array)y lo añade a booksAll
    },
    error: errorMostrar=>{
      console.log(errorMostrar)//Muestre los errores en la consola y todo los libros 
      //console.log(this.booksAll);
    }
  });
}

//Hacer busqueda. Cuando busque, se activara
buscarLibro(){
  this.serviBiblio.getLibrosBusquedad(this.libroBuscado).subscribe({//Metodo del servidor de busque por un libro y nos suscribimos para esperar respuesta
    next: resultado=>{ //Si hay resultado, que se muetsre
        this.booksAll=resultado.docs;
    },
    error: mostrarError=>{
      console.log(mostrarError);
    }
  })
};

ngOnInit():void {
  this.buscarLibro(); //se nombra para que se ejecute
   this.mostrarTodosLibros(); //se nombra para que se ejecute
   
}

}


