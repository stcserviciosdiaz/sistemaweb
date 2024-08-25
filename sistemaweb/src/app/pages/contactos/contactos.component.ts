import { NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { FooterComponent } from '../footer/footer.component';
/* import { FirebaseService } from 'src/app/core/services/firestore.service'; */

@Component({
  standalone: true,
  imports: [
    RouterModule,
    NgIf,
    NavmenuComponent, FooterComponent
  ],
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  contactForm!: FormGroup;
  isSubmit = false;
  submitMessage = '';


constructor(private FormBuilder: FormBuilder) { }

/* constructor(private fb: FormBuilder, private firebaseService: FirebaseService) {
  this.contactForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    option: ['', Validators.required],
    message: ['', Validators.required],
  });
} */


ngOnInit(): void {
    //this.contactForm = this.initForm();
}

/* onSubmit(): void{
  console.log('Form ->', this.contactForm.value);

  this.isSubmit=true;
  this.contactForm.reset();
  this.submitMessage = 'Mensaje enviado con exito';
  setTimeout(()=>{
    this.isSubmit=false;
  },8000);

} */

async onSubmit() {
  console.log('entro')
  //this.isSubmit = true;



  if (this.contactForm.valid) {
    try {
      //await this.firebaseService.saveData(this.contactForm.value);
      console.log('Mensaje enviado con éxito', this.contactForm.value)
      this.submitMessage = 'Mensaje enviado con éxito';
    } catch (error) {
      this.submitMessage = 'Error al enviar el mensaje';
    }
  } else {
    this.submitMessage = 'Por favor, completa todos los campos requeridos.';
  }
}

/* initForm (): FormGroup{
  return this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required]],
    phone: [''],
    option: [''],
    message: [''],
  })

} */





}



