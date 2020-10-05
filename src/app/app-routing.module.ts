import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {DealOfTheDayComponent} from './deal-of-the-day/deal-of-the-day.component';
import {MyCartComponent} from './my-cart/my-cart.component';
import {OrderPlaceSuccessComponent} from './order-place-success/order-place-success.component';
import {SelectPaymentModeComponent} from './select-payment-mode/select-payment-mode.component';
import { OrderCancellationComponent } from './order-cancellation/order-cancellation.component';
import { OrdersComponent } from './orders/orders.component';
const routes: Routes = [
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'daily-deals', component: DealOfTheDayComponent },
  { path: 'cart', component: MyCartComponent },
  { path: 'order-placed', component: OrderPlaceSuccessComponent },
  { path: 'payment-options', component: SelectPaymentModeComponent },
  { path: 'cancel-order', component: OrderCancellationComponent },
  { path: 'myorders', component: OrdersComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// @ts-ignore
export class AppRoutingModule { }
