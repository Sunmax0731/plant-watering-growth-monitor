# 植物自動給水・成長観察システム

plant-watering-growth-monitor は、NON PICKUP 優先リスト Rank 62 / IoT No.5 から昇格した closed alpha プロダクトです。植物ごとの土壌水分、温湿度、照度、給水履歴、備蓄状態を記録し、ポンプやバルブで自動給水する。

## Quick Start

```powershell
cd D:\AI\IoT\plant-watering-growth-monitor
npm test
npm run cli
```

## Closed Alpha Scope

- 公開想定: GitHub Release / 自宅LAN
- 対象ユーザー: 家庭内LANで植物の世話を安全に記録したい個人ユーザー
- 手動テスト: Codex側では未実施。手順は `docs/manual-test.md` と `docs/strict-manual-test-addendum.md` に記載

## Architecture

- `src/core`: プロダクト定義と代表シナリオ評価
- `src/validators`: representative suite と期待結果の検証
- `src/report`: validation result、web smoke、QCDS metrics、deterministic docs ZIP の生成
- `src/review-model`: QCDS 評価モデル
- `src/cli`: CLI 検証入口
- `src/web`: 静的Web表示と主要操作
- `src/simulator` / `src/device-adapter` / `src/host-adapter`: mock telemetry と安全なLAN検証境界

## Release Artifacts

- `dist/plant-watering-growth-monitor-docs.zip`
- `dist/validation-result.json`
- `dist/web-smoke-result.json`
- `docs/release-evidence.json`
