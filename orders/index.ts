import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateOrderContainer } from './containers/create-order/create-order.container';
import { FormPartComponent } from './components/formpart/formpart.component';

@NgModule({
  imports:      [ CommonModule, ReactiveFormsModule ],
  declarations: [ CreateOrderContainer, FormPartComponent ],
  exports: [ CreateOrderContainer ]
})
export class OrdersModule {}
