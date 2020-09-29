import { Component, OnInit, Input } from '@angular/core';
import { HighlightDirective } from 'src/app/direcitves/highlight.directive';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  @Input () upVote: boolean;
  @Input () downVote: boolean;

  numberOfUpvotes : number = 0;
  numberOfDownvotes : number = 0;

  // checkLikes(){
  //   if(Math.max(this.numberOfUpvotes)){
  //     console.log('This is max')
  //   }
  // }

  upVoteClick(){
    this.upVote = true;
    if(this.upVote = true){
      this.downVote = false;
      this.numberOfDownvotes = null;
      this.numberOfUpvotes++;
    }
  }
  
  downVoteClick(){
    this.downVote =  true;
    if(this.downVote = true){
      this.upVote = false;
      this.numberOfUpvotes = null;
      this.numberOfDownvotes++;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
