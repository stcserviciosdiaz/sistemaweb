import { Component } from '@angular/core';
import { RouterModule, Routes, provideRouter, Route, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, RouterLink ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'auth-yt';
}
