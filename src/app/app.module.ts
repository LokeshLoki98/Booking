import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookSeatComponent } from './book-seat/book-seat.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BgimgComponent } from './bgimg/bgimg.component';
import { DirectivesComponent } from './directives/directives.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { RamComponent } from './ram/ram.component';
import { SeethaComponent } from './seetha/seetha.component';


@NgModule({
  declarations: [
    AppComponent,
    BookSeatComponent,
    HomeComponent,
    NavbarComponent,
    BgimgComponent,
    DirectivesComponent,
    LifecycleComponent,
    RamComponent,
    SeethaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
