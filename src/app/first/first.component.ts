import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  showHeaderText: boolean = true;
  isDisabled: boolean = false;

  title: string = 'My Old Title';
  newTitle: string = 'My New Title';

  headerText: string;
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  testDate: Date = new Date();

  constructor() {
    this.headerText = 'Component Ctor called';
    console.log('value set in Ctor' + this.headerText);
  }

  ngOnInit(): void {
    if (this.showHeaderText) {
      this.headerText = 'My First Component is ready';
    } else {
      this.headerText =
        "I've been asked to show when you can't see the header text";
    }

    console.log('value set in Compo on Init' + this.headerText);
  }

  onBtnClick(): void {
    alert('button has been clicked');
  }
}
//App-module:
//declare all components
//import all modules
//register all services as providers

//Directives: attributes used to extend the html
// Structural, Attribute and Custom Directives
//Structural: used to change the layout of the page by adding DOM elements or removing DOM elements
// e.g.: *ngIf="showHeaderText == true", *ngFor="let number of numbers" {{ number }}
//Attribute: used to change the attribute or property of a DOM element
//e.g.: [ngClass]="showHeaderText ? 'text-red' : 'text-green'"

//String-interpolation: used for dynamic data binding
//e.g.: declare a variable (headerText: String = "Header text") in the component and then in the html of that component you can do:
// <h1>{{ headerText }}</h1>

// Data-binding: way to transfer data between UI and Component (model)
//Types: One-way & Two-way data binding
// One-way Binding are Property Data Binding and Event Data Binding
// prop data binding: when data is flowing from Component => UI
// event data binding: when data is flowing from UI => Component
//1-way binding: means only one of the participants (either UI/Component) will be in charge of managing the state of the data
// however the one participant that is not managing the state of the data will be notified of any changes the state of the data goes through
//e.g.: if the UI is managing the data, then the Component cannot update that data but it will know of any changes that occurs to the data by the UI

//2-way binding: uses the ngModel and both the UI and Component can both update the model / data
