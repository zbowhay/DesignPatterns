import { Observer } from './Observer';


export class Spreadsheet implements Observer {
    update(val: any) {
        console.log(`Spreadsheet updated with a value of '${val}'!`);
    }
}