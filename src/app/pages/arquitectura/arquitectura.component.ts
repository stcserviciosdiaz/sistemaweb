import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { FooterComponent } from '../footer/footer.component';
import { BtnwhatsappComponent } from '../btnwhatsapp/btnwhatsapp.component';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule, NavmenuComponent, FooterComponent, BtnwhatsappComponent],
  selector: 'app-arquitectura',
  templateUrl: './arquitectura.component.html',
  styleUrls: ['./arquitectura.component.css']
})
export class ArquitecturaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
