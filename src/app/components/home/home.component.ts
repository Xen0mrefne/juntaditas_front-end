import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Juntadita from '../../types/juntadita';
import { JuntaditaService } from '../../services/juntadita.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  form = new FormGroup({
    name: new FormControl<string>("")
  })

  constructor(protected authService: AuthService, private juntaditaService: JuntaditaService) {}

  ngOnInit() {
    if (this.authService.auth.token !== "") {
      this.juntaditaService.getJuntaditas().subscribe({
        next: (data) => {
          console.log(data)
        },
        error: ({error}) => {
          console.log(error.message)
        }
      })
    }
  }

  logOut() {
    this.authService.logOut()
  }

  addJuntadita() {
    const juntadita: Juntadita = {
      name: this.form.get("name")?.value!
    }
    this.juntaditaService.addJuntadita(juntadita).subscribe({
      next: (data) => {
        alert("success")
        console.log(data)
      }
    })
  }
}
