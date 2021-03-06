import { Editor, Canvas, BrowserHistory, ImageStorage, BlackAndWhiteFilter, PNGCompressor, GenerateReportTask, TransferMoneyTask, PopupWindow, ToolWindow, CustomWindow, CustomerService, AddCustomerCommand, Button, Chart, Spreadsheet, DataSource } from './behavioral';
import { SelectionTool, BrushTool, EraserTool } from './behavioral/state/canvasTools';
import { ImageEditor } from './behavioral/command/imageEditorApp/imageEditor';


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



// 6) Command Pattern
// say we are creating a framework for developers to use to put together a GUI.  One GUI element could be a button.  We don't know what the developers will want to use the button for in the future
// but we do know that they should be able to define some kind of functionality that should be executed when it is clicked.  We can use the command pattern to allow them to define custom 
// behavior or 'commands' that we can invoke from our Button class using a common interface.
const customerService = new CustomerService();
const command = new AddCustomerCommand(customerService);
const addCustomerButton = new Button(command);
addCustomerButton.click();
// composite commands
const imageEditor = new ImageEditor(undefined);
imageEditor.applyPreset();



// 7) Observer Pattern
// observers
const chart = new Chart();
const spreadsheet = new Spreadsheet();
// subjects
const graphData = new DataSource();
const excelData = new DataSource();
// setup observation
graphData.addObserver(chart);
excelData.addObserver(spreadsheet);
// add data to each subject, triggers an update on each of the observers.
graphData.value = 10;
excelData.value = 5;