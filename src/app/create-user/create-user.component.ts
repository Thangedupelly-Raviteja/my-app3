import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  //it is used to store data from forms html

public userForm:FormGroup = new FormGroup({
  name: new FormControl(),
  phone: new FormControl(),
  city: new FormControl(),
  image: new FormControl()
});

constructor(private _userservice:UsersService){}
submit(){
  console.log( this.userForm.value);

  
  this._userservice.createuser(this.userForm.value).subscribe(
    (data:any)=>{
      alert("user created succesfully");
    },
    (err:any)=>{
      alert("Internal server error");
    }  )
}
}
