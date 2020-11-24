import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';
import { Configuration } from './models/directive.config.model';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {

  //adding one css class to bind to
  // @HostBinding('class.card-outline-primary') //this is the class we want to add/remove to the host element based on isHovering values (T/F)
  // private isHovering: boolean = false;

  //adding multiple class attributes to bind to
  @HostBinding('class.card-outline-primary')
  @HostBinding('class.card-color')
  private isHovering: boolean = false;

  //let's make this reuseable by allowing the user to add a config for what class name to use with the querySelector 
  //to get the host element the directive is applied to
  
  @Input('appCardHover') //make the directive name an alias for your input prop: so we can do: [appCardHover]='{querySelector: '.card-text'}' in the html
  config: Configuration = { querySelector: '' };

  constructor(private element: ElementRef, private renderer: Renderer2) { 
    //this gives the directive access to the actual wrapped DOM element its attached to

    //the current state assumes that this directive will always have access to the DOM element (in a browser)
    //however, we could be running this in different environments => mobile app / server-side via node where there is no browser and therefore: no DOM Elements
    //element.nativeElement.style.backgroundColor = 'rosybrown';

    

    //to fix that, angular provides the Renderer (Renderer2)
    //provides a platform/environ independent way of setting props on an element
    

    //set the background color using the renderer
    //renderer.setStyle(element.nativeElement,'backgroundColor','gray');
  }

  //to get the directive to listen to output Events, you decorate the method with the @HostListener('jsEventName, e.g.: mouseover')
  //so it declares a DOM event listener, and provides a handling method(callback) to run when the event it triggered
  @HostListener('mouseover')
  onMouseOver(): void{
    let jokePunchlineElement = this.element.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setStyle(jokePunchlineElement, 'display', 'block');
    this.isHovering = true;
  }

  @HostListener('mouseout')
  onMouseOut(): void{
    let jokePunchlineElement = this.element.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setStyle(jokePunchlineElement, 'display', 'none');
    this.isHovering = false;
  }
}


//Directives: use the @Directive decorator
//selector is wrapped: [appCardHover], always add a prefix, e.g: app: use an attribute selector
//select is wrapped as part of the css matching rules where if you want to pass a css attribute to an element, you have to wrap it in []
//use angular cli: ng g d nameOfDirectiveWithoutTheKeywordDirectiveAtTheEnd
//The selector uses css matching rules to map a component/directive to an html element
//more tips on angular cli for: https://riptutorial.com/angular-cli/example/29977/generating-directives

//HostListener decorator:
//used to listen to output events (e.g.: mouseover, mouseout etc)

//HostBinding decorator:
//listen to host input properties such as list of classes set on the host element
