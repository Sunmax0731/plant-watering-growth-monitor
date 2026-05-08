export const product = {
  "repo": "plant-watering-growth-monitor",
  "domain": "IoT",
  "rank": 62,
  "tier": "P3",
  "score": 51,
  "ideaNo": 5,
  "ideaName": "植物自動給水・成長観察システム",
  "field": "植物育成・自動給水",
  "publicTarget": "GitHub Release / 自宅LAN",
  "overview": "植物ごとの土壌水分、温湿度、照度、給水履歴、備蓄状態を記録し、ポンプやバルブで自動給水する。",
  "problem": "植物の水やり、環境変化、備蓄確認が記憶頼りになり、乾燥、過湿、病害を見逃しやすい。",
  "differentiation": "水分センサー、給水制御、カメラ観察、育成ログ、手動お世話を家庭内IoTカードにまとめる。",
  "audience": "家庭内LANで植物の世話を安全に記録したい個人ユーザー",
  "requiredInputs": [
    "plantId",
    "moisture",
    "light",
    "pumpState"
  ],
  "modules": [
    "simulator",
    "device-adapter",
    "host-adapter",
    "web-dashboard"
  ],
  "accent": "#4f8d3a",
  "secondary": "#2a9d8f",
  "scenarioNouns": [
    "水分しきい値",
    "給水履歴",
    "成長メモ"
  ]
};

export function evaluateScenario(scenario) {
  if (scenario.type === "mixed-batch") {
    const results = (scenario.items || []).map((inputs, index) => evaluateScenario({ id: scenario.id + "-" + index, inputs, flags: index === 2 ? ["needsReview"] : [] }));
    const accepted = results.filter((r) => r.status !== "error").length;
    const warnings = results.filter((r) => r.status !== "pass").length;
    return { id: scenario.id, status: warnings ? "warning" : "pass", accepted, warnings, missing: results.flatMap((r) => r.missing), score: warnings ? 78 : 96 };
  }
  const inputs = scenario.inputs || {};
  const missing = product.requiredInputs.filter((key) => inputs[key] === undefined || inputs[key] === null || inputs[key] === "");
  if (missing.length) return { id: scenario.id, status: "error", accepted: 0, warnings: 0, missing, score: 0 };
  const risky = Object.values(inputs).some((v) => /stale|low|noisy|manual-lock|large-water-change|late-brake|unknown/i.test(String(v)));
  const warnings = (scenario.flags || []).includes("needsReview") || risky ? 1 : 0;
  return { id: scenario.id, status: warnings ? "warning" : "pass", accepted: 1, warnings, missing: [], score: warnings ? 86 : 96 };
}

export function summarizeProduct() {
  return { name: product.ideaName, repo: product.repo, releaseTarget: product.publicTarget, responsibilities: product.modules, requiredInputs: product.requiredInputs };
}
