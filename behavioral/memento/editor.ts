import { EditorState } from './editorState';
import { History } from './history';

export class Editor {
    private _content = '';
    private _title = '';
    private history = new History();

    constructor() {}

    get content() {
        return this._content;
    }

    set content(v : string) {
        this.createState();
        this._content = v;
    }

    get title() {
        return this._title;
    }

    set title(v: string) {
        this.createState();
        this._title = v;
    }

    createState() {
        this.history.push(new EditorState(this.content, this.title));
    }

    restore() {
        const state: EditorState = this.history.pop();
        this._content = state.content;
        this._title = state.title;
    }

    display() {
        console.log(`Title = ${this.title}`);
        console.log(`Content = ${this.content}`);
    }
}

const editor = new Editor();