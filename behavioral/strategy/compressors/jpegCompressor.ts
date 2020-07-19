import { Compressor } from './compressor';

export class JPEGCompressor implements Compressor {
    compress(fileLoc: string) {
        console.log(`Compressing JPEG @ ${fileLoc}`);
    }
}