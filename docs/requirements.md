# 要件定義

対象: 植物自動給水・成長観察システム (Rank 62, IoT No.5)

## 目的

植物ごとの土壌水分、温湿度、照度、給水履歴、備蓄状態を記録し、ポンプやバルブで自動給水する。

## 課題

植物の水やり、環境変化、備蓄確認が記憶頼りになり、乾燥、過湿、病害を見逃しやすい。

## 要件

- 必須入力 `plantId`、`moisture`、`light`、`pumpState` を検証する。
- happy-path / missing-required / warning / mixed-batch を代表シナリオとして保持する。
- CLI、静的Web UI、自動テスト、docs ZIP、release evidence を同一repoで完結させる。
- 正式docsはNON PICKUP行、ZIP metadata、ドメインdocsを根拠に正常な日本語で再構成する。

実機なしで検証できる simulator / mock device / CLI / Web dashboard / sample telemetry を境界にし、security/privacy とLAN安全性を整理します。
