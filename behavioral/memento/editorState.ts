
export class EditorState {
    content: string;
    title: string;

    constructor(content?: string, title?: string) {
        this.content = content || '';
        this.title = title || '';
    }
}