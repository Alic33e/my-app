import { Routes } from '@angular/router';
import { FormDisplayComponent } from '@components/form-display/form-display.component';
import { FormComponent } from '@components/form/form.component';
import { HomeComponent } from '@components/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, title: 'Home' },
    { path: 'form', component: FormComponent, title: 'Form' }, 
    { path: 'form-display', component: FormDisplayComponent, title: 'FormDisplay' }, 
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
