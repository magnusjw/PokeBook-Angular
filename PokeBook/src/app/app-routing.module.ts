import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PokemonPageComponent } from './components/pokemon-page/pokemon-page.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { DiscussionBoardComponent } from './discussion-board/discussion-board.component';

const routes: Routes = [
  { path:'', component:LoginComponent },
  { path:'login', component:LoginComponent },
  { path:'register', component:RegisterComponent },
  { path:'user', component:UserComponent },
  { path:'editUser', component:EditUserComponent },
  { path:'viewUser', component:ViewUserComponent },
  { path:'pokemon/:id', component:PokemonPageComponent },
  { path:'pokemon/:id', component:PokemonPageComponent },
  { path: 'discussion/:id', component:DiscussionBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }