import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NavController, NavParams } from '@ionic/angular';
import { Libros } from '../interfaces/libro.interfaces';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaServiceService {
  url: string = "http://openlibrary.org/search.json?q=the+lord+of+the+rings.json";
  books : Libros[]=[];
  httpService: any;
 
 

  constructor(private httpClient: HttpClient) {
    console.log("hi");
   }
   mostrarLibros(): Observable<Libros[]>{
    console.log(this.httpClient.get(this.url));
    return this.httpClient.get<Libros[]>(this.url);
    
  }
   //mostrarLibros(book) {
   // this.navCtrl.push('FilmDetailsPage', {libro: book});
  //}
}
