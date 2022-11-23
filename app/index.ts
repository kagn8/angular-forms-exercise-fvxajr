import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { OrdersModule } from '../orders';

import { AppContainer } from './containers/app/app.container';

import { routing } from './routes';

@NgModule({
  imports:      [ BrowserModule, FormsModule, OrdersModule, routing ],
  declarations: [ AppContainer ],
  bootstrap:    [ AppContainer ]
})
export class AppModule { }
