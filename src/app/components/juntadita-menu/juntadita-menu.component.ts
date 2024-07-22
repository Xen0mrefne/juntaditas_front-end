import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { JuntaditaService } from '../../services/juntadita.service';
import { NotificationsService } from '../../services/notifications.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Juntadita from '../../types/juntadita';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationTypes } from '../notification/notification';

@Component({
  selector: 'app-juntadita-menu',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './juntadita-menu.component.html',
  styleUrl: './juntadita-menu.component.css'
})
export class JuntaditaMenuComponent {

  form = new FormGroup({
    name: new FormControl<string>("", Validators.required)
  })

  constructor(
    protected authService: AuthService,
    private juntaditaService: JuntaditaService,
    private notifService: NotificationsService,
    private router: Router,
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

  addJuntadita() {
    const juntadita: Juntadita = {
      name: this.form.get("name")?.value!
    }
    this.juntaditaService.addJuntadita(juntadita).subscribe({
      next: (data) => {
        this.notifService.new(NotificationTypes.success, "Has creado una juntadita")
        console.log(data)
        this.router.navigate(["home/juntadita"])
      }
    })
  }
}
