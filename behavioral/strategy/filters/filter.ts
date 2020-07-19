export interface Filter {
    apply(fileLoc: string): void;
}