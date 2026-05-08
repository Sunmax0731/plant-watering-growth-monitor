# 責務分割

対象: 植物自動給水・成長観察システム (Rank 62, IoT No.5)

| 領域 | 責務 |
| src/core | プロダクト定義と代表シナリオ評価 |
| src/validators | suite構造と期待結果の検証 |
| src/report | stable JSON、QCDS、docs ZIP生成 |
| src/review-model | QCDS定義と採点 |
| src/cli | CLI実行入口 |
| src/web | 静的Web表示と主要操作 |
| src/simulator / device-adapter / host-adapter | 実機なしで検証できる simulator / mock device / CLI / Web dashboard / sample telemetry を境界にし、security/privacy とLAN安全性を整理します。 |
