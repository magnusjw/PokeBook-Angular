import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
import { PokemonPageComponent } from './components/pokemon-page/pokemon-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoketypePipe } from './pipes/poketype.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    PokemonPageComponent,
    PoketypePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ], //roam
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
