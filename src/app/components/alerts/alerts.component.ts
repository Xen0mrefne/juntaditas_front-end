import { Component } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { AlertType } from './alert';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css'
})
export class AlertsComponent {

  success = AlertType.success
  error = AlertType.error

  constructor(protected alertService: AlertService) {}
  
  ngOnInit() {
    /* Test
    for(let i = 0; i < 5; i++) {
      setTimeout(() => {
        this.alertService.alert("Alerta " + i, this.success)
        console.log(this.alertService.alerts)
      }, i * 300)
    }
    */
  }

}
