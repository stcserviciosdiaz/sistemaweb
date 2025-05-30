import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-videospublicitarios',
  standalone: true,
  imports: [RouterModule, NavmenuComponent, FooterComponent, CommonModule],
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
    this.caracter1 = !this.caracter1;
    this.caracter2 = false;
  }
  mostrarcaracter2(){
    this.caracter2 = !this.caracter2;
    this.caracter1 = false;

  }



   enviarViaWhatsApp001() {
    // Construye el mensaje que quieres enviar por WhatsApp
    const mensaje = `Plan Básico - Video Estáticos & Dinámicos
    (Fotográfico, Videos grabados por el cliente):\n
    - Max 10 a 20 segundos - $12.\n
    - Max 30 segundos - $24.\n
    - Max 1 minuto - $30.\n
    - Trabajo 100% costo para iniciar. \n`;

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);

    // Enlace para abrir WhatsApp con el mensaje
    const urlWhatsApp = `https://wa.me/?text=${mensajeCodificado}`;

    // Abrir WhatsApp en una nueva ventana
    window.open(urlWhatsApp, '_blank');
  }

   enviarViaWhatsApp002() {
    // Construye el mensaje que quieres enviar por WhatsApp
    const mensaje = `Plan Básico - Videos Dinámicos
    (Con Videos Grabados en Campo):\n
    - Max 10 a 20 segundos - $25.\n
    - Max 30 segundos - $35.\n
    - Max 1 minuto - $75.\n
    - Trabajo 100% costo para iniciar. \n`;

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);

    // Enlace para abrir WhatsApp con el mensaje
    const urlWhatsApp = `https://wa.me/?text=${mensajeCodificado}`;

    // Abrir WhatsApp en una nueva ventana
    window.open(urlWhatsApp, '_blank');
  }

}
