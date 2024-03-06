import { Observable, Subject } from "rxjs";

export type messageTypes = {
    text: string;
};

type messageObserverTypes = {
    sendMessage: (x: string) => void;
    clearMessage: () => void;
    onMessage: () => Observable<messageTypes>;
};

const messageSubject$ = new Subject<messageTypes>();

export const messageObserver: messageObserverTypes = {
    sendMessage: (message: string) => messageSubject$.next({ text: message }),
    clearMessage: () => messageSubject$.next({ text: "" }),
    onMessage: () => messageSubject$.asObservable(),
};
