import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {

  private _authService = inject(AuthService);
  private _router = inject(Router);

  constructor() { }

  ngOnInit() {
  }

  acces(){
    this._router.navigate(['/auth/login'])
  }

}
