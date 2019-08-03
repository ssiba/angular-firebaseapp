import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/auth/services.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false
  loginForms: FormGroup
  constructor(public fb: FormBuilder,
    public auth: ServicesService,
    public router: Router) { }

  ngOnInit() {

    this.loginForms = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }
  get f() {
    return this.loginForms.controls
  }

  submit() {
    this.submitted = true;
    if (this.loginForms.valid) {
      this.auth.signin(this.loginForms.value.email, this.loginForms.value.password)
        .then((res) => {
          localStorage.setItem('token',res.user.uid);
          console.log(res)
          this.router.navigateByUrl('/dashboard')
          Swal.fire({
            type: 'success',
            title: 'Signed up successfully',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          }) 
        })
        .catch((err) => {
          console.log(err)
          if (err) {
            Swal.fire({
              type: 'error',
              title: 'incorrect credentials',
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            })
          }
        }
        )
    } else {
      console.log('form is invalid')
    }

  }

}
