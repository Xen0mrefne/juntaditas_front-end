import { NgTemplateOutlet } from '@angular/common';
import { Component, HostListener, Input, TemplateRef } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  constructor(protected modalService: ModalService) {}


  @HostListener("click", ["$event"])
  onClick() {
    this.modalService.close();
  }

  onModalClick(e: Event) {
    e.stopPropagation();
  }
}
