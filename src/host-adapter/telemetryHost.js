export function buildTelemetryHostPacket(deviceReading) { return { host: 'local-dashboard', safetyMode: 'dry-run', deviceReading }; }
