import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { AccomadationComponent } from './accomadation/accomadation.component';
import { AuthComponent } from './auth/auth.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { OffersComponent } from './offers/offers.component';
import { WeddingsComponent } from './weddings/weddings.component';

@NgModule({
  declarations: [
    AppComponent,
    AccomadationComponent,
    AuthComponent,
    CelebrationsComponent,
    SigninComponent,
    SignupComponent,
    FoodBeverageComponent,
    LifestyleComponent,
    OffersComponent,
    WeddingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
