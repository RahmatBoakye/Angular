import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-example',
  templateUrl: './ng-if-example.component.html',
  styleUrls: ['./ng-if-example.component.css']
})
export class NgIfExampleComponent implements OnInit {

  shops: Object[];

  constructor() {
    this.shops = [
      { name: 'Tesco', food: 'Meat', rating: 5 },
      { name: 'Aldi', food: 'Fish', rating: 4 },
      { name: 'Lidl', food: 'Mushroom', rating: 2 },
    ];
  }


  ngOnInit(): void {
  }

}
