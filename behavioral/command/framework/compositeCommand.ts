import { Command } from './command';



export class CompositeCommand implements Command {
    private commandList: Command[]= [];

    addCommand(command: Command) {
        this.commandList.push(command);
    }

    clearList() {
        this.commandList = [];
    }

    execute() {
        this.commandList.forEach((cmd) => cmd.execute());
    }
}