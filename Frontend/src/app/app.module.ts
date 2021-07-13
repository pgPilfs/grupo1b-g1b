import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule
=======
    FormsModule,
    ReactiveFormsModule,
>>>>>>> dab061356cc6d12f4a91ecd04b4e28a019d5db73
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
