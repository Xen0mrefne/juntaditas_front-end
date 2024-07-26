import { NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, HostBinding, HostListener, Input, Output, TemplateRef } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ReactiveFormsModule, NgTemplateOutlet],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() title!: string;
  @Input() template!: TemplateRef<HTMLElement>;
  @Input() isClosing!: boolean;

  constructor(private modalService: ModalService) {}


  @HostListener("click", ["$event"])
  onClick() {
    this.modalService.close();
  }

  onModalClick(e: Event) {
    e.stopPropagation();
  }
}
