import { Tool, SelectionTool } from './canvasTools';

export class Canvas {
    private currentTool: Tool = new SelectionTool();

    mouseDown() {
       this.currentTool.mouseDown();
    }

    mouseUp() {
        this.currentTool.mouseUp();
    }

    getCurrentTool(): Tool {
        return this.currentTool;
    }

    setCurrentTool(tool: Tool): void {
        this.currentTool = tool;
    }

}