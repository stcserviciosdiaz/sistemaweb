import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule ],
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private _router = inject(Router);

  private authservice = inject(AuthService);

  constructor() { }

  async logOut(): Promise<void> {
    try {
      await this.authservice.logOut();
      this._router.navigateByUrl('/auth/login');
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
  }

}
