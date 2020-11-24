import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { Joke } from '../models/joke.model';

@Component({
  selector: 'app-joke', //this is using css matching rules : p { width: 10px, etc }
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css'],
})
export class JokeComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  //parent components will supply the joke object to you
  @Input() joke: Joke; //this marks your joke component prop as an input prop to the DOM so we could use property binding to bind data to it in the Html of a parent component
  //like <app-joke [joke]="someJsCode"></app-joke>
  //if you wanted the input name to be something other than 'joke' to consumers, then do:
  //@Input('theOtherName') joke: Joke;

  //broadcast what's happened to your parent components
  @Output() jokeDeleted = new EventEmitter<Joke>();

  constructor() {
    console.log(
      `constructor => I'm called when a new component or directive is created. See new data is ${this.joke}`
    );
  }

  //use this to find out details about what input props have changed.
  ngOnChanges(changes: SimpleChanges) {
    console.log(
      `ngOnChanges => Parent => when input props change. See data is ${this.joke}`
    );

    for (let key in changes) {
      console.log(`${key} changed. 
      Current: ${changes[key].currentValue}.
      Previous: ${changes[key].previousValue}`);
    }
  }

  //input initialization logic goes here
  ngOnInit(): void {
    //if you want to initialize any logic for input properties of the components, do that here: e.g.: as the value of the input Joke
    //would have been initialized properly here but if it was done in the ctor, it will be undefined.

    //and in the onChanges, it will keep re-initializing your value as this onChanges is called every time the input prop changes
    //but onInit is only called once and that's it
    console.log(
      `ngOnInit => Parent => when new component is initialized. See data is ${this.joke}`
    );
  }

  ngDoCheck() {
    console.log(
      `ngDoCheck => Parent => when the change detection mechanism starts. See data is ${this.joke}`
    );
  }

  //child component events
  ngAfterContentInit() {
    console.log(
      `ngAfterContentInit => Child => when component content projection is done. See data is ${this.joke}`
    );
  }

  ngAfterContentChecked() {
    console.log(
      `ngAfterContentChecked => Child => when change detection is completed on the content. See data is ${this.joke}`
    );
  }

  ngAfterViewInit() {
    console.log(
      `ngAfterViewInit => Child => when component view is fully initialized. See data is ${this.joke}`
    );
  }

  ngAfterViewChecked() {
    console.log(
      `ngAfterViewChecked => Child => when change detection is completed on component view. See data is ${this.joke}`
    );
  }

  //add clean up logic for the component here
  ngOnDestroy() {
    console.log(
      `ngOnDestroy => Parent => when the component is about to die. See data is ${this.joke}`
    );
  }

  onDeleteJokeBtnClick() {
    this.jokeDeleted.emit(this.joke);
  }
}

//we link compos together with [inputs](props) and (output)events

//COMPONENT LIFE CYCLES Hooks
// 1. Creation => Destroyed

//Angular Component Hooks below: these are methods we can hook to during a components life cycle
// 1. Parent Components:

//     A. Constructor:
//     Invoked when angular creates a component or directive by calling new on the class

//     B. ngOnChanges:
//     Invoked whenever there are any changes on any of the input props of the component.

//     C. ngOnInit:
//     Invoked when a given component is initialized but its called once when the first ngOnChanges happens and then its not called again.
//     but the ngOnChanges will be called everytime the input prop of the component changes

//     D. ngDoCheck:
//     when the changeDetector of the given component is invoked. Allows us to implement our own change detection algorithm/logic for the given component.
//     NOTE: do not implement both ngOnChanges and ngDoCheck methods on the same component

// 2. Child Components: these are called for child components not directives

//       - ngAfterContentInit: called after angular performs with any content projection into the components view

//       - ngAfterContentChecked: called each time the content of a given component has been checked by the change detection mechanism of angular

//       - ngAfterViewInit: when a component view has been fully initialized

//       - ngAfterViewChecked: when the view of a given component has been checked by the change detection mechanism of angular

//     Parent Component:
// E.  ngOnDestroy:
//      called just before angular destroys a component. Use this hook to unsubscribe from observables and detach event EventHandlers.
//      its mainly there to prevent memory leaks.
