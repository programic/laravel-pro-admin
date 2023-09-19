export interface Notification {
    name: string,
    description: string | null,
    channels: string[],
    array: NotificationArray | null,
    mail: string | null,
    sms: string | null,
    fcm: FcmArray | null,
}

interface NotificationArray {
    level: string,
    appActionUrl?: string,
    actionUrl: string,
    subject: string,
    actionText?: string,
    introLines: string[],
    outroLines: string[],
    skipDetail?: boolean,
    greetings?: string | null,
    salutation?: string | null,
    displayableActionUrl?: string,
}

interface FcmArray {
    notification: {
        title: string,
        body: string,
        image: null,
    },
    data: {
        url: string,
    }
}
