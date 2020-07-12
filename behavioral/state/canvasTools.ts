export interface Tool {
    mouseUp(): void;
    mouseDown(): void;
}

export class SelectionTool implements Tool {
    mouseUp(): void {
        console.log('drawing a dashed rectangle');
    }
    mouseDown(): void {
        console.log('selection icon');
    }
}

export class BrushTool implements Tool {
    mouseUp(): void {
        console.log('drawing a line');
    }
    mouseDown(): void {
        console.log('brush icon');
    }
}

export class EraserTool implements Tool {
    mouseUp(): void {
        console.log('erasing something');
    }
    mouseDown(): void {
        console.log('eraser icon');
    }
}