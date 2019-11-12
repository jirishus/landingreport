import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostcardsComponent } from './postcards/postcards.component';
import { ProfileComponent } from './home/profile/profile.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, children: [
    { path: 'profile', component: ProfileComponent }
  ] },
  { path: 'postcards', component: PostcardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
