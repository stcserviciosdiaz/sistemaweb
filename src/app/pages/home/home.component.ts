import { Component, inject, OnInit } from '@angular/core';

import { AuthService } from '../../core/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { FooterComponent } from "../footer/footer.component";
import { BtnwhatsappComponent } from '../btnwhatsapp/btnwhatsapp.component';
import { CommonModule } from '@angular/common';
import { ModalinfoComponent } from '../auth/components/modals/modalinfo.component';
import { ToastNotificationComponent } from '../dialog/dialog.component';


@Component({
    standalone: true,
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [RouterModule, CommonModule, ToastNotificationComponent, NavmenuComponent, FooterComponent, BtnwhatsappComponent, ModalinfoComponent]
})

  export class HomeComponent implements OnInit {




  imageSrc = '/assets/banners/Banners.jpg'
  imageAlt = 'iPhone'

  imageSrc2 = '/assets/banners/Banners2.jpg'
  imageAlt2 = 'iPhone'

  imageSrc3 = '/assets/banners/Banners3.jpg'
  imageAlt3 = 'iPhone'

  constructor() { }

  ngOnInit() {



  }



}
