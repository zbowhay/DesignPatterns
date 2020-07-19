import { Command } from '../../framework/command';



export class Sepia implements Command {
    execute() {
        console.log('applying sepia');
    }
}