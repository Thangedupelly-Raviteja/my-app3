import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-create-vehicles',
  templateUrl: './create-vehicles.component.html',
  styleUrls: ['./create-vehicles.component.css']
})
export class CreateVehiclesComponent {
  public userform:FormGroup= new FormGroup({

    Vehicle:new FormControl(),
    manufacture: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel:new FormControl(),
    color: new FormControl(),
    image: new FormControl(),
    
  });
  
  
  constructor(private _vehicleService:VehicleService){}
  submit(){
    console.log(this.userform.value);
   this._vehicleService.createVehicles(this.userform.value).subscribe(
    (data:any)=>{
      alert("user created succesfully");
    },
    (err:any)=>{
      alert("internal server error");
    }
   )
  }

}
