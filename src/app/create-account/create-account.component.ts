import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})

export class CreateAccountComponent {
  public Accountform:FormGroup= new FormGroup({
    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city: new FormControl(),
    profile_picture: new FormControl(),
  });
 


  constructor(private _accontservice:AccountService){}
  submit(){
    console.log(this.Accountform.value);
   this._accontservice.createAccount(this.Accountform.value).subscribe(
    (data:any)=>{
      alert("user created succesfully");
    },
    (err:any)=>{
      alert("internal server error");
    }
   )
  }
}
