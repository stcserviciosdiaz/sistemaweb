import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marketingdigital',
  standalone: true,
  imports: [RouterModule, NavmenuComponent, FooterComponent, CommonModule],
  templateUrl: './marketingdigital.component.html',
  styleUrls: ['./marketingdigital.component.css']
})
export class MarketingdigitalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mostrarmasplan = false;

}
