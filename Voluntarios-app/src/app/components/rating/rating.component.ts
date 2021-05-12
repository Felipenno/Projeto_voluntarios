import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
  providers: [NgbRatingConfig]
})
export class RatingComponent {
  currentRate = 5;

  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
   } 

  
 

}
