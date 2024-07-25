import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { NotificationTypes } from './notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
  types = NotificationTypes;

  @Input() id!: symbol;
  @Input() type!: NotificationTypes;
  @Input() message!: string;
  
  @Output() remove = new EventEmitter<symbol>();
  
  @HostBinding("class.removed") removed: boolean = false;
  @HostBinding("class.success") success: boolean = false;
  @HostBinding("class.error") error: boolean = false;

  timeout = setTimeout(() => {
    this.removed = true;
    setTimeout(() => {
      this.remove.emit(this.id);
    }, 1000)
  }, 5000)

  ngOnInit() {
    this.success = this.type === this.types.success
    this.error = this.type === this.types.error;
  }
}
