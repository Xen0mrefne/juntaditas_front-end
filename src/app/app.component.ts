import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AlertsComponent } from './components/alerts/alerts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, AlertsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  
}
