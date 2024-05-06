import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-tarjetadigital',
  standalone: true,
  imports: [RouterModule, NavmenuComponent, FooterComponent],
  templateUrl: './tarjetadigital.component.html',
  styleUrls: ['./tarjetadigital.component.css']
})
export class TarjetadigitalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
