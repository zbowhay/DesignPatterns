interface StringIndexedObj {
    [key: string]: any;
}

export interface Iterator {
    next(): void;
    current(): any;
    isDone(): boolean;
}

export class ListIterator<T> implements Iterator {
    private list: T[];

    constructor(list: T[]) {
        this.list = list;
    }

    next(): void {
        this.list.shift();
    }

    current(): T | undefined {
        return this.isDone() ? undefined : this.list[0];
    }

    isDone(): boolean {
        return this.list.length === 0;
    }
}

export class ObjectIterator implements Iterator {
    private obj: StringIndexedObj = {};
    private props: string[] = [];

    constructor(obj: StringIndexedObj) {
        this.obj = obj;
        this.props = Object.keys(this.obj);
    }

    next(): void {
        this.props.shift();
    }

    current(): any {
        const currentProp = this.props[0];
        return this.isDone() ? [undefined, undefined] : [currentProp, this.obj[currentProp]];
    }

    isDone(): boolean {
        return this.props.length === 0;
    }
}

// just playing around with different iterators

export interface ForEachIterator extends Iterator {
    next(): void;
    current(): any;
    isDone(): boolean;
    forEach(callback: any): void;
}

export class ListForEachIterator<T> implements ForEachIterator {
    private list: T[];

    constructor(list: T[]) {
        this.list = list;
    }

    next(): void {
        this.list.shift();
    }

    current(): T | undefined {
        return this.isDone() ? undefined : this.list[0];
    }

    isDone(): boolean {
        return this.list.length === 0;
    }

    forEach(callback: any): void {
        while (!this.isDone()) {
            const val = this.current();
            callback(val);
            this.next();
        }
    }
}