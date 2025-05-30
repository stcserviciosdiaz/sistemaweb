import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavmenuComponent } from '../../navmenu/navmenu.component';
import { FooterComponent } from '../../footer/footer.component';
import { BtnwhatsappComponent } from '../../btnwhatsapp/btnwhatsapp.component';

@Component({
  standalone: true,
  imports: [RouterModule, NavmenuComponent, FooterComponent, BtnwhatsappComponent],
  selector: 'app-webrifas',
  templateUrl: './webrifas.component.html',
  styleUrls: ['./webrifas.component.css']
})


export class WebrifasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
