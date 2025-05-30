import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marketingdigital',
  standalone: true,
  imports: [RouterModule, NavmenuComponent, FooterComponent, CommonModule],
  templateUrl: './marketingdigital.component.html',
  styleUrls: ['./marketingdigital.component.css']
})
export class MarketingdigitalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mostrarmasplan = false;



  enviarViaWhatsAppDuo(){
    // Contruir el mensaje
    const mensaje = ` MARKETING - PLAN DUO $100 : \n
    - Creación, configuración & Administración\n
    - (Facebook (Perfil & Pagina) Instagram.\n
    - 2 Artes para Markeplace de FB.\n
    - 1 Diseño de Portada para Facebook.\n
    - 1 Video de 20seg(Estático ó Dinámico).\n
    - 1 Adaptación para historia.\n
    - 16 Artes Publicitarios\n
    - 1 Propuesta para campaña.\n
    - Segmentación de mercado objetivo.\n
    - Calendario de planificación.\n
    - Lanzamiento y Monitoreo de campañas.(Cliente cubre costo de Pautaje).\n
    - Moderación de Comentarios de L-S de 10 am a 5 pm.\n
    - Trabajo Inicio: /50 Trabajo Final: /50\n`;

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent (mensaje);

    // Enlace para abrir WhastApp con el mensaje
    const urlWhastApp = `https://wa.me/?text=${mensajeCodificado}`;

    // Abrir el Whstapp en una nueva ventana
    window.open(urlWhastApp, '_black');

  }

  enviarViaWhatsAppBasic(){

    const mensaje = ` MARKETING - PLAN BASIC $60 : \n
    - Creación & configuración y Activación de campañas.\n
    - (Facebook (Perfil & Pagina).\n
    - 1 Video de 20seg(Estático ó Dinámico).\n
    - 1 Adaptación para historia.\n
    - 1 Diseño de Portada para Facebook.\n
    - 2 Artes para Markeplace de FB.\n
    - 14 Artes Publicitarios para la redes sociales.\n
    - Propuesta para campaña.\n
    - Calendario de planificación.\n
    - Moderación de Comentarios de L-S de 10 am a 5 pm.\n
    - Trabajo Inicio: /50 Trabajo final: /50.\n`

    // Codificar mensaje
    const mensajeCodificado = encodeURIComponent (mensaje);

    // enlace de whatsapp
    const urlWhastApp = `https://wa.me/?text=${mensajeCodificado}`;

    // Abrir el Whastapp
    window.open(urlWhastApp, '_black');

  }

  enviarViaWhatsAppPremium(){

    const mensaje = `MARKETING - PLAN PREMIUM $150 : \n
    - Creación, Administración de redes sociales & configuraciones\n
    (Facebook (Perfil & Pagina), Instagram, Gmail.\n
    - 2 Red Social Opcional ( El clasificado, Pinterest, YouTube, Twitter, Blogger, TikTok).\n
    - 4 Iconos de historias destacadas en Instagram.\n
    - 2 Artes para Markeplace de FB.\n
    - 18 Artes Publicitarios para la redes sociales.\n
    Los mismos artes se compartirán a las Historias destacadas\n
    - 4 Artes Publicitarios Trivial(meme, preguntas y respuesta, historia).\n
    - Ajuste Linea Grafica.\n
    - 2 Video de 20seg(Estático ó Dinámico).\n
    - 2 Adaptaciones para historia.\n
    - Moderación de Comentarios de L-S de 10 am a 5 pm.\n
    - Segmentación de mercado objetivo.\n
    - Lanzamiento y Monitoreo de campañas.(Cliente cubre costo de Pautaje).\n
    - Creación de contenidos para cada artes publicitarios.\n
    - Uso del hashtag de su marca.\n
    - Calendario de planificación.\n
    - Asesoría por 1 hora.\n
    - Trabajo Inicio: /50 Trabajo final: /50. \n`

    // Codificar mensaje
    const mensajeCodificado = encodeURIComponent (mensaje);

    // enlace de whatsapp
    const urlWhastApp = `https://wa.me/?text=${mensajeCodificado}`;

    //// Abrir el Whastapp
    window.open (urlWhastApp, '_black');

  }

}
