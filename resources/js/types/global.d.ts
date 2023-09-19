export {};

declare global {
    interface Window {
        ProDashboard: {
            config: {
                domain: string | null,
                path: string | null,
                appName: string | null,
            }
        }
    }
}
