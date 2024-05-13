import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Alert, { AlertType } from '../components/alerts/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alerts$: BehaviorSubject<Alert[]> = new BehaviorSubject(Array(0));
  alerts!: Alert[];

  constructor() {
    this.alerts$.subscribe((alerts) => {
      this.alerts = alerts;
    })
  }

  alert(message: string, type: AlertType) {
    let id: number;
    if (this.alerts.length === 0)
      id = 0;
    else
      id = this.alerts[this.alerts.length - 1].id + 1;

    const alert = new Alert(id, message, type);

    let alerts = this.alerts.slice();
    alerts.push(alert)

    this.alerts$.next(alerts);

    alert.timeout = setTimeout(() => {
      this.remove(id);
    }, 5000)
  }

  clearTimeout(id: number) {
    clearTimeout(this.alerts.find((alert) => alert.id === id)?.timeout)
  }

  remove(id: number) {
    let alerts = this.alerts.slice();
    alerts.find((alert) => alert.id === id)?.setRemoved(true);

    setTimeout(() => {
      alerts = alerts.filter((alert) => alert.id !== id)
      this.alerts$.next(alerts)
    }, 500)
  }
}
