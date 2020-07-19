import { DopePreset } from './presets';



export class ImageEditor {
    image: any;
    dopePreset = new DopePreset();

    constructor(img: any) {
        this.image = img;
    }

    applyPreset() {
        this.dopePreset.apply();
    }
}