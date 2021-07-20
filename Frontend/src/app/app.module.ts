import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
>>>>>>> 3a6b9e21b343e49fc53e579a1f972fdb3d977fd0
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SharedModule,
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
 
=======
    BrowserAnimationsModule,
>>>>>>> 3a6b9e21b343e49fc53e579a1f972fdb3d977fd0
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
