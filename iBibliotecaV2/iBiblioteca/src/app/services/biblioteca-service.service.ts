import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NavController, NavParams } from '@ionic/angular';
import { Libro } from '../interfaces/libro.interfaces';
import { Libros } from '../interfaces/libros.interfaces';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaServiceService {
  url: string = "http://openlibrary.org/search.json?q=the+lord+of+the+rings";
  url2 : string ="http://openlibrary.org/search.json?";
  books : Libros;
  httpService: any;
  libro: Libro;
 
 

  constructor(private httpClient: HttpClient) {
    console.log("hi, servidor de biblioteca en marcha");
   }
 
  getLibros(): Observable<Libros> {
    return this.httpClient.get<Libros>(this.url);
    
  }

  getLibros3(): Observable<Libros> {
    const parametro = new HttpParams().set("title", "the lord of the rings") //Seleccionar el titulo libro
    .set("limit", "10"); //*Añadir el limite de 10 libros*
    return  this.httpClient.get<Libros>(`${this.url2}`, {params:parametro}); //esta comilla :` no esta : ' 
    
  }
  ngOninit(){}
  
}
