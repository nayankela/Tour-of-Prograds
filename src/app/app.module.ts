import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProGradsComponent } from './pro-grads/pro-grads.component';
import { MessagesComponent } from './messages/messages.component';
import { ProgradDetailComponent } from './prograd-detail/prograd-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProGradsComponent,
    MessagesComponent,
    ProgradDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
