import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [ 
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
