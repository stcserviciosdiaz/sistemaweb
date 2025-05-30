import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { BtnwhatsappComponent } from '../btnwhatsapp/btnwhatsapp.component';

@Component({
  selector: 'app-campanaads',
  standalone: true,
  imports: [RouterModule, NavmenuComponent, FooterComponent, CommonModule, BtnwhatsappComponent],
  templateUrl: './campanaads.component.html',
  styleUrls: ['./campanaads.component.css']
})
export class CampanaadsComponent implements OnInit {

  items = [
    { id: 1, name: 'Elemento 1' },
    { id: 2, name: 'Elemento 2' },
    { id: 3, name: 'Elemento 3' },
  ];

  // El valor que quieres verificar
  selectedValue: number = 3;

  selectedId: number | null = null;


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



  divs = [
    { id: 1, content: 'Facebook Ads' },
    { id: 2, content: 'Instagram Ads' },
    { id: 3, content: 'Google Ads' },
    { id: 4, content: 'Tiktok Ads' }
  ];

  selectedDivId = 2;

  selectDiv(divId: number) {
    this.selectedDivId = divId;
  }

  isDivSelected(divId: number): boolean {
    return this.selectedDivId === divId;
  }


  ngOnInit(): void {
  }

  enviarViaWhatsFB(){
    // Construye el mensaje que quieres enviar por WhatsApp
    const mensaje = `Campaña en Facebook Ads $30:\n
    - 1na Estrategia de campaña.\n
    - 1 Diseño para la campaña ó video de 20seg .\n
    - Subida Arte a Markeplace.\n
    - Etiqueteo & Envio a los grupos de markeplace.\n
    - Creación de contenido.\n
    - Creación y Ajuste de Segmentación\n
    - Ajuste de CALL TO ACTION (Botón de WhatsApp)\n
    - Uso de hashtag.\n
    - Monitoreo de la campaña durante el tiempo de la\n
    campaña activada, de L-S de 9 am a 5 pm.\n
    - (Cliente cubre costo de pautaje)\n
    - No incluye el monto del Pautaje que le paga a Facebook (el monto mínimo por día es de 1$).\n
    - Trabajo Inicio: 100% del costo.\n`;

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);

    // Enlace para abrir WhatsApp con el mensaje
    const urlWhatsApp = `https://wa.me/?text=${mensajeCodificado}`;

    // Abrir WhatsApp en una nueva ventana
    window.open(urlWhatsApp, '_blank');
  }

    enviarViaWhatsINST(){
    // Construye el mensaje que quieres enviar por WhatsApp
    const mensaje = `Campaña en Instagram Ads $30:\n
    - 1na Estrategia de campaña.\n
    - 1 Diseño para la campaña ó video de 20seg .\n
    - Etiqueteo.\n
    - Creación de contenido.\n
    - Creación y Ajuste de Segmentación\n
    - Ajuste de CALL TO ACTION (Botón de WhatsApp)\n
    - Uso de hashtag.\n
    - Monitoreo de la campaña durante el tiempo de la\n
    campaña activada, de L-S de 9 am a 5 pm.\n
    - (Cliente cubre costo de pautaje)\n
    - No incluye el monto del Pautaje que le paga a Instagram (el monto mínimo por día es de 1$).\n
    - Trabajo Inicio: 100% del costo.\n`;

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);

    // Enlace para abrir WhatsApp con el mensaje
    const urlWhatsApp = `https://wa.me/?text=${mensajeCodificado}`;

    // Abrir WhatsApp en una nueva ventana
    window.open(urlWhatsApp, '_blank');
  }

  enviarViaWhatsGoogle(){
    // Construye el mensaje que quieres enviar por WhatsApp
    const mensaje = `Campaña en Google Ads $50:\n
    - Análisis inicial.\n
    - Indexación en Search console.(En caso de contar con un sitio web)\n
    - Creación y Ajustes de Registro de Ficha.\n
    - Búsqueda y selección de palabras clave.\n
    - Gestión y control de opiniones y recomendaciones.\n
    - Segmentación de 1 mercado objetivo.(Max. 20 palabras claves)\n
    - Propuesta de campaña. Cliente cubre costo de Inversion (el monto min. es de 0.40ctv)\n
    - Lanzamiento y Monitoreo de la campaña durante maximo 30 dias, de L-S de 9 am a 5 pm.\n
    - Reporte de resultados: Al final de cada campaña te entregamos el reporte de resultados.\n
    - Trabajo Inicio: 100% del costo.\n`;

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);

    // Enlace para abrir WhatsApp con el mensaje
    const urlWhatsApp = `https://wa.me/?text=${mensajeCodificado}`;

    // Abrir WhatsApp en una nueva ventana
    window.open(urlWhatsApp, '_blank');
  }


  enviarViaWhatsTiktok(){
    // Construye el mensaje que quieres enviar por WhatsApp
    const mensaje = `Campaña en Tiktok Ads $30:\n
    - Análisis inicial.\n
    - 1 Diseño para la campaña ó video de 20seg \n
    - Creación y Ajuste de Segmentación.\n
    - Propuesta de campaña. (Cliente cubre costo de Inversion de campaña mediante el objetivo).\n
    - Lanzamiento y Monitoreo de la campaña durante maximo 30 dias, de L-S de 9 am a 5 pm.\n
    - Reporte de resultados: Al final de cada campaña, te entregamos el reporte de resultados.\n
    - Trabajo Inicio: 100% del costo.\n`;

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);

    // Enlace para abrir WhatsApp con el mensaje
    const urlWhatsApp = `https://wa.me/?text=${mensajeCodificado}`;

    // Abrir WhatsApp en una nueva ventana
    window.open(urlWhatsApp, '_blank');
  }







}
