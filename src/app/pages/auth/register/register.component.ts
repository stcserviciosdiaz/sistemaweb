import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formReg: FormGroup;
  router: any;

  constructor(
    private authService : AuthService
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  /* click(){
    console.log(this.formReg.value)
    this.UserService.register(this.formReg.value)
    if (this.UserService.valid){
      this.router.navegate(['/login'])
      this.formReg.reset();
    }
    else{
      alert("error al ingresar datos")
      this.router.navegate(['/contacto'])
    }


  }; */

}
