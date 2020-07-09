import { Editor } from './behavioral';

// ==============================================
// ========= BEHAVIORAL DESIGN PATTERNS =========
// ==============================================

// 1) Memento
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

