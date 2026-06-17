# 家长冷静助手 (Parent Calm Assistant)

一款帮助父母减少对孩子发火的 PWA 应用。通过麦克风被动监测语音情绪，在即将发火时实时干预。

## 功能

- **守护模式**：实时五维声学监测 + 语义监测，双通道并行，检测到发火苗头时震动提醒
- **安抚模式**：40 个育儿场景的专属修复道歉话术
- **数据追踪**：手动打卡、迁怒占比统计、月度报告
- **训练模式**：4 级抗挫预防训练

## 技术

- 纯前端 PWA，单文件 HTML（~5300 行）
- 声学模型 V4：12 维特征 + 1.5 秒时序窗口 + 浊音门控
- Web Speech API 语义监测
- IndexedDB 本地存储

## 声学模型

```
V4 架构：
  5 基础特征 (vol/pitch/cent/zcr/rate)
  + 3 频谱特征 (flux/rolloff/flatness)
  + 3 时序特征 (pitchTrend/volVolatility/harmMin)
  + voice gate vg² 双重惩罚
  → 12 维 logit → sigmoid 概率
```

## 部署

GitHub Pages: `https://<username>.github.io/parent-calm/`
