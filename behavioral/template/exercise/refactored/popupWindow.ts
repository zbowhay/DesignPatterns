import { Window } from './window';



export class PopupWindow extends Window {
    protected beforeClose() {
        console.log('you\'ll see me again :) ');
    }
    protected afterClose() {
        console.log('make another popup window. BWAAAHAHAHAHAHHAAAA');
    }
}