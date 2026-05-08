import { product, evaluateScenario } from "../core/product.js";
export function simulateTelemetry(seedInput = product.requiredInputs[0]) { return { source: "mock-device", product: product.repo, payload: product.requiredInputs.reduce((acc, key, index) => ({ ...acc, [key]: index === 0 ? seedInput : key + "-sample" }), {}) }; }
export function evaluateTelemetry(telemetry) { return evaluateScenario({ id: "telemetry", inputs: telemetry.payload }); }
