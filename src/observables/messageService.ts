import { BehaviorSubject, Subject, map } from "rxjs";
import { messageObserverTypes, messageTypes } from "../types/MessageTypes";

const messageSubject$ = new Subject<messageTypes>();

const historySubject$ = new BehaviorSubject<messageTypes[]>([]);

messageSubject$.subscribe({
    next: (message) => {
        if (message.text) {
            const newHistory = [...historySubject$.value, message];
            historySubject$.next(newHistory);
        }
    },
});

export const messageService: messageObserverTypes = {
    sendMessage: (message: string) => messageSubject$.next({ text: message }),
    clearMessage: () => historySubject$.next([]),
    getHistory: () => historySubject$.asObservable(),
    getHistoryCount: () =>
        historySubject$.pipe(map((messages) => messages.length)),
};
