import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/auth/services.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  regForms: FormGroup
  submitted = false;
  constructor(public fb: FormBuilder,
    public router: Router,
    public auth: ServicesService) { }

  ngOnInit() {
    this.regForms = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  get f() {
    return this.regForms.controls;
  }
  submit() {
    this.submitted = true;
    if (this.regForms.valid) {
      this.auth.signup(this.regForms.value.email, this.regForms.value.password)
        .then((res) => {
          console.log(res);
          this.auth.saveUser({
            userName: this.regForms.value.name,
            email: this.regForms.value.email,
            uid: res.user.uid
          })
          this.router.navigateByUrl('/login')
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
        })
    }
  }
}
