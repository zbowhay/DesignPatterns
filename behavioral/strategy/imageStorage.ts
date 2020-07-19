import { Compressor } from './compressors/compressor';
import { Filter } from './filters/filter';



export class ImageStorage {
    compressor: Compressor;
    filter: Filter;

    constructor(compressor: Compressor, filter: Filter) {
        this.compressor = compressor;
        this.filter = filter;
    }

    store(fileLoc: string) {
        this.compressor.compress(fileLoc);
        this.filter.apply(fileLoc);
    }
}