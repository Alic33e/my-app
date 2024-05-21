import { Component } from '@angular/core';
import { MiDirectivaDirective } from 'src/app/mi-directiva.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MiDirectivaDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  onSubmit(event: Event) {
    event.preventDefault();
    console.log('El formulario fue enviado');
  }

}
