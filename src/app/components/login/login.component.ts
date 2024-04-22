import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { UserLogin } from '../../models/user';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  

  form = new FormGroup({
    email: new FormControl<string>(""),
    password: new FormControl<string>("")
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  logIn() {
    const user = {
      email: this.email!.value!,
      password: this.password!.value!
    }
    this.authService.logIn(user).subscribe({
      next: (data) => {
        alert("Logged in successfully.")
        this.authService.loggedIn$.next(true)
        console.log(data)
        this.router.navigate(["calendar"])
      },
      error: (data) => {
        alert("Error")
        console.log(data)
      }
    })
  }

  get email() {
    return this.form.get("email")
  }

  get password() {
    return this.form.get("password")
  }
}
