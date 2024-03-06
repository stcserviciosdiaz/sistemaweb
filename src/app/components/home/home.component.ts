import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
src: any;

  imageSrc = '/assets/banners/Banners.jpg'
  imageAlt = 'iPhone'

  imageSrc2 = '/assets/banners/Banners2.jpg'
  imageAlt2 = 'iPhone'

  imageSrc3 = '/assets/banners/Banners3.jpg'
  imageAlt3 = 'iPhone'

  constructor() { }

  /* public activeLang = 'es'; */

  /* constructor(
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang(this.activeLang);
  } */
  ngOnInit() {
  }
  /* public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  } */

}
