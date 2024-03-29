import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-hosting',
  standalone: true,
  imports: [RouterModule, NavmenuComponent, FooterComponent],
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.css']
})
export class HostingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
