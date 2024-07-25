import { NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, HostBinding, HostListener, Input, Output, TemplateRef } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgTemplateOutlet],
  templateUrl: './modal-form.component.html',
  styleUrl: './modal-form.component.css'
})
export class ModalFormComponent {
  @Input() title!: string;
  @Input() form!: FormGroup;
  @Input() formTemplate!: TemplateRef<HTMLFormElement>;
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
