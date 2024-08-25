import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  standalone: true,
  imports: [RouterModule, NavmenuComponent, FooterComponent],
  selector: 'app-aviso-legal',
  templateUrl: './aviso-legal.component.html',
  styleUrls: ['./aviso-legal.component.css']
})
export class AvisoLegalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
