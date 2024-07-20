export enum NotificationTypes {
    error,
    success
}

export default class Notification {
    type: NotificationTypes;
    message: string;
    id = Symbol();

    constructor(type: NotificationTypes, message: string) {
        this.type = type;
        this.message = message;
    }
}
