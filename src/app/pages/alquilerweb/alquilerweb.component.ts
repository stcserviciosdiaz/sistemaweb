import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { FooterComponent } from '../footer/footer.component';
import { BtnwhatsappComponent } from '../btnwhatsapp/btnwhatsapp.component';

@Component({
  standalone: true,
  imports: [RouterModule, NavmenuComponent, FooterComponent, BtnwhatsappComponent],
  selector: 'app-alquilerweb',
  templateUrl: './alquilerweb.component.html',
  styleUrls: ['./alquilerweb.component.css']
})


export class AlquilerwebComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
