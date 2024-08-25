import { Component, inject, OnInit } from '@angular/core';

import { Router, RouterModule } from '@angular/router';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { FooterComponent } from "../footer/footer.component";
import { BtnwhatsappComponent } from '../btnwhatsapp/btnwhatsapp.component';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-politicas',
    templateUrl: './politicas.component.html',
    styleUrls: ['./politicas.component.css'],
    imports: [RouterModule, CommonModule, NavmenuComponent, FooterComponent, BtnwhatsappComponent]
})

  export class PoliticasComponent implements OnInit {

  constructor() { }

  ngOnInit() {



  }



}
