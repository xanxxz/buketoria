export declare class TelegramService {
    private token;
    private chatIds;
    send(text: string, parseMode?: 'Markdown' | 'HTML'): Promise<void>;
    sendOrder(order: any): Promise<void>;
}
