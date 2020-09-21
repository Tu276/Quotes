import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    
    new Quote(1, 'Rebuildimg character', 'When you screw up and no one is saying anything to you anymore, it means they gave up',new Date(2020,3,14)),
    new Quote(2,'Teamwork','You cant get there alone: make people feel better',new Date(2020,3,14)),
    new Quote(3,'Dedication','Brick walls are there to stop people who dont want it badly enough',new Date(2020,3,14)),
    new Quote(4,'Innovation','Move from experiencing to making',new Date(2020,3,14)),
    new Quote(5,'Sadness','Experirence is what you ger when you dont get what you wanted',new Date(2020,3,14)),
    // new Quote(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2030,3,14)),
  ];


  toggleDetails(index: string | number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deletequote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!###### check!!!!
  addNewQuote(quote: Quote){ 
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() {}

  ngOnInit() {}
}
