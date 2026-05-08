# 責務分割

- simulator: 植物自動給水・成長観察システム の closed alpha 検証責務。
- mock-device: 植物自動給水・成長観察システム の closed alpha 検証責務。
- telemetry-host: 植物自動給水・成長観察システム の closed alpha 検証責務。
- web-dashboard: 植物自動給水・成長観察システム の closed alpha 検証責務。
- safety-validator: 植物自動給水・成長観察システム の closed alpha 検証責務。

共通: `src/core` が評価ロジック、`src/validators` が代表シナリオ検証、`src/report` が証跡生成、`src/web` がブラウザ表示を担当する。
