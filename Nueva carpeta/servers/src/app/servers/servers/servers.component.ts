import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [
  ]
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];
  constructor(private serversService:ServersService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.servers = this.serversService.getServers();
    
  }
  onReload() {
    //i no es relativo, no recaragra ni mandara nad ['/servers']
    //funciona porque es el metodo navigate en vez del routerLInk

    //relativeTo, que espera que le informemos sobre a qué ruta debe ser relativa el link que le pasamos en el primer parámetro. 
    //Si no le indicamos nada, el comportamiento por defecto es usar la ruta raíz, es decir, http://localhost:4200
    //A la propiedad relativeTo debemos pasarle la ruta actual en la que nos encontremos, que previamente debemos inyectar en el constructor. 
    //Para obtener esa ruta, Angular nos da una herramienta muy conveniente, el ActivatedRoute, que debe ser importado desde el angular/route
    //se llamara route y sera una propiedad de ts

    // vas a tu navegador, comprobarás que hemos roto la app, ya que Angular está intentando 
    //encontrar la ruta http://localhost:4200/servers/servers, :
    //this.router.navigate(['servers'],{relativeTo:this.route});
    
  }

}

