import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {



  imagelogo = '/assets/logo/logo-completo.png'
  imagelogoAlt = 'logo'


  constructor() { }

  ngOnInit(): void {
  }

}
