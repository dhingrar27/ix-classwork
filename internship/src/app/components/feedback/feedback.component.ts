import { Component, OnInit } from '@angular/core';
import Feedback from 'src/app/modals/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedback: Feedback = new Feedback();

  constructor() { }

  ngOnInit(): void {
  }

  fsubmitClicked(){
    console.log(this.feedback)
    // console.log(this.isValid());
    //this.resetForm();
  }
  
  // resetForm(){
  //   this.fname = '';
  //   this.lname = '';
  //   this.email = '';
  //   this.pname = '';
  //   this.feedback = '';
  // }

}
