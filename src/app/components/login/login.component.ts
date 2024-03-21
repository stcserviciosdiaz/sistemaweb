import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObj: Login;

  constructor(private http: HttpClient, private router: Router) {
    this.loginObj = new Login();
  }

  onLogin(){
    console.log('entro')
    if (this.loginObj) {
      alert("ingresando......")
      this.router.navigateByUrl('/videos')
    }else{
      alert("Datos incorrectos")
    }

    /* this.http.post('https://reqres.in/api/login', this.loginObj).subscribe((res:any)=>{
      if(res.result){
        alert("ingresando......")
        //this.router.navigateByUrl('/videos')
      }else{
        alert(res.message)
      }
    }) */
  }

  ngOnInit(): void {
  }



}

export class Login {
  EmailId: string;
  PasswordId: string;
  constructor(){
    this.EmailId = '';
    this.PasswordId = '';
  }
}
