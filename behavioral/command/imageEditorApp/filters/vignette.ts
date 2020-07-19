import { Command } from '../../framework/command';



export class Vignette implements Command {
    execute() {
        console.log('applying vignette');
    }
}