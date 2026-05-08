export const product = {
  "repo": "plant-watering-growth-monitor",
  "domain": "IoT",
  "rank": 62,
  "tier": "P3",
  "score": 51,
  "ideaNo": 5,
  "ideaName": "植物自動給水・成長観察システム",
  "field": "植物観察IoT",
  "publicTarget": "GitHub Release / 自宅LAN",
  "platformScope": "sensor simulator / mock watering dry-run / Web dashboard",
  "overview": "土壌水分、タンク残量、観察メモを模擬テレメトリで扱い、給水判断を安全にレビューできる監視ダッシュボード。",
  "problem": "自動給水は誤作動時の影響が大きく、実機なしで安全境界と長期観察の判断を試す場が必要。",
  "differentiation": "給水を直接実行せず mock device と dry-run 判定に限定し、安全レビューを優先する。",
  "audience": "家庭菜園ユーザー、IoT試作担当、長期観察教材担当",
  "requiredInputs": [
    "soilMoisture",
    "tankLevel",
    "growthNote",
    "wateringMode"
  ],
  "modules": [
    "simulator",
    "mock-device",
    "telemetry-host",
    "web-dashboard",
    "safety-validator"
  ],
  "accent": "#16a34a",
  "secondary": "#365314",
  "scenarioNouns": [
    "土壌水分",
    "タンク残量",
    "観察メモ"
  ]
};

export function evaluateScenario(scenario) {
  if (scenario.type === 'mixed-batch') {
    const results = (scenario.items || []).map((inputs, index) => evaluateScenario({ id: scenario.id + '-' + index, inputs, flags: index === 2 ? ['needsReview'] : [] }));
    const accepted = results.filter((result) => result.status !== 'error').length;
    const warnings = results.filter((result) => result.status !== 'pass').length;
    return { id: scenario.id, status: warnings ? 'warning' : 'pass', accepted, warnings, missing: results.flatMap((result) => result.missing), score: warnings ? 78 : 96 };
  }
  const inputs = scenario.inputs || {};
  const missing = product.requiredInputs.filter((key) => inputs[key] === undefined || inputs[key] === null || inputs[key] === '');
  if (missing.length) return { id: scenario.id, status: 'error', accepted: 0, warnings: 0, missing, score: 0 };
  const risky = Object.values(inputs).some((value) => /stale|low|noisy|manual-lock|large-water-change|late-brake|unknown|overflow|rush|storm|fatigue|unstable|crowded|high/i.test(String(value)));
  const warnings = (scenario.flags || []).includes('needsReview') || risky ? 1 : 0;
  return { id: scenario.id, status: warnings ? 'warning' : 'pass', accepted: 1, warnings, missing: [], score: warnings ? 86 : 96 };
}

export function summarizeProduct() {
  return { name: product.ideaName, repo: product.repo, domain: product.domain, releaseTarget: product.publicTarget, platformScope: product.platformScope, responsibilities: product.modules, requiredInputs: product.requiredInputs };
}
