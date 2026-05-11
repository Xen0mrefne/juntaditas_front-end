import { Component, TemplateRef, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { JuntaditaService } from '../../services/juntadita.service';
import { NotificationsService } from '../../services/notifications.service';
import Juntadita from '../../types/juntadita';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationTypes } from '../notification/notification';
import { DialogService } from '../../services/dialog.service';
import { Modal } from '../../entities/Modal';

@Component({
    selector: 'app-juntadita-menu',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './juntadita-menu.component.html',
    styleUrl: './juntadita-menu.component.css'
})
export class JuntaditaMenuComponent {

    juntaditas: Juntadita[] = [];

    @ViewChild("formTemplate") formTemplate!: TemplateRef<HTMLElement>;

    form!: FormGroup;

    loading = false;
    creating = false;
    modalId!: symbol;

    constructor(
        protected authService: AuthService,
        private juntaditaService: JuntaditaService,
        private notifService: NotificationsService,
        private router: Router,
        private dialogService: DialogService
    ) { }

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
                error: ({ error }) => {
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
        const modal = this.dialogService.createModal({ title: "Que nombre tendra esta nueva juntada?", content: this.formTemplate });
        this.modalId = modal.id;
        this.dialogService.showModal(modal);
    }

    inputLoaded(e: Event) {
        const target = e.target as HTMLInputElement;
        target.focus();
    }

    createJuntadita() {
        const juntadita: Juntadita = {
            name: this.form.get("name")!.value
        }
        this.juntaditaService.createJuntadita(juntadita).subscribe({
            next: (data) => {
                this.notifService.new(NotificationTypes.success, "Has creado una juntadita")
                console.log(data)
                this.creating = false;
                this.getJuntaditas();
                this.dialogService.closeModal(this.modalId);
            }
        })
    }

    goToJuntadita(id: string) {
        this.router.navigate(["home/juntadita/" + id])
    }
}
