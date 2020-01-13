
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Subject } from 'rxjs';
import { combineLatest, takeUntil } from "rxjs/operators";
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  public texto = null;
  public mensajes = [];
  public elemento: HTMLElement;
  private subs$: Subject<any> = new Subject();
  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.chatService.recibirMensaje()
      .pipe(takeUntil(this.subs$))
      .subscribe(msj => this.procesarMensaje(msj));
  }

  procesarMensaje(msj) {
    this.mensajes.push(msj)
    this.elemento = document.getElementById('chat-mensajes');
    setTimeout(() => {
      this.elemento.scrollTop = this.elemento.scrollHeight;
    }, 50);
  }

  enviar() {
    if (this.texto.trim() === '') { return; }
    this.chatService.enviarMensaje(this.texto);
    this.texto = null;
  }
  ngOnDestroy(): void {
    this.subs$.next();
    this.subs$.complete();
  }

}
