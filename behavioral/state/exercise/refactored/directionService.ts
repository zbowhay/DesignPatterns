import { TravelMode, DrivingTravelMode } from './travelMode';

export class DirectionService {
    private _travelMode: TravelMode = new DrivingTravelMode();

    getETA() {
        this._travelMode.getETA();
    }

    getDirection() {
        this._travelMode.getDirection();
    }

    get travelMode() {
        return this._travelMode;
    }

    set travelMode(travelMode: TravelMode) {
        this._travelMode = travelMode;
    }
}