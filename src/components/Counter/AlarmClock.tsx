import { useEffect, useState } from "react";
import {
    Observable,
    Subject,
    Subscription,
    concat,
    filter,
    interval,
    of,
    repeat,
    scan,
    startWith,
    takeUntil,
    takeWhile,
    tap,
} from "rxjs";

const action$: Subject<string> = new Subject<string>();

const AlarmClock: React.FC = () => {
    const [time, setTime] = useState<number | string>();
    const [startValue, setStartValue] = useState<number>(10);

    useEffect(() => {
        const countdown$: Observable<number> = interval(250).pipe(
            startWith(startValue),
            scan((time) => time - 1),
            takeWhile((time) => time > 0)
        );

        const snooze$: Observable<string> = action$
            .pipe(filter((action) => action === "snooze"))
            .pipe(tap((ev) => console.log(ev)));
        const dismiss$ = action$.pipe(filter((action) => action === "dismiss"));

        const snoozeAlarm$: Observable<number | string> = concat(
            countdown$,
            of("Wake up!")
        ).pipe(repeat({ delay: () => snooze$ }));

        const observable$: Observable<number | string> = concat(
            snoozeAlarm$.pipe(takeUntil(dismiss$)),
            of("Have a nice day!")
        );
        const subscribtion: Subscription = observable$.subscribe({
            next: (val) => setTime(val),
            error: (err) => console.log(err),
            complete: () => console.log("completed"),
        });
        return () => subscribtion.unsubscribe();
    }, [startValue]);
    return (
        <>
            <p>{time}</p>
            <input
                type="number"
                onChange={(e) => setStartValue(parseInt(e.target.value) || 0)}
                placeholder="Enter start time"
            />
            <button id="snoozeBtn" onClick={() => action$.next("snooze")}>
                Snooze
            </button>
            <button id="dismissBtn" onClick={() => action$.next("dismiss")}>
                Dismiss
            </button>
        </>
    );
};

export default AlarmClock;