import { Component } from '@angular/core';
import { Joke } from './models/joke.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ang-tutorials';
  jokes: Joke[] = [
    new Joke(
      'A kid threw a lump of cheddar at me',
      "I thought 'That's not very mature'"
    ),
    new Joke('No more joking?', "Ahuh, I'm learning lol"),
  ];
  imageUrls: string[] = [
    'https://unsplash.it/200?image=0',
    'https://unsplash.it/200?image=100',
    'https://unsplash.it/200?image=200',
  ];
}
