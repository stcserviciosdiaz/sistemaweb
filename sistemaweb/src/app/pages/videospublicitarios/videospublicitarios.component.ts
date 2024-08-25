import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-videospublicitarios',
  standalone: true,
  imports: [RouterModule, NavmenuComponent, FooterComponent, CommonModule],
  templateUrl: './videospublicitarios.component.html',
  styleUrls: ['./videospublicitarios.component.css']
})
export class VideospublicitariosComponent implements OnInit {


  caracter1: boolean;
  caracter2: boolean;


  constructor() {

  this.caracter1 = false;
  this.caracter2 = false;

  }



  ngOnInit(): void {
  }

  mostrarcaracter1(){
    this.caracter1 = !this.caracter1;
    this.caracter2 = false;
  }
  mostrarcaracter2(){
    this.caracter2 = !this.caracter2;
    this.caracter1 = false;

  }

}
