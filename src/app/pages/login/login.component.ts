import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public nombre = null;
  constructor(
    public wsService: WebsocketService
  ) { }

  ngOnInit() {
  }
  ingresar() {
    if (this.nombre.trim().length === 0) { return; }
    this.wsService.loginWs(this.nombre);
  }
}
