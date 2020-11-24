import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-example',
  templateUrl: './ng-for-example.component.html',
  styleUrls: ['./ng-for-example.component.css'],
})
export class NgForExampleComponent implements OnInit {
  footballers: Object[];

  constructor() {
    this.footballers = [
      { name: 'Messi', club: 'Barca' },
      { name: 'Cristiano', club: 'Juventus' },
      { name: 'Mbappe', club: 'PSG' },
      { name: 'Mane', club: 'Liverpool' },
      { name: 'Lewandoski', club: 'Bayern' },
    ];
  }

  ngOnInit(): void {}
}
