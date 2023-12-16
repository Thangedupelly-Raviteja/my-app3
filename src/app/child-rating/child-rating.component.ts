import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-rating',
  templateUrl: './child-rating.component.html',
  styleUrls: ['./child-rating.component.css']
})
export class ChildRatingComponent {
  @Input() public rating:any= [];

  
}
