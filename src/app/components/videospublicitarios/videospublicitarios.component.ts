import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videospublicitarios',
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
    console.log("hola")
    this.caracter1 = !this.caracter1;
    this.caracter2 = false;
  }
  mostrarcaracter2(){
    this.caracter2 = !this.caracter2;
    this.caracter1 = false;

  }

}
