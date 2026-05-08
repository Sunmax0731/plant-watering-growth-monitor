# 設計

給水を直接実行せず mock device と dry-run 判定に限定し、安全レビューを優先する。

UIは左に代表シナリオ、中央にcanvasと結果、右にrelease readinessを配置します。Chrome headless smokeで `data-smoke=ready`、ボタン、結果パネル、platform scope を確認します。
