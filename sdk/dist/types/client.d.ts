import { HealthResponse, SdkPro01Config, SdkPro01RequestOptions } from "./types";
export declare class SdkPro01Client {
    private readonly baseUrl?;
    private readonly apiKey?;
    private readonly timeoutMs;
    constructor(config?: SdkPro01Config);
    add(a: number, b: number): number;
    health(options?: SdkPro01RequestOptions): Promise<HealthResponse>;
    private request;
}
