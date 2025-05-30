import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { FooterComponent } from '../footer/footer.component';
import { BtnwhatsappComponent } from '../btnwhatsapp/btnwhatsapp.component';

@Component({
  standalone: true,
  imports: [RouterModule, NavmenuComponent, FooterComponent, BtnwhatsappComponent],
  selector: 'app-disenograficos',
  templateUrl: './disenograficos.component.html',
  styleUrls: ['./disenograficos.component.css']
})
export class DisenograficosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  enviarViaWhatsApp001() {
    // Construye el mensaje que quieres enviar por WhatsApp
    const mensaje = `Diseño de Logo $40\n
    - 5 Diseños de referencias\n
    - Correcciones del diseño elegido(color, texto, tamaño).\n
    - Editables entregables (AI.PNG.JPG.PDF - BLACK/WHITE)\n
    - Trabajo Inicio: /50% Trabajo final: /50%\n`;

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);

    // Enlace para abrir WhatsApp con el mensaje
    const urlWhatsApp = `https://wa.me/?text=${mensajeCodificado}`;

    // Abrir WhatsApp en una nueva ventana
    window.open(urlWhatsApp, '_blank');
  }


  enviarViaWhatsApp002() {
    // Construye el mensaje que quieres enviar por WhatsApp
    const mensaje = `Creación de Linea Grafica / Diseño de marca $120\n
    - Diseño de Logo.\n
    - 1 Diseño de Membrete A4.\n
    - 1 Diseño de Tarjeta de presentación.\n
    - 1 Diseño para Carpeta.\n
    - 1 Diseño de Formato Arte para RRSS.\n
    - 1 Diseño de Folleto.\n
    - Trabajo Inicio: /50% Trabajo final: /50%\n`;

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);

    // Enlace para abrir WhatsApp con el mensaje
    const urlWhatsApp = `https://wa.me/?text=${mensajeCodificado}`;

    // Abrir WhatsApp en una nueva ventana
    window.open(urlWhatsApp, '_blank');
  }


}
