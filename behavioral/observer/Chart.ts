import { Observer } from './Observer';



export class Chart implements Observer {
    update(val: any) {
        console.log(`Chart updated with a value of '${val}'!`);
    }
}