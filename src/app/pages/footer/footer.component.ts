import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  standalone: true,
  selector: 'app-footer',
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
