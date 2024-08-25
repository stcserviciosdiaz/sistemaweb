// src/app/firebase.service.ts
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';  // SDK modular de Firebase
import { getFirestore, collection, addDoc } from 'firebase/firestore';  // Importaciones específicas para Firestore
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private db: any;

  constructor() {
    // Inicializa Firebase con la configuración del entorno
    const app = initializeApp(environment.firebase);
    this.db = getFirestore(app);  // Inicializa Firestore
  }

  // Método para guardar datos en Firebase
  async saveContactForm(data: any): Promise<void> {
    try {
      // Referencia a la colección 'contactos' en Firestore
      console.log('Datos a guardar:', data);
      console.log('Referencia de la DB:', this.db);


      const docRef = await addDoc(collection(this.db, 'contactos'), data);
      console.log('Datos guardados con éxito en Firebase:', docRef.id);
    } catch (error) {
      console.error('Error al guardar los datos en Firebase:', error);
      throw error;  // Lanza el error para manejarlo en el componente
    }
  }


}
