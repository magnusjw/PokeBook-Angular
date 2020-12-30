import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PokemonPageComponent } from './components/pokemon-page/pokemon-page.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [{

  path:'',
  component:LoginComponent
},
{
  path:'register',
  component:RegisterComponent
},
{
  path:'user',
  component:UserComponent
},
{
  path:'pokemon',
  component:PokemonPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
