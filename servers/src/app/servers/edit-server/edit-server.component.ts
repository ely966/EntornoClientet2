import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { Server } from '../interfaces/server.interface';
import { ActivatedRoute, Params , Router} from '@angular/router';
import { CanComponentDeactivate } from './canDeactivate.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styles: [
  ]
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm('Do you want to exit without saving your changes?');
    } else {
      return true;
    }}
  

  constructor(private serversService:ServersService,  private route: ActivatedRoute, private router:Router) { }
  //1. Para poder acceder a los query params y a los fragmentos, necesitamos inyectar la ActivatedRoute. La convertimos en propiedad y la llamamos route. 

  //2. En el ngOnInit, obtenemos los query params y los fragmentos. Al igual que antes, tenemos dos formas de obtenerlos. Hacemos un console.log para ver mejor cómo funcionan en la consola.
  //s. En el método subscribe de los query params es donde determinaremos si estamos autorizados a editar el servidor o no
  //permitir editar
  server!: Server;
  serverName = '';
  serverStatus = '';
  
  allowEdit = false;
 ngOnInit() {
  const id = +this.route.snapshot.params['id']
  this.server = this.serversService.getServer(id);
    //this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  //  console.log(this.route.snapshot.queryParams);
  //console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe();
    this.route.fragment.subscribe();

    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    );
  }
  changesSaved = false;
  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }
 
  //Asegurarse que guarde lso cambios
  

}