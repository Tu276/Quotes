import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from 'src/app/classes/quote'

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input () quote:Quote;
  @Output () onDelete = new EventEmitter<boolean>();

  quoteDelete(toDelete:boolean){
    this.onDelete.emit(toDelete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
