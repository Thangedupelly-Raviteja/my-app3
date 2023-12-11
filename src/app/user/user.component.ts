import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  public users:any =[];
  public term:string='';


  constructor(private  _UserService:UsersService){
    _UserService.getusers().subscribe(
      (data:any)=>{
        this.users=data;
      },
      (err:any)=>{
        alert("Internal Server error");
      }
      )
    

  }
 /* getFilteredUsers(){
    this._UserService.getFilteredUsers(this.term).subscribe(
      (data:any)=>{
        this.users=data;
      },
      (err:any)=>{
        alert("Internal Server error");
      }
    )
  } */

}
