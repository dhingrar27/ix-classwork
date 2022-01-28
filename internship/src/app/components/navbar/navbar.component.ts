import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  homeClicked(){
    console.log('woot!');
    this.router.navigate(['home']);
  }

  feedbackClicked(){
    console.log('feedback');
    this.router.navigate(['feedback']);
  }

  commentClicked(){
    console.log('comment');
    this.router.navigate(['comment']);
  }

}
