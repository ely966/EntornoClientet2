import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
 
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private authService: AuthService, private router: Router) {}

  
//Como puede devolver un underfile, pues se añade el "|any" porque como estamos en el modo stricto,
// nos salta un fallo porque no eta todo concretado su tipo
    canActivate(route: ActivatedRouteSnapshot,

                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean |any{

      return this.authService.isAuthenticated()

        .then(

          (authenticated) => {

            if(authenticated) {

              return true;

            } else {

              this.router.navigate(['/']); //Se coloca el false porque lo requiere el modo stricto pero ne verdad nunca llega porque lo redirige al /
              return false

            }

          }

        );

    }


    canActivateChild(route: ActivatedRouteSnapshot, 

                     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.canActivate(route, state);

    }

}