export interface SdkPro01Config {
  baseUrl?: string;
  apiKey?: string;
  timeoutMs?: number;
}

export interface SdkPro01RequestOptions {
  headers?: Record<string, string>;
  timeoutMs?: number;
}

export interface HealthResponse {
  status: "ok";
  timestamp: string;
}

