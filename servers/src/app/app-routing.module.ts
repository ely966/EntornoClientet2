import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users/users.component';
import { ServersComponent } from './servers/servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard-servi/auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/canDeactivate.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  //{ path: "", component: AppComponent, pathMatch: "full" },
  //{ path: "login", component: LoginComponent, pathMatch: "full" },
  //{ path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: '', component: HomeComponent },
   //haremos que se abran dentro de la misma pagina y que no vaya a una nueva paga. con rutas child
  
  //User y rutaschild
  { path: 'users',component: UsersComponent, children: [
    { path: ':id/:name',component: UserComponent },
  ] 
  },
 //{ path: 'users', component: UserComponent }//{ path: 'users/:id', component: UserComponent },
  { path: 'users/:id/:name', component: UserComponent },

 //servers y rutaschild
  { path: 'servers', canActivateChild: [AuthGuard],component: ServersComponent, children: [
  //{ path: 'servers',  component: ServersComponent, children: [
    //{ path: ':id/edit', canActivate:[AuthGuard], component: EditServerComponent },
    	
  { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard], resolve: { server: ServerResolver } },
  { path: ':id', canActivate:[AuthGuard] ,component: ServerComponent }
  ] 
  },//pagina de error
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Ooopsi! Page not found.'}},
  { path: '**', redirectTo: '/not-found'}
  //{ path: 'servers/:id/edit', component: EditServerComponent },// añadir un servidor, así que le añadimos un id como segmento dinámico + la parte edit, describiendo así lo que queremos que suceda en esa ruta
  //{ path: 'servers/:id', component: ServerComponent }
  //El orden es súper importante, debiendo ser la "ruta comodín" la última de todas en el array de routes, porque las rutas son leídas de arriba hacia abajo.
];
///Añadirle usuario pero noe s muy dinamico
//{ path: 'users/1', component: UserComponent },
//{ path: 'users/2', component: UserComponent },
//{ path: 'users/3', component: UserComponent },
//Los dos puntos ( : ) son lo que diferencia un segmento dinámico de uno estático


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
