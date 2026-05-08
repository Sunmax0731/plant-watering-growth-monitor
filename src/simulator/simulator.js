import { evaluateScenario } from '../core/product.js';
export function simulateTelemetry(input) { return { received: input, decision: evaluateScenario({ id: 'telemetry-simulation', inputs: input }) }; }
