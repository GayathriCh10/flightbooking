import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:'login', component:AdminComponent},
  {path:'user/login', component:UserComponent},
  {path:'add', component:AddAirlineComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
