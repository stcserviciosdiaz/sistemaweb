import { NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { FooterComponent } from '../footer/footer.component';
import { FirebaseService } from 'src/app/core/services/firestore.service';



@Component({
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    NgIf,
    NavmenuComponent,
    FooterComponent,
  ],
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  contactForm: FormGroup;
  isSubmit = false;
  submitMessage = '';

  constructor(
    private fb: FormBuilder,
    private firebaseService: FirebaseService
  ) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^\\+?[0-9]\\d{1,14}$')]],
      option: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  async onSubmit(event: Event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    this.isSubmit = true;

    if (this.contactForm.valid) {
      try {
        const formData = this.contactForm.value;
        await this.firebaseService.saveContactForm(formData);
        this.submitMessage = 'Mensaje enviado con éxito';
        this.contactForm.reset(); // Opcional: resetea el formulario después de enviarlo
      } catch (error) {
        this.submitMessage = 'Error al enviar el mensaje';
      }
    } else {
      this.submitMessage = 'Por favor, completa todos los campos requeridos.';
    }
  }
}




