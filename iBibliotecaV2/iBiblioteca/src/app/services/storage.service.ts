import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Libro } from '../interfaces/libro.interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storagefavorito: Storage | null ;
  private favoritos: Libro[] =[];
  private   i: number;
  private   estar: number;
  constructor(private storage: Storage) {
    this.init();
   }
   async init() {
    const storage = await this.storage.create();
    this.storagefavorito=storage;

  }

  async add(libro: Libro) {
    await this.storagefavorito.set('librofavorito', libro);
    //const libroAdd = await this.storagefavorito.get('librofavorito');
    this.favoritos.push(libro);
    console.log(this.favoritos[0]);
    this.comprobar(libro);

  }



  async delete(libro: Libro){
    this.favoritos.pop();
    await this.storagefavorito.remove('librofavorito');
    //this.favoritos.
  }

  async comprobar(libro: Libro){
this.estar=0;
    for (this.i=0 ; this.i <this.favoritos.length;this.i=this.i++){
      if(JSON.stringify(this.favoritos[this.i]) === JSON.stringify(libro)){
       this.favoritos.splice(0, this.i);
       this.delete(libro);
        console.log("lo borro");
        this.estar=1;

      }
    }
    if(this.estar ===0) {
      this.favoritos.push(libro);
    console.log("no estaba");
    }

}

}
