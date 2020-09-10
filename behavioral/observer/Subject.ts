import { Observer } from './Observer';


export class Subject {
    private _observers: Array<Observer> = [];

    addObserver(observer: Observer) {
        this._observers.push(observer);
    }

    removeObserver(observer: Observer) {
        this._observers = this._observers.filter(o => o !== observer);
    }

    notifyObservers(value?: any) {
        this._observers.forEach(o => {
            typeof value !== 'undefined' ? o.update(value) : o.update();
        });
    }
    
}