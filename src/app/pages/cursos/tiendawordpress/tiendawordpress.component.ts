import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavmenuComponent } from '../../navmenu/navmenu.component';
import { FooterComponent } from '../../footer/footer.component';
import { BtnwhatsappComponent } from '../../btnwhatsapp/btnwhatsapp.component';

@Component({
  standalone: true,
  imports: [RouterModule, NavmenuComponent, FooterComponent, BtnwhatsappComponent],
  selector: 'app-tiendawordpress',
  templateUrl: './tiendawordpress.component.html',
  styleUrls: ['./tiendawordpress.component.css']
})
export class TiendawordpressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
