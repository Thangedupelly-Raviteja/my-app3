import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  public name1:string='abc';
  public name2:string='XYZ';

  //This is used to display current date and time
  public today:any= new Date();
  public product:any= {
    name:'laptop',
    prices:45000

  }

}
