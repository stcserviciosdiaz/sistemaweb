import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-modalinfo',
    templateUrl: './modalinfo.component.html',
    styleUrls: ['./modalinfo.component.css'],
    imports: [RouterModule, CommonModule]
})

  export class ModalinfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }



}
