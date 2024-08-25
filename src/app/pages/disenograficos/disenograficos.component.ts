import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  standalone: true,
  imports: [RouterModule, NavmenuComponent, FooterComponent],
  selector: 'app-disenograficos',
  templateUrl: './disenograficos.component.html',
  styleUrls: ['./disenograficos.component.css']
})
export class DisenograficosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
