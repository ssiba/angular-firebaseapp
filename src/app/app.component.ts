import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sales';

  constructor(public router: Router) {
    console.log(localStorage.getItem('token'))
    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('/dashboard')
    } else {
      this.router.navigateByUrl('login')
    }
  }

  logout() {
    localStorage.clear()
    this.router.navigateByUrl('/login')
  }
}
