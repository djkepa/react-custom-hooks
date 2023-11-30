type Status = 'idle' | 'pending' | 'success' | 'error';
type AsyncFunction<T> = () => Promise<T>;
interface UseAsyncReturn<T> {
    execute: () => void;
    status: Status;
    value: T | null;
    error: Error | null;
}
declare function useAsync<T>(asyncFunction: AsyncFunction<T>, immediate?: boolean): UseAsyncReturn<T>;
export default useAsync;
//# sourceMappingURL=index.d.ts.map