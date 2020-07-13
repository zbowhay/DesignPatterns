

export interface TravelMode {
    getETA(): number;
    getDirection(): number;
}

export class DrivingTravelMode implements TravelMode {
    getETA(): number {
        console.log('Calculating ETA (driving)...');
        return 1;
    }
    getDirection(): number {
        console.log('Calculating Direction (driving)');
        return 1;
    }
}

export class BicyclingTravelMode implements TravelMode {
    getETA(): number {
        console.log('Calculating ETA (bicycling)...');
        return 2;
    }
    getDirection(): number {
        console.log('Calculating Direction (bicycling)');
        return 2;
    }
}

export class TransitTravelMode implements TravelMode {
    getETA(): number {
        console.log('Calculating ETA (transit)...');
        return 3;
    }
    getDirection(): number {
        console.log('Calculating Direction (transit)');
        return 3;
    }
}

export class WalkingTravelMode implements TravelMode {
    getETA(): number {
        console.log('Calculating ETA (walking)...');
        return 4;
    }
    getDirection(): number {
        console.log('Calculating Direction (walking)');
        return 4;
    }
}