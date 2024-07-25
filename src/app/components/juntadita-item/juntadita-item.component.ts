import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-juntadita-item',
  standalone: true,
  imports: [],
  templateUrl: './juntadita-item.component.html',
  styleUrl: './juntadita-item.component.css'
})
export class JuntaditaItemComponent {
  @Input() name!: string;
  @Input() id!: string;
  @Output() viewJuntadita = new EventEmitter<string>()


  @HostListener("click", ["$event"])
  onClick(e: Event) {
    this.viewJuntadita.emit(this.id)
  }

}
