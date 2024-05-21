import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMiDirectiva]',
  standalone: true
})
export class MiDirectivaDirective {
  
  @HostListener('click', ['$event'])
  onClick(event: any) {
    console.log('Mi directiva fue clickeada');
  }
  
}
