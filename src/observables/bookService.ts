import {
    debounceTime,
    distinctUntilChanged,
    fromEvent,
    map,
    switchMap,
    tap,
} from "rxjs";
import { fromFetch } from "rxjs/fetch";

export type Result = {
    title: string;
};

const url = "https://gutendex.com/books";

export const autoComplete = (input: HTMLInputElement) => {
    return fromEvent(input, "input").pipe(
        debounceTime(200),
        map(() => input.value.trim().toLowerCase()),
        distinctUntilChanged(),
        switchMap((search) => {
            const queryString = `search=${encodeURIComponent(search)}`;
            const finalUrl = `${url}?${queryString}`;
            return fromFetch(finalUrl).pipe(
                tap(() => console.log("url:", finalUrl))
            );
        }),
        switchMap((res) => res.json()),
        map((obj) => obj.results as Result[]),
        tap((res) => console.log("results:", res))
    );
};
