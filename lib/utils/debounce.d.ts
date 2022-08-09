export declare class Debounce {
    typingTimeout: null | ReturnType<typeof setTimeout>;
    debounceFcn: (callback: () => void, timeoutDuration?: number) => void;
}
