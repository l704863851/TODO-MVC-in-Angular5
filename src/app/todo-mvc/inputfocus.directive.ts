import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputfocus]'
})
export class InputfocusDirective {

  constructor(private el: ElementRef) { }

  @Input('appInputfocus') set inputfocus(val) {
    if(val) {
      setTimeout(() => {
        this.el.nativeElement.focus()
      }, 0)
    }
  }

}
