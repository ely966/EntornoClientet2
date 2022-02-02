import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BibliotecaServiceService } from '../services/biblioteca-service.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {
  isbnDelLibro:any = this.activatedRoute.snapshot.paramMap.get('isbnID');//el string 'isbn',debe ser igual que en la ruta /detales:isbn, sino no sabra recoger el valor.

  datosLibro:any;
  datosAutor:any;
  constructor(private serviBiblio:BibliotecaServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.serviBiblio.getLibros(this.isbnDelLibro).subscribe(
      resultadoDeServi=>{
        this.datosLibro=resultadoDeServi;//recoge la respuesta de getLibros (concretamente el array)y lo añade a booksAll
        console.log(resultadoDeServi);
        
        if(this.datosLibro.authors !=null){
          //recojo los datos de autor//
          this.serviBiblio.getAuthor(this.datosLibro.authors[0]).subscribe(
            resultadoDeServiAutor=>{
              this.datosAutor=resultadoDeServiAutor;//recoge la respuesta de getLibros (concretamente el array)y lo añade a booksAll
              //console.log(this.datosAutor.name);
            },
           errorMostrar=>{
              console.log(errorMostrar);
            }
          )
        }else {
          this.datosAutor=null;
        }
       
      },
     errorMostrar=>{
      //console.log(this.keyIndicada);
        console.log(errorMostrar);
      }
    )
   

  };
  //sacar el autor
  

}
