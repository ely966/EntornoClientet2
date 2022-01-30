import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Libros } from '../interfaces/libro.interfaces';
import { BibliotecaServiceService } from '../services/biblioteca-service.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  books: Libros;
  

  constructor( private serviBiblio:BibliotecaServiceService) { 
  }

  ngOnInit():void {
   // this.books=this.serviBiblio.mostrarLibros();
  }
  error:boolean=false;
  mostrar(){
    
   
    this.serviBiblio.mostrarLibros()
   
    .subscribe(resp=>{
      this.books = resp;
        //console.log(this.paises);
      }, 
      (err) =>{
          this.error=true;
          console.log("a");//si ocurre algun error, pasara al segundo
          //this.mostrar = this.mostrar ? true;
      });

  
  
}
  function subscribe(arg0: (resp: any) => void, arg1: (err: any) => void) {
    throw new Error('Function not implemented.');
  }

