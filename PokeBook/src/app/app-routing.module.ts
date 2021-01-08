import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PokemonPageComponent } from './components/pokemon-page/pokemon-page.component';
import { RegisterComponent } from './components/register/register.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { UserFeedComponent } from './components/user-feed/user-feed.component';
import { RerouteComponent } from './components/reroute/reroute.component';

const routes: Routes = [
  { path:'', component:LoginComponent },
  { path:'login', component:LoginComponent },
  { path:'register', component:RegisterComponent },
  { path:'pokemon/:search', component:PokemonPageComponent },
  { path:'reroute/:search', component:RerouteComponent },
  //View User Path
  { path:'editUser', component:EditUserComponent },
  { path:'userFeed', component:UserFeedComponent },
  { path:'viewUser', component:ViewUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }