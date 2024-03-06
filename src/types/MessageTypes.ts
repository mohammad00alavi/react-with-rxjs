import { Observable } from "rxjs";

export type messageTypes = {
    text: string;
};

export type messageObserverTypes = {
    sendMessage: (x: string) => void;
    clearMessage: () => void;
    getHistory: () => Observable<messageTypes[]>;
    getHistoryCount: () => Observable<number>;
};
