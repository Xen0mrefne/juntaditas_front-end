import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NotificationComponent } from "./components/notification/notification.component";
import { NotificationsService } from './services/notifications.service';
import { ModalComponent } from "./components/modal/modal.component";
import { ModalService } from './services/modal.service';
import { DialogService } from './services/dialog.service';
import { DialogsComponent } from "./components/dialogs/dialogs.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NotificationComponent, ModalComponent, DialogsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  constructor(
    protected notifService: NotificationsService,
    protected modalService: ModalService,
    protected dialogService: DialogService
  ) {}



  onRemoveNotif(id: symbol) {
    this.notifService.remove(id);
  }
}
