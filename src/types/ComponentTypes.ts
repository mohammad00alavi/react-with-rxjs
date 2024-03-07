import React from "react";
import { Observable } from "rxjs";
import { Result } from "../observables/bookService";

export type EmbedChildren = {
    children: React.ReactNode;
};

export type BookListProps = {
    observable?: (input: HTMLInputElement) => Observable<Result[]>;
};
