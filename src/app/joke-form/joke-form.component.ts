import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Joke } from '../models/joke.model';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css'],
  //encapsulation: ViewEncapsulation.None, : this will let the .card css leak into all .card places
})
export class JokeFormComponent implements OnInit {
  @Output() jokeCreated = new EventEmitter<Joke>(); // helper class used to emit events when something happens: hmm is this like event listeners on ES5 ?
  //other components can bind and react to those events

  constructor() {}

  ngOnInit(): void {}

  createJoke(setupValue: string, punchLineValue: string) {
    //outputs an event, and the event will contain the Joke property
    if (setupValue && punchLineValue) {
      this.jokeCreated.emit(new Joke(setupValue, punchLineValue));
    }
  }
}
