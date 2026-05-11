import { TemplateRef } from "@angular/core";


export type ModalTitle = undefined | string;
export type ModalContent = TemplateRef<HTMLElement>;

export class Modal {

    id: symbol;
    title: ModalTitle;
    content: ModalContent;
    isClosing: boolean;

    constructor({ id, title, content }: {
        id: symbol,
        title: ModalTitle,
        content: ModalContent
    }) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.isClosing = false;
    }

    setTitle(title: ModalTitle) {
        this.title = title;
    }

    setContent(content: ModalContent) {
        this.content = content;
    }

    setClosingStatus(isClosing: boolean) {
        this.isClosing = isClosing
    }

    show() {

    }

}