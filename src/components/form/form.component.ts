import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  private router = inject(Router);

  form = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  @Output() displayFormData = new EventEmitter<any>();

  onSubmit() {
    const formData = {
      nombre: this.form.value.nombre?.toString(),
      email: this.form.value.email?.toString()
    };

    this.router.navigate(['/form-display'], { queryParams: formData });

    this.displayFormData.emit(formData);

    console.log('Formulario enviado');
    console.log('Nombre:', formData.nombre);
    console.log('Email:', formData.email);
  }

  showConfirmDialog() {
    if (confirm('¿Estás seguro de enviar el formulario?')) {
      this.onSubmit();
    }
  }
}
