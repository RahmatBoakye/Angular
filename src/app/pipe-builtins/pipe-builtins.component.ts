import { Component, OnInit } from '@angular/core';
import { PipesModel } from '../models/pipes.model';

@Component({
  selector: 'app-pipe-builtins',
  templateUrl: './pipe-builtins.component.html',
  styleUrls: ['./pipe-builtins.component.css']
})
export class PipeBuiltinsComponent implements OnInit {
  private jsonVal: object;
  title: string;
  pipesData: PipesModel;

  constructor() {
    let items = new Array<number>();
    items = [1, 2, 3, 4, 5, 6];

    this.jsonVal = { moo: 'foo', goo: { too: 'new'} };
    this.title = 'Pipes';
    this.pipesData = new PipesModel(
      1234.56,
      new Date(),
      2.3456,
      this.jsonVal,
      'LowerCasing',
      'UpperCasing',
      0.123456,
      items);
   }

  ngOnInit(): void {
  }

}

// Pipes: for applying data transformations to data to be showin in templates

// Currency Pipe => Format a number as a Currency
// 1. It accepts as first Argument is the currency's abbreviation e.g,: EUR for euro, USD for us dollars etc
// 2. Second param is the currency symbol, e.g.: {{ 12345 | currency: 'GHC':true}}

// Date Pipe => Format dates
// 1. First param is a date format string e.g.: 'shortDate', 'fullDate', 'd/M/y' etc

// Decimal Pipe => Format decimals
// uses the number pipe and takes the format: number: 'minNumberOfIntDigits.minNumOfFractionDigits-maxNumOfFractionDigits'
// this will round it off after the number of max frac digits. e.g. 2.3456 => 002.35

// Json Pipe => format json, use this to print out the content of an object
// uses the json pipe

// LoverCase & UppercasePipe => formats text to Capital and Small letters

// Percent Pipe => formats a number as a percent
// it can also format it like a decimal to show up to a certain number of decimal places


// Slice Pipe => for slicing up an array and getting some parts of it (think of it like a slice of cake from a full cake lol)
// first arg : start index of the slice
// second arg : end index of the slice
// you can add -ve indexes to be the offset from the end
// if you had slice: 1:3, this will select the 2nd item in your array up to the 3rd item in the array cause it excludes the one in position 3
// as that is the end of the slice.
// you can even use the slice pipe in a for loop

// Async Pipe => accepts an observable/promise and render the output without having to call the then/subscribe funcs


