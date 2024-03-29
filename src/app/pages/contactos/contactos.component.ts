import { NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { FooterComponent } from '../footer/footer.component';

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
isSubmit = true;
submitMessage = '';


constructor(private FormBuilder: FormBuilder) { }

ngOnInit(): void {
    this.contactForm = this.initForm();
}

onSubmit(): void{
  console.log('Form ->', this.contactForm.value);

  this.isSubmit=true;
  this.contactForm.reset();
  this.submitMessage = 'Mensaje enviado con exito';
  setTimeout(()=>{
    this.isSubmit=false;
  },8000);

}

initForm (): FormGroup{
  return this.FormBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required]],
    phone: [''],
    option: [''],
    message: [''],
  })

}





}



