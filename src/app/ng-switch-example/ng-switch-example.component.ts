import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-example',
  templateUrl: './ng-switch-example.component.html',
  styleUrls: ['./ng-switch-example.component.css']
})
export class NgSwitchExampleComponent implements OnInit {

  retailers: Object[];

  constructor() {
    this.retailers = [
      { name: 'Shoprite', product: 'Meat', location: 'ACCRA' },
      { name: 'Melcom', product: 'Furniture', location: 'KUMASI' },
      { name: 'Woodin', product: 'Cloth', location: 'SUNYANI' },
      { name: 'Samsung', product: 'Phone', location: 'TAKORADI' }
    ];
  }

  ngOnInit(): void {
  }

}
