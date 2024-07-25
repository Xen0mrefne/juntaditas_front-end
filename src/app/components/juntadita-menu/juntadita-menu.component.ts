import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { JuntaditaService } from '../../services/juntadita.service';
import { NotificationsService } from '../../services/notifications.service';
import Juntadita from '../../types/juntadita';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationTypes } from '../notification/notification';
import { JuntaditaItemComponent } from "../juntadita-item/juntadita-item.component";
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-juntadita-menu',
  standalone: true,
  imports: [ReactiveFormsModule, JuntaditaItemComponent],
  templateUrl: './juntadita-menu.component.html',
  styleUrl: './juntadita-menu.component.css'
})
export class JuntaditaMenuComponent {

  juntaditas: Juntadita[] = [];

  @ViewChild("formTemplate") formTemplate!: TemplateRef<HTMLFormElement>;
  form!: FormGroup;

  loading = false;
  creating = false;

  constructor(
    protected authService: AuthService,
    private juntaditaService: JuntaditaService,
    private notifService: NotificationsService,
    private router: Router,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.getJuntaditas()
  }

  getJuntaditas() {
    this.loading = true;
    if (this.authService.token !== "") {
      this.juntaditaService.getJuntaditas().subscribe({
        next: (juntaditas) => {
          this.juntaditas = juntaditas
          console.log(this.juntaditas)
        },
        error: ({error}) => {
          console.log(error.message)
        },
        complete: () => {
          this.loading = false;
        }
      })
    }
  }

  onNuevaJuntada() {
    this.form = new FormGroup({
      name: new FormControl<string>("", [
        Validators.required, Validators.minLength(3)
      ])
    })
    this.modalService.setTitle("Que nombre tendra esta nueva juntada?")
    this.modalService.setForm(this.form, this.formTemplate)
    //this.modalService.setForm()
    this.modalService.show();
  }

  createJuntadita() {
    const juntadita: Juntadita = {
      name: this.form.get("name")!.value
    }
    this.juntaditaService.addJuntadita(juntadita).subscribe({
      next: (data) => {
        this.notifService.new(NotificationTypes.success, "Has creado una juntadita")
        console.log(data)
        this.creating = false;
        this.getJuntaditas();
        this.modalService.close();
      }
    })
  }

  onViewJuntadita(id: string) {
    this.router.navigate(["home/juntadita/" + id])
  }
}
