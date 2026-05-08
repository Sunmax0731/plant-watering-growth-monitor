# SKILL

1. `npm test` で代表シナリオと Chrome headless smoke を実行する。
2. `dist/validation-result.json` と `dist/web-smoke-result.json` が pass であることを確認する。
3. `docs/qcds-strict-metrics.json` の grade が10段階スケール内で、全観点 `A-` 以上であることを確認する。
4. `dist/plant-watering-growth-monitor-docs.zip`、`docs/manual-test.md`、`docs/strict-manual-test-addendum.md` を release asset として添付する。
5. QCDSは docs と ZIP の存在確認だけで通さず、simulator、mock device、sample telemetry、Web dashboard、security/privacy の安全境界を必須とする。
