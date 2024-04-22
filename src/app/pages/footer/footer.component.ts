import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-footer',
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private _authService = inject(AuthService);
  private _router = inject(Router);

  imagelogo = '/assets/logo/logo-completo.png'
  imagelogoAlt = 'logo'


  constructor() { }

  ngOnInit(): void {
  }

}
