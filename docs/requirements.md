# 要件定義

## 対象

| 62 | P3 | 51 | IoT | 5 | 植物自動給水・成長観察システム | plant-watering-growth-monitor | GitHub Release / 自宅LAN | 自動給水は誤作動時の影響が大きく、実機なしで安全境界と長期観察の判断を試す場が必要。 |

## 目的

土壌水分、タンク残量、観察メモを模擬テレメトリで扱い、給水判断を安全にレビューできる監視ダッシュボード。

## 必須要件

- 代表シナリオ4種を自動検証する。
- simulator、mock device、sample telemetry、Web dashboard、security/privacy の安全境界を必須とする。
- 文字化けを検出し、正式成果物へ残さない。
- QCDSの10段階スケールを機械検証する。
