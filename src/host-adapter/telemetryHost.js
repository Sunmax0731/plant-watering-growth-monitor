export function acceptTelemetry(packet) { return { accepted: Boolean(packet && packet.payload), privacy: "local-only", networkBoundary: "home-lan-or-static-demo" }; }
