import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comment?: String;

  constructor() { }

  ngOnInit(): void {
  }

  commentClicked(){
    console.log(this.comment);
    this.comment = '';
  }

}
