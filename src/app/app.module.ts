import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Providers
import { AuthenticationService } from './_providers/authentication.service';

// Compnents
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './page/page.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { Routing } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Routing,
    HttpModule,

  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
