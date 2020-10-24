import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {DealOfTheDayComponent} from './deal-of-the-day/deal-of-the-day.component';
import {MyCartComponent} from './my-cart/my-cart.component';
import {OrderPlaceSuccessComponent} from './order-place-success/order-place-success.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { SimilarProductsComponent } from './similar-products/similar-products.component';
import { TrendingProductsComponent } from './trending-products/trending-products.component';
import {SelectPaymentModeComponent} from './select-payment-mode/select-payment-mode.component';
import { FailPaymentComponent } from './fail-payment/fail-payment.component';
import { PandingPaymentComponent } from './panding-payment/panding-payment.component';
import { OrderCancellationComponent } from './order-cancellation/order-cancellation.component';
import { OrdersComponent } from './orders/orders.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Error404Component } from './error404/error404.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AllCategoryComponent } from './all-category/all-category.component';
import { SearchProductListComponent } from './search-product-list/search-product-list.component';

const routes: Routes = [
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'daily-deals', component: DealOfTheDayComponent },
  { path: 'cart', component: MyCartComponent },
  { path: 'order-placed', component: OrderPlaceSuccessComponent },
  { path: 'login', component: LoginButtonComponent},
  {path: 'order-details', component: OrderDetailsComponent},
  {path: 'similar', component: SimilarProductsComponent},
  {path: 'trending', component: TrendingProductsComponent},
  { path: 'payment-options', component: SelectPaymentModeComponent },
  {path: 'payment-fail', component: FailPaymentComponent},
  {path: 'payment-pending', component: PandingPaymentComponent},
  { path: 'cancel-order', component: OrderCancellationComponent },
  { path: 'my-orders', component: OrdersComponent },
  {path: 'error-404', component: Error404Component},
  {path: 'all-category', component: AllCategoryComponent},
  {path: 'product', component: ProductDetailComponent},
  {path: 'search', component: SearchProductListComponent},
  { path: '', component: HomepageComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
