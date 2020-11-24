import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';
import { RollOverImages } from './models/rollover-images.model';

@Directive({
  selector: '[appRolloverImage]'
})
export class RolloverImageDirective {

  @Input('appRolloverImage')
  images: RollOverImages = { Initial: 'https://unsplash.it/200/300?image=201', Over: '' }

  @HostBinding('src')
  imageUrl: string;

  @HostBinding('class.border-in')
  private isHovering: boolean = false;

  //called everytime an input prop value changes
  //hmmm, I don't quite agree with this one here
  // ngOnChanges(){
  //   if(this.images.Initial){
  //     this.imageUrl = this.images.Initial;
  //   }
  // }

  constructor(private element: ElementRef, private renderer: Renderer2) {
      this.imageUrl = this.images.Initial;

    //let imageElement = element.nativeElement;
    //this.renderer.setProperty(imageElement, 'src', this.images.Initial);
   }

  @HostListener('mouseover')
  onMouseOver(): void {
    //let imageElement = this.element.nativeElement;
    //this.renderer.setProperty(imageElement, 'src', this.images.Over);
    this.imageUrl = this.images.Over;
    this.isHovering = true;
  }

  @HostListener('mouseout')
  onMouseOut(): void{
    //let imageElement = this.element.nativeElement;
    //this.renderer.setProperty(imageElement, 'src', this.images.Initial);
    this.imageUrl = this.images.Initial;
    this.isHovering = false;

    let imageElement = this.element.nativeElement;
    this.renderer.addClass(imageElement, 'border-out')
  }
}
