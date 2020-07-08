import { Editor } from './behavioral';

// ==============================================
// ========= BEHAVIORAL DESIGN PATTERNS =========
// ==============================================

// 1) Memento
// implement an "undo" feature that may be used in a text editor.
const editor = new Editor();
editor.content = 'first content';
editor.content = 'second content';
editor.content = 'third content';
editor.undo();
console.log(editor.content); // second content
editor.undo();
console.log(editor.content); // first content
editor.undo();
console.log(editor.content); // empty string