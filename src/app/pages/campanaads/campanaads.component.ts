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

  items = [
    { id: 1, name: 'Elemento 1' },
    { id: 2, name: 'Elemento 2' },
    { id: 3, name: 'Elemento 3' },
  ];

  // El valor que quieres verificar
  selectedValue: number = 3;

  selectedId: number | null = null;


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



  divs = [
    { id: 1, content: 'Facebook Ads' },
    { id: 2, content: 'Instagram Ads' },
    { id: 3, content: 'Google Ads' },
    { id: 4, content: 'Tiktok Ads' }
  ];

  selectedDivId = 2;

  selectDiv(divId: number) {
    this.selectedDivId = divId;
  }

  isDivSelected(divId: number): boolean {
    return this.selectedDivId === divId;
  }


  ngOnInit(): void {
  }






}
