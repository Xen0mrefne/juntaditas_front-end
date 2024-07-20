import { Injectable } from '@angular/core';
import Notification, { NotificationTypes } from '../components/notification/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  notifications: Notification[] = [];

  constructor() { }

  new(type: NotificationTypes, message: string) {
    this.notifications.push(new Notification(type, message));
  }

  remove(id: symbol) {
    this.notifications = this.notifications.filter(notif => notif.id !== id)    
  }
}
