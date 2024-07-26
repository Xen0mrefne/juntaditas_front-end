import { Injectable, TemplateRef } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  open = false;
  isClosing = false;
  title = "";
  template!: TemplateRef<HTMLElement>;

  constructor() { }

  setTitle(title: string) {
    this.title = title
  }

  setTemplate(template: TemplateRef<HTMLElement>) {
    this.template = template;
  }

  show() {
    this.open = true;
    this.isClosing = false;
  }

  close() {
    this.isClosing = true;
    setTimeout(() => {
      this.open = false;
    }, 300)
  }
}
