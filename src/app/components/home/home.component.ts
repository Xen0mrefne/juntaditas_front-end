import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Juntadita from '../../types/juntadita';
import { JuntaditaService } from '../../services/juntadita.service';
import { NotificationsService } from '../../services/notifications.service';
import { NotificationTypes } from '../notification/notification';

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

  constructor(
    protected authService: AuthService,
    private juntaditaService: JuntaditaService,
    private notifService: NotificationsService
  ) {}

  ngOnInit() {
    if (this.authService.token !== "") {
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
        this.notifService.new(NotificationTypes.success, "Has creado una juntadita")
        console.log(data)
      }
    })
  }
}
