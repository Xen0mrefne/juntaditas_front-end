import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NotificationComponent } from "./components/notification/notification.component";
import { NotificationsService } from './services/notifications.service';
import { ModalComponent } from "./components/modal/modal.component";
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NotificationComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  constructor(
    protected notifService: NotificationsService,
    protected modalService: ModalService
  ) {}



  onRemoveNotif(id: symbol) {
    this.notifService.remove(id);
  }
}
