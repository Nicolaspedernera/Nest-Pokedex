import { HttpAdapter } from '../interfaces/http-adapter.interface';
export declare class AxiosAdapter implements HttpAdapter {
    private axios;
    get<T>(url: string): Promise<T>;
}
