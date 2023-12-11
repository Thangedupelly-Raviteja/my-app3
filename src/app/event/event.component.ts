import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  public username:string= '';
  public names:string[]=[];

  submit(){
    this.names.push(this.username)
    this.username=''
  }
  delete(){
   this.names.pop()
  }

}
