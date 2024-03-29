import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-menudigital',
  standalone: true,
  imports: [RouterModule, NavmenuComponent, FooterComponent],
  templateUrl: './menudigital.component.html',
  styleUrls: ['./menudigital.component.css']
})
export class MenudigitalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
