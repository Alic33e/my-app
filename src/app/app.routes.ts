import { Routes } from '@angular/router';
import { GalleryComponent } from '@components/gallery/gallery.component';

export const routes: Routes = [
    { path: '', redirectTo: 'gallery', pathMatch: 'full' },
    { path: 'gallery', component: GalleryComponent, title: 'Gallery' },
    { path: '**', redirectTo: 'gallery', pathMatch: 'full' }
];
