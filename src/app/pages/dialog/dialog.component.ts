import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-toast',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  imports: [CommonModule],
})
export class ToastNotificationComponent implements OnInit {
  currentMessage: { description: string, imagen: string } | null = null;

  messages = [
    { description: 'Transforma tu negocio con una Página Web y Tienda Online Profesional',
      imagen:'1.jpg',
    },
    { description: 'Haz crecer tu negocio con nuestro servicio de Marketing Digital',
      imagen:'2.jpg',
    },
    { description: 'Lleva tu negocio al siguiente nivel con campañas estratégicas y efectivas.',
      imagen:'3.jpg',
    },
  ];

  private index = 0;

  constructor() {}

  ngOnInit() {
    this.startToastLoop();
  }

  startToastLoop() {
    setInterval(() => {
      this.currentMessage = this.messages[this.index];
      this.index = (this.index + 1) % this.messages.length;

      // Ocultar el toast después de un tiempo
      setTimeout(() => {
        this.currentMessage = null;
      }, 5000); // El toast se oculta después de 5 segundos
    }, 10000); // Cambia el mensaje cada 10 segundos
  }

  closeToast() {
    this.currentMessage = null; // Cierra manualmente el toast
  }
}
