import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MessagesModule } from './messages/messages.module';
import { BodyComponent } from './body/body.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    MessagesModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  exports: [BodyComponent,AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
