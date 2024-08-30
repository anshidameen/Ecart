import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages/pages.module';
import { HttpClientModule } from '@angular/common/http'
import { FooterComponent } from './shared/reusableComponents/footer/footer.component';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginComponent } from './pages/user/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatMenuModule} from '@angular/material/menu';
import{MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './shared/reusableComponents/header/header.component';
import { ContactComponent } from './pages/user/contact/contact.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    HeaderComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
