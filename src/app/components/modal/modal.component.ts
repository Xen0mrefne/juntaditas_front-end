import { NgTemplateOutlet } from '@angular/common';
import { Component, HostListener, Input, TemplateRef, ViewChild } from '@angular/core';
import { ModalContent, ModalTitle } from '../../entities/Modal';
import { DialogService } from '../../services/dialog.service';

@Component({
    selector: 'app-modal',
    standalone: true,
    imports: [NgTemplateOutlet],
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.css'
})
export class ModalComponent {

    @Input() id!: symbol;
    @Input() title: ModalTitle;
    @Input() content!: ModalContent;
    @Input() isClosing!: boolean;

    @ViewChild("modal") modal!: HTMLElement;

    constructor(private dialogService: DialogService) { }


    @HostListener("click")
    onClick() {
        this.dialogService.closeModal(this.id);
    }

    onLoad() {
        //this.modal.focus();
    }

    onModalClick(e: Event) {
        e.stopPropagation();
    }
}
