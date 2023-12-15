import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarksComponent } from './marks/marks.component';
import { EventComponent } from './event/event.component';
import { CarsComponent } from './cars/cars.component';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { PipesComponent } from './pipes/pipes.component';
import { ProductsComponent } from './products/products.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateVehiclesComponent } from './create-vehicles/create-vehicles.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { UserformComponent } from './userform/userform.component';
import { StudentFormComponent } from './studentform/studentform.component';
import { PricePipe } from './price.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    StructuraldirectivesComponent,
    PagenotfoundComponent,
    MarksComponent,
    EventComponent,
    CarsComponent,
    UserComponent,
    VehiclesComponent,
    PipesComponent,
    ProductsComponent,
    AccountsComponent,
    CreateUserComponent,
    CreateVehiclesComponent,
    CreateAccountComponent,
    UserformComponent,
    StudentFormComponent,
    PricePipe,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
