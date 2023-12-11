import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent {

  public userForm:FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    age: new FormControl(null,[Validators.required,Validators.min(0),Validators.maxLength(100)]),
    phone: new FormControl(null,[Validators.required,Validators.min(1000000000),Validators.max(999999999)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    address: new FormGroup({
      city: new FormControl(null,Validators.required),
      pincode: new FormControl(null,),
    }),
    cards: new FormArray([]),
    type: new FormControl(),
    busfee: new FormControl(),
    hostelfee: new FormControl()

  
  })

   get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
   }

   add(){
    this.cardsFormArray.push(
      new FormGroup({
        no: new FormControl(),
        expiry: new FormControl(),
        cvv: new FormControl(null,[Validators.required])

      })
    )
   }

   delete(i:number){
    this.cardsFormArray.removeAt(i);
   }

  submit(){
    console.log(this.userForm);
  }



}
