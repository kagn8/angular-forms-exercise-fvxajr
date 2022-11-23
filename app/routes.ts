import { RouterModule } from '@angular/router';
import { CreateOrderContainer } from '../orders/containers/create-order/create-order.container';

export const routes = [
    { path: '', component: CreateOrderContainer}
];
export const routing = RouterModule.forRoot(routes);