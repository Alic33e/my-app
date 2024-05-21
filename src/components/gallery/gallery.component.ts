import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { GalleryItemComponent } from '@components/gallery-item/gallery-item.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [GalleryItemComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-20px)' }),
          stagger('50ms', [
            animate('500ms cubic-bezier(.35,0,.25,1)', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class GalleryComponent {
  items = [
    { title: 'Item 1', description: 'Description 1', imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c2e9d59-ee54-490e-bf96-5497f587844f/dggnza3-17d5904b-f58e-4918-8cb8-2606a436e428.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzljMmU5ZDU5LWVlNTQtNDkwZS1iZjk2LTU0OTdmNTg3ODQ0ZlwvZGdnbnphMy0xN2Q1OTA0Yi1mNThlLTQ5MTgtOGNiOC0yNjA2YTQzNmU0MjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ofNCGOR7tlTuCj2j7r-GB_3JXMV8_qpeEmPgxI5cg0g' },
    { title: 'Item 2', description: 'Description 2', imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2c5c087-28c0-45d2-a01c-5e8a6f5c3663/dg4w9lp-08ff0c71-3880-4add-8906-2b90686bbe4e.png/v1/fill/w_1192,h_670,q_70,strp/ai_anime_art__wallpaper__by_aianimeart9_dg4w9lp-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZDJjNWMwODctMjhjMC00NWQyLWEwMWMtNWU4YTZmNWMzNjYzXC9kZzR3OWxwLTA4ZmYwYzcxLTM4ODAtNGFkZC04OTA2LTJiOTA2ODZiYmU0ZS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.c9B4aPCDl1LX26CzzuQ8uoFqQcg9pTjFtpymwimYP4U' },
    { title: 'Item 3', description: 'Description 3', imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2c5c087-28c0-45d2-a01c-5e8a6f5c3663/dg7pzj9-430d9974-eb25-4a42-9c72-2d00f1920659.png/v1/fill/w_1192,h_670,q_70,strp/ai_anime_art__wallpaper__by_aianimeart9_dg7pzj9-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZDJjNWMwODctMjhjMC00NWQyLWEwMWMtNWU4YTZmNWMzNjYzXC9kZzdwemo5LTQzMGQ5OTc0LWViMjUtNGE0Mi05YzcyLTJkMDBmMTkyMDY1OS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.s72X3Qe2Hfa_azS9LQaW2g-7gpxBbc4ru8CNXZKJNbs' },
    { title: 'Item 4', description: 'Description 4', imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2c5c087-28c0-45d2-a01c-5e8a6f5c3663/dgca3pb-bcef2471-89eb-4f6c-bfe3-4bdbab8a7032.png/v1/fill/w_1192,h_670,q_70,strp/ai_anime_art__wallpaper__by_aianimeart9_dgca3pb-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZDJjNWMwODctMjhjMC00NWQyLWEwMWMtNWU4YTZmNWMzNjYzXC9kZ2NhM3BiLWJjZWYyNDcxLTg5ZWItNGY2Yy1iZmUzLTRiZGJhYjhhNzAzMi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.vMoJqrBnZvqEzkCrwdhofqdzC6Ua56q40gmfi7qf32I' },
    { title: 'Item 5', description: 'Description 5', imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2c5c087-28c0-45d2-a01c-5e8a6f5c3663/dg86dv9-285eb719-f99b-4f43-be1a-160e6fb79cd0.png/v1/fill/w_1192,h_670,q_70,strp/ai_anime_art__wallpaper__by_aianimeart9_dg86dv9-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZDJjNWMwODctMjhjMC00NWQyLWEwMWMtNWU4YTZmNWMzNjYzXC9kZzg2ZHY5LTI4NWViNzE5LWY5OWItNGY0My1iZTFhLTE2MGU2ZmI3OWNkMC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.PD3GKueJCb2RESacpMkzJ4iLc1oV2Sl7O4_66klbA-4' },
    { title: 'Item 6', description: 'Description 6', imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2c5c087-28c0-45d2-a01c-5e8a6f5c3663/dg3ajdh-aa76a3c8-9130-46b2-a8fa-50a868b3f6aa.png/v1/fill/w_1192,h_670,q_70,strp/ai_anime_art__wallpaper__by_aianimeart9_dg3ajdh-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZDJjNWMwODctMjhjMC00NWQyLWEwMWMtNWU4YTZmNWMzNjYzXC9kZzNhamRoLWFhNzZhM2M4LTkxMzAtNDZiMi1hOGZhLTUwYTg2OGIzZjZhYS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.uv9dCqlZNJ9CDC753_XNutdJhTolhsfmuq8QI5Y-yZ0' },
  ];
}
