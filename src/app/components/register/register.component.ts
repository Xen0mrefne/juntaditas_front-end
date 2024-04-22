import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserAuth } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  form = new FormGroup({
    email: new FormControl<string>("", [
      Validators.email,
      Validators.required
    ]),
    username: new FormControl<string>("", [
      Validators.required,
    ]),
    password: new FormControl<string>("", [
      Validators.required,
      Validators.minLength(8)
    ])
  })

  register() {
    const user = {
      email: this.email!.value!,
      username: this.username!.value!,
      password: this.password!.value!
    }
    this.authService.register(user).subscribe({
      next: (data) => {
        alert("Registered successfully.")
        this.authService.loggedIn$.next(true)
        console.log(data)
        this.router.navigate(["calendar"])
      },
      error: (data) => {
        alert("error")
        console.log(data)
      }
    })
  }

  get email() {
    return this.form.get("email")
  }

  get username() {
    return this.form.get("username")
  }

  get password() {
    return this.form.get("password")
  }
}
