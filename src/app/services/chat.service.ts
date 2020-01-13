import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public wsService: WebsocketService
  ) { }

  enviarMensaje(mensaje: string) {
    const payload = {
      de: 'Yamid',
      cuerpo: mensaje
    }

    this.wsService.emitir('mensaje', payload);
  }

  recibirMensaje() {
    return this.wsService.escuchar('mensaje-nuevo');
  }
}
