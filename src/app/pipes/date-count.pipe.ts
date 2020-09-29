import { Output, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); //get current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value - todayWithNoTime) //returns value in miliseconds
    const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day

    var dateDifferenceSeconds = dateDifference*0.001; //converts miliseconds to seconds

    var dateCounter = dateDifferenceSeconds/secondsInDay;//returns number of days

    if (dateCounter > 365 && dateCounter >=1){
      dateCounter = Math.round(dateCounter/365);
      var dateOutput: any = dateCounter.toString() + " years ago"
      return dateOutput;
    }if (dateCounter < 1 ){
      var p = new Date().getHours() + "" + new Date().getMinutes() + "HRS";
      var latest : any = "today at " + p ; 
      return latest;
    }
    
  }

}
