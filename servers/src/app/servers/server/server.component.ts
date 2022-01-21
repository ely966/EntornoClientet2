import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { Server } from '../interfaces/server.interface';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
  ]
})
export class ServerComponent implements OnInit {
  server!: Server;

  constructor(private serversService: ServersService,private route: ActivatedRoute , private router:Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(1);
    //this.route.params.subscribe((params: Params) => {
    //this.server = this.serversService.getServer(params['id']); //recogemos un string no un id asi que nos saldra un error
     //https://www.acontracorrientech.com/routing-en-angular-guia-completa-parte-5/ 
    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params['id']);
    });
    
     }
  onEdit() { //añadir ruter junto activerouter en import
    //this.router.navigate(['edit'], {relativeTo: this.route});
//objeto relativeTo del router, llamada 
    //queryParamsHandling.
    //Esta propiedad espera un string, cuyos valores pueden ser:
    //merge ➡️ fusionará cualquier query param existente con los nuevos.
    //preserve ➡️ reemplaza el comportamiento por defecto, que es eliminar los query params, justo lo que nos sucede ahora. Y mantiene los query params existentes. 
    //this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
//Con estos cambios, ya volvemos a ver la sección para editar un servidor, aunque sólo en el Devserver, porque es el que tiene el ID 3, y es el único que hemos configurado para que tenga derechos de edición.
this.route.data.subscribe(
  (data: Data) => {
    this.server = data['server'];
  }
)

}

}
