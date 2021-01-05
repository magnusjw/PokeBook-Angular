import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PokemonPageComponent } from './components/pokemon-page/pokemon-page.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
<<<<<<< HEAD
import { EditUserComponent } from './components/edit-user/edit-user.component';
=======
import { DiscussionBoardComponent } from './discussion-board/discussion-board.component';
>>>>>>> b986104604515f857ec76d4c24af31cad19a99cd

const routes: Routes = [
  { path:'', component:LoginComponent },
  { path:'login', component:LoginComponent },
  { path:'register', component:RegisterComponent },
  { path:'user', component:UserComponent },
<<<<<<< HEAD
  { path:'editUser', component:EditUserComponent },
  { path:'pokemon/:id', component:PokemonPageComponent }
=======
  { path:'pokemon/:id', component:PokemonPageComponent },
  { path: 'discussion/:id', component:DiscussionBoardComponent}
>>>>>>> b986104604515f857ec76d4c24af31cad19a99cd
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }