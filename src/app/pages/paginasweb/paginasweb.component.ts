import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  standalone: true,
  imports: [RouterModule, NavmenuComponent, FooterComponent],
  selector: 'app-paginasweb',
  templateUrl: './paginasweb.component.html',
  styleUrls: ['./paginasweb.component.css']
})
export class PaginaswebComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
