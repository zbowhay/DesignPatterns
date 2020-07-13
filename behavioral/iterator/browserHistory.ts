import { ListForEachIterator, ForEachIterator } from './iterator';


export class BrowserHistory {
    private urls: string[] = [];

    push(url: string) {
        this.urls.push(url);
    }

    pop(): string {
        return this.urls.pop() || '';
    }

    createIterator(): ForEachIterator {
        return new ListForEachIterator(this.urls);
    }
}