import { EditorState } from './editorState';

export class History {
    private states: Array<EditorState> = [];

    push(state: EditorState) {
        this.states.push(state);
    }

    pop(): EditorState {
        return this.states.pop() || new EditorState();
    }
}