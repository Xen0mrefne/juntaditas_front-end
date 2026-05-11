import { Injectable, TemplateRef } from '@angular/core';
import { Modal, ModalTitle, ModalContent } from '../entities/Modal';

@Injectable({
    providedIn: 'root'
})
export class DialogService {

    idGen;
    modals: Modal[];

    *sequenceGenerator(): Generator<number> {
        let i = 0;
        while (true) {
            i = i + 1;
            yield i;
        }
    }

    createModal({ title, content }: { title: ModalTitle, content: ModalContent }) {
        const sym = Symbol();
        const modal = new Modal({ id: sym, title, content });
        return modal;
    }

    setModalTitle(id: symbol, title: ModalTitle) {
        const modal = this.modals.find((modal) => modal.id === id);
        if (modal) modal.setTitle(title);
    }

    setModalContent(id: symbol, content: ModalContent) {
        const modal = this.modals.find((modal) => modal.id === id);
        if (modal) modal.setContent(content);
    }

    showModal(modal: Modal) {
        this.modals.push(modal)
    }

    closeModal(id: symbol) {
        const modal = this.modals.findIndex((modal) => modal.id === id);
        if (modal === -1) return;

        this.modals[modal].setClosingStatus(true);
        setTimeout(() => {
            this.removeModal(id);
        }, 300)
    }

    private removeModal(id: symbol) {
        this.modals = this.modals.filter((modal) => modal.id !== id);
    }

    constructor() {

        this.idGen = this.sequenceGenerator();
        this.modals = [];

    }
}

