import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuario } from '../modelos/Usuario';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;
  public usuario: Usuario;

  constructor(
    private socket: Socket
  ) {
    this.checkStatus();
  }

  checkStatus() {
    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
      this.socketStatus = true;
    });
    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidor');
      this.socketStatus = false;
    });
  }

  emitir(evento: string, payload?: any, callback?: Function) {
    this.socket.emit(evento, payload, callback)
  }

  escuchar(evento: string) {
    return this.socket.fromEvent(evento);
  }

  loginWs(nombre: string) {
    console.log('Configurando nombre de usuario');
    this.emitir('configurar-usuario', { nombre }, (resp) => {
      console.log(resp);
    });

  }
}
