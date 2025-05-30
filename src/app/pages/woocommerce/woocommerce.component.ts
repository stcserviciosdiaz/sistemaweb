import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { FooterComponent } from '../footer/footer.component';
import { BtnwhatsappComponent } from '../btnwhatsapp/btnwhatsapp.component';

@Component({
  selector: 'app-woocommerce',
  standalone: true,
  imports: [RouterModule, NavmenuComponent, FooterComponent, BtnwhatsappComponent],
  templateUrl: './woocommerce.component.html',
  styleUrls: ['./woocommerce.component.css']
})
export class WoocommerceComponent implements OnInit {


  constructor() {

   }

  ngOnInit(): void {
  }





}
