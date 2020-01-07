import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button'; 
import { FormsModule } from '@angular/forms';
import { NotesService } from './notes.service';
import { HttpClientModule} from '@angular/common/http'
import {MatCardModule} from '@angular/material/card'; 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [ 
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [NotesService ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
