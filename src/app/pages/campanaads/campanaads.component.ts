import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-campanaads',
  standalone: true,
  imports: [RouterModule, NavmenuComponent, FooterComponent, CommonModule],
  templateUrl: './campanaads.component.html',
  styleUrls: ['./campanaads.component.css']
})
export class CampanaadsComponent implements OnInit {


  tx1: boolean;
  tx2: boolean;
  tx3: boolean;
  tx4: boolean;

  constructor() {

    this.tx1 = true
    this.tx2 = false
    this.tx3 = false
    this.tx4 = false
  }

  ngOnInit(): void {
  }

  mostrarfb(){
    this.tx1 = true
    this.tx2 = false
    this.tx3 = false
    this.tx4 = false
  }
  mostrarinstagram(){
    this.tx2 = true
    this.tx1 = false
    this.tx3 = false
    this.tx4 = false
  }
  mostrargoogle(){
    this.tx3 = true
    this.tx1 = false
    this.tx2 = false
    this.tx4 = false
  }
  mostrartiktok(){
    this.tx4 = true
    this.tx1 = false
    this.tx2 = false
    this.tx3 = false
  }




}
