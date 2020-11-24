import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-example',
  templateUrl: './ng-class-example.component.html',
  styleUrls: ['./ng-class-example.component.css']
})
export class NgClassExampleComponent implements OnInit {

  people: Object[];

  constructor() { 
    this.people = [
      { name: "Thess", hobby: 'Eating' }, 
      { name: "Agyingo", hobby: 'Skipping' }, 
      { name: "Jamela", hobby: 'Reading' }];
  }

  ngOnInit(): void {
  }

  getTextClass(value: string): string{
    switch(value){
      case 'Skipping':
        return 'text-success';
      case 'Reading':
        return 'text-danger';
      default:
        return 'text-warning';
    };
  }

}
