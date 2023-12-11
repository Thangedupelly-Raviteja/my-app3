import { NgModule } from '@angular/core';
import { RouterModule, Routes, createUrlTreeFromSnapshot } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { EventComponent } from './event/event.component';
import { UserComponent } from './user/user.component';
import { MarksComponent } from './marks/marks.component';
import { PipesComponent } from './pipes/pipes.component';
import { CarsComponent } from './cars/cars.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateVehiclesComponent } from './create-vehicles/create-vehicles.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { UserformComponent } from './userform/userform.component';
import { StudentFormComponent } from './studentform/studentform.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  
  {path:'login',component: LoginComponent},
{path: 'dashboard',component:DashboardComponent,children:[
  {path: 'structuraldirectives',component:StructuraldirectivesComponent},
  {path:'event',component:EventComponent},
  {path:'marks',component:MarksComponent},
  {path:'user',component:UserComponent},
  {path:'pipes',component:PipesComponent},
  {path:'cars',component:CarsComponent},
  {path:'vehicles',component:VehiclesComponent},
  {path:'accounts',component:AccountsComponent},
  {path:'create-user',component:CreateUserComponent},
  {path:'create-vehicles',component:CreateVehiclesComponent},
  {path:'createAccount',component:CreateAccountComponent},
  {path:'userform',component:UserformComponent},
  {path:'studentform',component:StudentFormComponent},
]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
