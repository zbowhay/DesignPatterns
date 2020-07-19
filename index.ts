import { Editor, Canvas, BrowserHistory, ImageStorage, BlackAndWhiteFilter, PNGCompressor, GenerateReportTask, TransferMoneyTask, PopupWindow, ToolWindow, CustomWindow } from './behavioral';
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



// 3) Iterator Pattern
// implement a browser history type feature
const browserHistory = new BrowserHistory();
browserHistory.push('google.com');
browserHistory.push('youtube.com');
browserHistory.push('amazon.com');
const browserHistoryIterator1 = browserHistory.createIterator();
while (!browserHistoryIterator1.isDone()) {
    console.log(browserHistoryIterator1.current());
    browserHistoryIterator1.next();
}
// or now with forEach
const browserHistoryIterator2 = browserHistory.createIterator();
browserHistoryIterator2.forEach((val) => console.log(val));



// 4) Strategy Pattern
// implements an image storage solution that allows for compression and filters
const bwFilter = new BlackAndWhiteFilter();
const pngCompressor = new PNGCompressor();
const imageStorage = new ImageStorage(pngCompressor, bwFilter);
imageStorage.store('./some/picture.png');



// 5) Template Pattern
// implements a banking application and utilizes the Template pattern to extract similar functiontionality out of the generateReport and transferMoney tasks into an abstract class Task that acts as a 'template'
// useful when you have a series of steps that follow a similar template.  You can extract the similarities out into an abstract class to maintain better control and reduce repetition.
const generateReport = new GenerateReportTask();
const transferMoney = new TransferMoneyTask();
transferMoney.execute();
generateReport.execute();
// 5) exercise
const popup = new PopupWindow();
const tool = new ToolWindow();
const custom = new CustomWindow();
tool.close();
popup.close();
custom.afterCloseHandler = (metaData) => {
    console.log(`Still open? ${metaData.isOpen}`);
};
custom.close();