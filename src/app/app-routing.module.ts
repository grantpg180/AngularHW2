import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingComponent } from './comp-routing/routing.component';
import { HomeComponent } from './comp-home/home.component';


const routes: Routes = [
  {path: 'one', component: RoutingComponent},
  {path: 'two', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
