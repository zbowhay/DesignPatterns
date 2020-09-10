import { Subject } from './Subject';



export class DataSource extends Subject {
    private _value = 1;

    public get value(): number {
        return this._value;
    }
    
    public set value(v: number) {
        this._value = v;
        this.notifyObservers(this._value);
    }
}