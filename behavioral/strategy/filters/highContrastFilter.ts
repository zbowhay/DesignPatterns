import { Filter } from './filter';



export class HighContrastFilter implements Filter {
    apply(fileLoc: string) {
        console.log(`applying High Contrast filter to ${fileLoc}`);
    }
}