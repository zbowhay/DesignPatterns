import { Window } from './window';



export class CustomWindow extends Window {
    beforeCloseHandler: (metaData) => any = () => { console.log(this.metaData) };
    afterCloseHandler: (metaData) => any = () => { console.log(this.metaData) };
    metaData = {
        name: 'custom',
        isAwesome: true,
        isOpen: false
    };

    constructor() {
        super();
    }

    protected beforeClose() {
        this.metaData.isOpen = true;
        this.beforeCloseHandler(this.metaData);
    }
    protected afterClose() {
        this.metaData.isOpen = false;
        this.afterCloseHandler(this.metaData);
    }

}