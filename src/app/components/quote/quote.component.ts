import { Component, OnInit, EventEmitter } from '@angular/core';
import { Quote } from 'src/app/classes/quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, "Tchala_from_Wakanda", 'Nelson Mandela', 'Do not judge me by my success, judge me by how many times I fell down and got back up again.', new Date(1994, 5, 14)),
    new Quote(2, "Tree_Lover",'Wangari Maathai', 'It’s the little things citizens do. That’s what will make the difference.', new Date(1990, 1, 27) ),
    new Quote(3, "Kwabena_Akomea",'Ellen Johnson Sirleaf', 'If your dreams do not scare you, they are not big enough.', new Date(2009, 11, 20)),
    new Quote(4, "_BurnaEbunoluwa",'Aliko Dangote', 'If you don’t have ambition, you shouldn’t be alive.', new Date(2004, 2, 9))
  ]

  showDetail(index){
    this.quotes[index].showDets = !this.quotes[index].showDets;
  }

  addQuote(quote){
    let quoteLength =  this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote)
  }  

  deleteQuote(onDelete, index){
    if (onDelete) {
      let eliminate = confirm(`Are you sure you want to delete ${this.quotes[index].author}'s quote?`)
    
    if (eliminate) {
      this.quotes.splice(index,1)
    }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
