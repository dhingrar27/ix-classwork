import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }
  feedbackClicked(){
    console.log('feedback');
    this.router.navigate(['feedback']);
  }

}
