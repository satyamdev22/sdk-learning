const DEFAULT_TIMEOUT_MS = 10000;
export class SdkPro01Client {
    constructor(config = {}) {
        this.baseUrl = config.baseUrl;
        this.apiKey = config.apiKey;
        this.timeoutMs = config.timeoutMs ?? DEFAULT_TIMEOUT_MS;
    }
    add(a, b) {
        return a + b;
    }
    async health(options = {}) {
        if (!this.baseUrl) {
            return {
                status: "ok",
                timestamp: new Date().toISOString()
            };
        }
        return this.request("/health", options);
    }
    async request(path, options = {}) {
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
            return (await response.json());
        }
        finally {
            clearTimeout(timeout);
        }
    }
}
//# sourceMappingURL=client.js.map