import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-grouped-example',
  templateUrl: './ng-for-grouped-example.component.html',
  styleUrls: ['./ng-for-grouped-example.component.css']
})
export class NgForGroupedExampleComponent implements OnInit {

  peopleByCountry: Object[];

  constructor() {
    this.peopleByCountry = [
      {
        country: 'GHANA', 
        people: [
          {
            name: 'Rhammie'
          }, 
          {
            name: 'Kay Jnr'
          }]
      },
      {
        country: 'UK', 
        people: [
          {
            name: 'Rahmat'
          }, 
          {
            name: 'AJ'
          }]
      }
    ]
   }

  ngOnInit(): void {
  }

}

//looping directives: NgFor
// Use *ngFor="let item of Items" to loop through a collection of items and create multiple elements dynamically from a template element
//the template element is the element that the *ngFor directive is attached to. e.g.: <li *ngFor="let item of Items"></li>
//we can get access to the current index of the array item by assigning "index" to a variable. e.g.: *ngFor="let item of Items; let i = index;"


//Conditional directives: NgIf & NgSwitch : used to add/remove dom elements based on a condition.