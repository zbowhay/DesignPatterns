import { CompositeCommand } from '../framework/compositeCommand';
import { Bokeh, Vignette, Sepia } from './filters';



export class DopePreset {
    presetSteps: CompositeCommand = new CompositeCommand();

    constructor() {
        this.presetSteps.addCommand(new Sepia());
        this.presetSteps.addCommand(new Bokeh());
        this.presetSteps.addCommand(new Vignette());
    }

    apply() {
        this.presetSteps.execute();
    }
}