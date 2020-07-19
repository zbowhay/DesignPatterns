import { Filter } from './filter';


export class BlackAndWhiteFilter implements Filter {
    apply(fileLoc: string) {
        console.log(`applying Black and White filter to ${fileLoc}`);
    }
}