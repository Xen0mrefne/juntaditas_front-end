export enum AlertType {
    success,
    error
}

export default class Alert {
    id: number;
    message: string;
    type: AlertType;
    timeout!: ReturnType<typeof setTimeout>
    removed: boolean;

    constructor (id: number, message: string, type: AlertType) {
        this.id = id;
        this.message = message;
        this.type = type;
        this.removed = false;
    }

    setRemoved(removed: boolean) {
        this.removed = removed;
    }
}

