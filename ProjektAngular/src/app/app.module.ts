import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StartPageComponent } from './start-page/start-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StartPageComponent,
    AdminPageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild([

        {path: 'login', component: LoginComponent },
      { path : '', redirectTo : 'login' , pathMatch : 'full' },
      {path: 'start', component: StartPageComponent },
      { path : '', redirectTo : 'start' , pathMatch : 'full' },
      {path: 'register', component: RegisterComponent},
      {path : '', redirectTo : 'register', pathMatch : 'full'}


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
