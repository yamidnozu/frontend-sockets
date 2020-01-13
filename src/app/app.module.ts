import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Sockets
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { FooterComponent } from './componentes/footer/footer.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { FormsModule } from '@angular/forms'

const config: SocketIoConfig = {
  url: environment.wsUrl, options: {}
};

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
