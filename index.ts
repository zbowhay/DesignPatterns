import { Editor, Canvas } from './behavioral';
import { SelectionTool, BrushTool, EraserTool } from './behavioral/state/canvasTools';

// ==============================================
// ========= BEHAVIORAL DESIGN PATTERNS =========
// ==============================================

// 1) Memento Pattern
// implement an "undo" feature that may be used in a text editor.
const editor = new Editor();
editor.title = 'first title';
editor.content = 'first content';
editor.display(); // first title, first content
editor.title = 'second title';
editor.content = 'second content';
editor.title = 'third title';
editor.content = 'third content';
editor.restore();
editor.display(); // third title, second content
editor.restore();
editor.display(); // second title, second content



// 2) State Pattern
// implement a paint type application that has multiple tools with different behaviors
const canvas = new Canvas();
const [select, brush, eraser] = [new SelectionTool(), new BrushTool(), new EraserTool()];
canvas.setCurrentTool(brush);
canvas.mouseDown(); // brush behavior
canvas.mouseUp();
canvas.setCurrentTool(eraser);
canvas.mouseDown(); // eraser behavior
canvas.mouseUp();
canvas.setCurrentTool(select);
canvas.mouseDown(); // select behavior
canvas.mouseUp();