import { Compressor } from './compressor';

export class PNGCompressor implements Compressor {
    compress(fileLoc: string) {
        console.log(`Compressing PNG @ ${fileLoc}`);
    }
}