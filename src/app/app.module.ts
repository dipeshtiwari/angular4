import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Providers
import { AuthenticationService } from './_providers/authentication.service';
import { UsersService } from './_providers/users.service';

// Compnents
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './page/page.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { UsersComponent } from './page/users/users.component';
import { UsersCreateComponent } from './page/users/create/users.create.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { Routing } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    UsersComponent,
    UsersCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Routing,
    HttpModule,

  ],
  providers: [AuthenticationService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
