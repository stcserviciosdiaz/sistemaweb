import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-btnwhatsapp',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './btnwhatsapp.component.html',
  styleUrls: ['./btnwhatsapp.component.css']
})
export class BtnwhatsappComponent implements OnInit {

  qlwappbox = false;

  constructor() { }

  ngOnInit(): void {
  }

  close(){
    this.qlwappbox = false;
  }

}
