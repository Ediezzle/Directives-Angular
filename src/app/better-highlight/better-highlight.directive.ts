import { Directive, Renderer2, OnInit, ElementRef , HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
@Input() defaultColor: string = 'transparent';
@Input() highlightColor: string = 'blue';
//@Input('appBetterHighlight') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string ;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }

  //"eventData: Event" not mouseover's necessary argument in this case
  @HostListener('mouseenter') mouseover(eventData: Event){
     //this.elRef.nativeElement.style.backgroundColor='blue';
     this.backgroundColor = this.highlightColor
}

@HostListener('mouseleave') mouseleave(){
     //this.elRef.nativeElement.style.backgroundColor='transparent';
     this.backgroundColor = this.defaultColor;
}

}
