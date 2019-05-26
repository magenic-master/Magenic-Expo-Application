import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { BannerTextComponent } from './banner-text/banner-text.component';
import { PopularItemsComponent } from './popular-items/popular-items.component';
import { MapLocationComponent } from './map-location/map-location.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    BannerTextComponent,
    PopularItemsComponent,
    MapLocationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
