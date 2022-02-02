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
  urlBook: string= "https://openlibrary.org/isbn/";
  urlBookSimple: string= "https://openlibrary.org";
  books : Libros;
  httpService: any;
  libro: Libro;
  final: any;
  a: any;
 
 

  constructor(private httpClient: HttpClient) {
    console.log("hi, servidor de biblioteca en marcha");
   }
 
  getLibros(keyIndicada:string){
    let final=this.urlBook+keyIndicada+".json";
    ///books/OL7605193M
    //console.log(final);
   // .set('',final);this.httpClient.get<any>(`${this.final}`);
    return this.httpClient.get(`${final}`);
  }
  //recoger todos los datos de autor//
  getAuthor(rutaAutor:string){
    let rutaInformacionAutor=this.urlBookSimple+Object.values(rutaAutor)+".json";//de la consulta getlibros, extraido la urls de autores y la traigo apra extraer datos
    console.log(rutaInformacionAutor);
    
    return this.httpClient.get(`${rutaInformacionAutor}`);
  }

/**Obtener libros */
  getLibros3(): Observable<Libros> {
    const titulo: string= 'the lord of the rings';
    const parametro = new HttpParams() // parametros seleccionado https://www.tektutorialshub.com/angular/angular-pass-url-parameters-query-strings/
    .set('title', titulo) //Seleccionar el titulo libro
    .set('limit', '10'); //*Añadir el limite de 10 libros*
    console.log(`${this.url2}`, {params:parametro});
    return  this.httpClient.get<Libros>(`${this.url2}`, {params:parametro}); //esta comilla :` no esta : ' 
    
  }
  /**Busqueda */
  getLibrosBusquedad(titulo:string): Observable<Libros> {
    //const titulo: string= 'the lord of the rings';
    const parametro = new HttpParams() // parametros seleccionado https://www.tektutorialshub.com/angular/angular-pass-url-parameters-query-strings/
    .set('title', titulo) //Seleccionar el titulo libro
    .set('limit', '10'); //*Añadir el limite de 10 libros*
    console.log(`${this.url2}`, {params:parametro});
    return  this.httpClient.get<Libros>(`${this.url2}`, {params:parametro}); //esta comilla :` no esta : ' 
    
  }
  
  ngOninit(){}
  
}


