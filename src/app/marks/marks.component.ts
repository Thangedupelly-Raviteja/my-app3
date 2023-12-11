import { Component } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent {

  public students:any=[
    {name:'a',marks:100,Grade:'a'},
    {name:'b',marks:70,Grade:'b'},
    {name:'c',marks:60,Grade:'c'},
    {name:'d',marks:30,Grade:'fail'}
  ]
}
