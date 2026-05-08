# QCDS リモートベンチマーク

対象: 植物自動給水・成長観察システム (Rank 62, IoT No.5)

## 採用した成熟基準

- 代表データ、actual run、metrics JSON、release evidence を結びつける。
- hardening plan、release precheck、security evidence を同じリリース単位で扱う。
- ファイルの存在だけでS評価にせず、再実行性、traceability、manual test readinessを評価する。

## 今回への反映

`samples/representative-suite.json`、`docs/qcds-strict-metrics.json`、`docs/qcds-regression-baseline.json`、`docs/release-evidence.json` に反映しました。
