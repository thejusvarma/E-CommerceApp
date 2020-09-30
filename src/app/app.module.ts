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

  ],
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
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
