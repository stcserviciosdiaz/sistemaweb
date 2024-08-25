import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-estrategias',
  standalone: true,
  imports: [RouterModule, NavmenuComponent, FooterComponent],
  templateUrl: './estrategias.component.html',
  styleUrls: ['./estrategias.component.css']
})
export class EstrategiasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
