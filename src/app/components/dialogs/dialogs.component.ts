import { Component } from '@angular/core';
import { DialogService } from '../../services/dialog.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
    selector: 'snk-dialogs',
    imports: [ModalComponent],
    standalone: true,
    templateUrl: './dialogs.component.html',
    styleUrl: './dialogs.component.css'
})
export class DialogsComponent {

    constructor (protected dialogService: DialogService) {}

}
