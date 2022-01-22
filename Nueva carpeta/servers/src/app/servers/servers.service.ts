import { Injectable } from '@angular/core';
import { Server } from './interfaces/server.interface';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor() { }
  private servers: Server[] = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline'
    }
  ];

  getServers() : Server[]{
    return this.servers;
  }

  getServer(id: number): Server {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );//el fin no asegura que sea ese tipo sino que puede salir indefinido asi que se queja en el return siguiente
    //asi que se añade <server> para asegurar
    return <Server>server;
  }

  updateServer(id: number, serverInfo: {name: string, status: string}) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
