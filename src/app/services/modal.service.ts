import { Injectable, TemplateRef } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  open = false;
  isClosing = false;
  title = "";
  form!: FormGroup;
  formTemplate!: TemplateRef<HTMLFormElement>;

  constructor() { }

  setForm(formGroup: FormGroup, template: TemplateRef<HTMLFormElement>) {
    this.form = formGroup;
    this.formTemplate = template
  }

  setTitle(title: string) {
    this.title = title
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
