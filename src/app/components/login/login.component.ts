import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { AlertType } from '../alerts/alert';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  error = false;
  message: string | undefined = "";

  form = new FormGroup({
    email: new FormControl<string>(""),
    password: new FormControl<string>("")
  });

  constructor(
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router
  ) { }


  logIn() {
    const user = {
      email: this.email!.value!,
      password: this.password!.value!
    }
    this.authService.logIn(user).subscribe({
      next: (data) => {
        console.log(data)
        this.authService.auth$.next({token: data.token!, id: data.id!})
        this.error = false;
        this.message = data.message;
        setTimeout(() => {
          this.router.navigate(["home"])
        }, 1500)
      },
      error: ({error}) => {
        this.message = error.message
        this.error = true;
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
