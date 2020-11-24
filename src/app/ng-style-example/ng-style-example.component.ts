import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-example',
  templateUrl: './ng-style-example.component.html',
  styleUrls: ['./ng-style-example.component.css']
})
export class NgStyleExampleComponent implements OnInit {

  people: Object[];

  constructor() { 
    this.people = [
      { name: "Rhammie Snr", hobby: 'Sleeping' }, 
      { name: "Kay Jnr", hobby: 'Gyming' }, 
      { name: "Afra K", hobby: 'Praying' }];
  }

  ngOnInit(): void {
  }

  getColor(value: string): string{
    switch(value){
      case 'Praying':
        return 'green';
      case 'Gyming':
        return 'yellow';
      default:
        return 'red';
    };
  }

  getAnotherColorScheme(value: string): string{
    switch(value){
      case 'Praying':
        return 'rosybrown';
      case 'Gyming':
        return 'cyan';
      default:
        return 'violet';
    };
  }
}


//To change styling/css props dynamically, we use the NgStyle / NgClass directives
//use NgStyle to set a given dom elements style: i.e.: css properties 
//use NgClass to set elements class
