import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campanaads',
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
