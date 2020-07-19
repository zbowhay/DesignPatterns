import { Command } from './command';



export class Button {
    private _label: string = '';
    private command: Command;

    constructor(command: Command) {
        this.command = command;
    }

    click() {
        this.command.execute();
    }

    get label() {
        return this._label;
    }

    set label(label: string) {
        this._label = label;
    }
}