import { Subject } from "rxjs";
import { messageObserverTypes, messageTypes } from "../types/MessageTypes";

const messageSubject$ = new Subject<messageTypes>();

export const messageObserver: messageObserverTypes = {
    sendMessage: (message: string) => messageSubject$.next({ text: message }),
    clearMessage: () => messageSubject$.next(), // TODO - fix type error here
    onMessage: () => messageSubject$.asObservable(),
};
