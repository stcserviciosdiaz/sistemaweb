import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


import { NavmenuComponent } from '../navmenu/navmenu.component';
import { FooterComponent } from '../footer/footer.component';
import { BtnwhatsappComponent } from '../btnwhatsapp/btnwhatsapp.component';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule, NavmenuComponent, FooterComponent, BtnwhatsappComponent],
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: ['./catalogos.component.css']
})
export class CatalogosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enviarViaWhatsAppcatalogo(){

    const mensaje = `DISEÑO DE CATÁLOGO + AJUSTE DE CONTENIDO $40 : \n
    - Asesoría personalizada.\n
    - 3 Diseño de referencia del catalogo.\n
    - Carga de hasta 50 productos.\n
    - Sin límite de hojas.\n
    - Enlaces del producto.\n
    - 5 max Correcciones del diseño elegido(color, texto, tamaño).\n
    - Editables entregables (AI.PDF).\n
    - Trabajo Inicio: /50% Trabajo final: /50%.\n
    - Agregado de productos adicionales el valor es de 0.50ctv.\n
    - Trabajo Inicio: 50/50.

    \n`

    // Codificar mensaje
    const mensajeCodificado = encodeURIComponent (mensaje);

    // enlace de whatsapp
    const urlWhastApp = `https://wa.me/?text=${mensajeCodificado}`;

    //// Abrir el Whastapp
    window.open (urlWhastApp, '_black');

  }

}
