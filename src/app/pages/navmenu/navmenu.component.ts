import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { User, user } from '@angular/fire/auth';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {

  private _authService = inject(AuthService);
  private _router = inject(Router);

  AuthService: any;

  constructor() {

    this.AuthService = false
  }



  ngOnInit() {}





}
