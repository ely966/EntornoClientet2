import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Component, OnInit } from '@angular/core';
import { BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { NavController, NavParams } from '@ionic/angular';
import { Libro } from '../interfaces/libro.interfaces';
import { BibliotecaServiceService } from '../services/biblioteca-service.service';


@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  scannedBarCode;
    barcodeScannerOptions: BarcodeScannerOptions;
  booksAll: Array<Libro>;
  libroBuscado='';
  book: Libro;
  bookCode: Libro[];

  constructor( private scanner: BarcodeScanner, private serviBiblio: BibliotecaServiceService, public navCtrl: NavController, ) {
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }

 //**Para metodo siguiente **//

//**metodo que recogera y llamara al metodo del servicio libro de recoger libros */
  //**No se usa then, sino subcribe ya que http no devuelve una promesa sino un observable */
 //**Un observable se queda a la espera de recibir datos y nos suscribimos para recibir los datos cuando esten disponibles */
 // eslint-disable-next-line max-len
 // la promesa devuelve los datos una única vez cuando estos son recibidos mientras que un observable se queda «vigilando» si se han producido cambios//
mostrarTodosLibros(){
  this.serviBiblio.getLibros3().subscribe({
    next: resultadoDeServi=>{
      this.booksAll=resultadoDeServi.docs;//recoge la respuesta de getLibros (concretamente el array)y lo añade a booksAll
    },
    error: errorMostrar=>{
      console.log(errorMostrar);
      //console.log(this.booksAll);
    }
  });
}
scanBRcode() {
  this.scanner.scan().then(res => {
      this.scannedBarCode = res;
      this.serviBiblio.getLibrosBusquedadCode(this.scannedBarCode).subscribe({
        next: resultadoDeServi=>{
          this.bookCode=resultadoDeServi.docs;//recoge la respuesta de getLibros (concretamente el array)y lo añade a booksAll
        }
    });
    });
}


//Hacer busqueda. Cuando busque, se activara
buscarLibro(){
  // eslint-disable-next-line max-len
  this.serviBiblio.getLibrosBusquedad(this.libroBuscado).subscribe({//Metodo del servidor de busque por un libro y nos suscribimos para esperar respuesta
    next: resultado=>{ //Si hay resultado, que se muetsre
        this.booksAll=resultado.docs;
    },
    error: mostrarError=>{
      console.log(mostrarError);
    }
  });
};

ngOnInit():void {
  this.buscarLibro(); //se nombra para que se ejecute
   this.mostrarTodosLibros(); //se nombra para que se ejecute

}

}


