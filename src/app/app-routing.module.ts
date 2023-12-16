import { Component, NgModule } from '@angular/core';
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
import { NotifyGuard } from './notify.guard';
import { ParentComponent } from './parent/parent.component';
import { ItemsComponent } from './items/items.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';
import { RatingComponent } from './rating/rating.component';
import { AboutCompanyComponent } from './about/about-company/about-company.component';

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
  {path:'create-user', canDeactivate:[NotifyGuard],component:CreateUserComponent},
  {path:'create-vehicles',component:CreateVehiclesComponent},
  {path:'createAccount',component:CreateAccountComponent},
  {path:'userform',canDeactivate:[NotifyGuard],component:UserformComponent},
  {path:'studentform',canDeactivate:[NotifyGuard],component:StudentFormComponent},
  {path:'parent',component:ParentComponent},
  {path:'items', component: ItemsComponent},
  {path:'nav', component:NavComponent},
  {path:'cart',component:CartComponent},
  {path:'rating',component:RatingComponent},
  {path:'about-company',component:AboutCompanyComponent}, 
  
  //path to lazyLoading

  {
    path: 'payments',
    loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)
  }

  
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
