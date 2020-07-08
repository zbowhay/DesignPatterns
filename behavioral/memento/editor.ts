

export class Editor {
    private _content = '';
    private history: Array<string> = [];

    constructor() {}

    public get content() {
        return this._content;
    }

    public set content(v : string) {
        this.history.push(this.content);
        this._content = v;
    }
    
    public undo() {
        this._content = this.history.pop() || '';
    }
}

const editor = new Editor();