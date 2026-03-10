import { HealthResponse, SdkPro01Config, SdkPro01RequestOptions } from "./types";

const DEFAULT_TIMEOUT_MS = 10_000;

export class SdkPro01Client {
  private readonly baseUrl?: string;
  private readonly apiKey?: string;
  private readonly timeoutMs: number;

  constructor(config: SdkPro01Config = {}) {
    this.baseUrl = config.baseUrl;
    this.apiKey = config.apiKey;
    this.timeoutMs = config.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  }

  add(a: number, b: number): number {
    return a + b;
  }

  async health(options: SdkPro01RequestOptions = {}): Promise<HealthResponse> {
    if (!this.baseUrl) {
      return {
        status: "ok",
        timestamp: new Date().toISOString()
      };
    }

    return this.request<HealthResponse>("/health", options);
  }

  private async request<T>(
    path: string,
    options: SdkPro01RequestOptions = {}
  ): Promise<T> {
    const timeoutMs = options.timeoutMs ?? this.timeoutMs;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(`${this.baseUrl}${path}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...(this.apiKey ? { Authorization: `Bearer ${this.apiKey}` } : {}),
          ...(options.headers ?? {})
        },
        signal: controller.signal
      });

      if (!response.ok) {
        throw new Error(`SDK request failed with status ${response.status}`);
      }

      return (await response.json()) as T;
    } finally {
      clearTimeout(timeout);
    }
  }
}

