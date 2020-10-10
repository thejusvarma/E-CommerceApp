import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { SidenavComponent } from './header/sidenav/sidenav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import { MegaMenuComponent } from './header/mega-menu/mega-menu.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ProductCardComponent } from './product-card/product-card.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {FooterComponent} from './footer/footer.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {OrderPlaceSuccessComponent} from './order-place-success/order-place-success.component';
import {DealOfTheDayComponent} from './deal-of-the-day/deal-of-the-day.component';
import {DealDayProdCardComponent} from './deal-day-prod-card/deal-day-prod-card.component';
import { SignupButtonComponent } from './signup-button/signup-button.component';
import { SignupComponent } from './signup/signup.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { SimilarProductsComponent } from './similar-products/similar-products.component';
import { TrendingProductsComponent } from './trending-products/trending-products.component';
import {SelectPaymentModeComponent} from './select-payment-mode/select-payment-mode.component';
import {MatRadioModule} from '@angular/material/radio';
import { OrderCancellationComponent } from './order-cancellation/order-cancellation.component';
import {MyCartItemComponent} from './my-cart/my-cart-item/my-cart-item.component';
import {MyCartSavedLaterComponent} from './my-cart/my-cart-saved-later/my-cart-saved-later.component';
import { FailPaymentComponent } from './fail-payment/fail-payment.component';
import { PandingPaymentComponent } from './panding-payment/panding-payment.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderCardComponent } from './order-card/order-card.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageImageCarouselComponent } from './homepage/homepage-image-carousel/homepage-image-carousel.component';
import { HomepageOurAllProductsComponent } from './homepage/homepage-our-all-products/homepage-our-all-products.component';
import { HomepageMidCarouselComponent } from './homepage/homepage-mid-carousel/homepage-mid-carousel.component';
import { HomepageTrendingProductsComponent } from './homepage/homepage-trending-products/homepage-trending-products.component';
import { HomepageDealOfTheDayComponent } from './homepage/homepage-deal-of-the-day/homepage-deal-of-the-day.component';
import { Error404Component } from './error404/error404.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShareButtonComponent } from './share-button/share-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SidenavComponent,
    MegaMenuComponent,
    ProductCardComponent,
    MyCartComponent,
    FooterComponent,
    ContactUsComponent,
    AboutUsComponent,
    OrderPlaceSuccessComponent,
    DealOfTheDayComponent,
    DealDayProdCardComponent,
    SignupButtonComponent,
    SignupComponent,
    LoginButtonComponent,
    LoginComponent,
    OtpComponent,
    OrderDetailsComponent,
    SimilarProductsComponent,
    TrendingProductsComponent,
    SelectPaymentModeComponent,
    MyCartItemComponent,
    MyCartSavedLaterComponent,
    FailPaymentComponent,
    PandingPaymentComponent,
    OrderCancellationComponent,
    OrdersComponent,
    OrderCardComponent,
    HomepageComponent,
    HomepageImageCarouselComponent,
    HomepageOurAllProductsComponent,
    HomepageMidCarouselComponent,
    HomepageTrendingProductsComponent,
    HomepageDealOfTheDayComponent,
    Error404Component,
    ProductDetailComponent,
    ShareButtonComponent


  ],
  entryComponents:[LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatExpansionModule,
    MatTooltipModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
