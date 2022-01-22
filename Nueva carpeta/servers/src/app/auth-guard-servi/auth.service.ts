//auth.service.ts. En una app de verdad, este servicio podría interactuar con un servidor para llevar a cabo el proceso de login/logout, pero para el caso que nos ocupa, lo vamos a simular.
//5. Creamos una propiedad llamada loggedIn y le damos el valor de false, porque es lo común cuando un usuario entra a una web, que no esté autenticado a priori.
//6. Creamos un método llamado login que cambiará el valor de la propiedad loggedIn por true.
//7. Creamos un método llamado logout, encargado de darle al loggedIn su valor inicial (false).
//8. Creamos un método para comprobar el estado de nuestra app, llamado isAuthenticated, donde simularemos que el código de su interior tarda unos segundos en ejecutarse, como si se conectara con un servidor. Para eso, creamos una promesa y usamos un setTimeout. .
//Si la promesa se resuelve, devolverá el valor de la propiedad loggedIn.

import { Injectable } from "@angular/core";
@Injectable()
export class AuthService {
  constructor() { }
  loggedIn = false;
 
  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }
 
  login() {
    this.loggedIn = true;
  }
 
  logout() {
    this.loggedIn = false;
  }
  
}