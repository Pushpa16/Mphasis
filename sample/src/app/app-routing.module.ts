import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlistComponent } from './smodule/slist/slist.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'slist', component: SlistComponent},
  {path: 'home', component: HomeComponent},
  {path:'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
