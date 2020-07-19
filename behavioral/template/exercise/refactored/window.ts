



export abstract class Window {
    close() {
        this.beforeClose();
        console.log('removing the window from the screen');
        this.afterClose();
    }

    protected abstract beforeClose();
    protected abstract afterClose();
}