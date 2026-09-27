[简体中文](README.md) | [繁體中文](README.zh-TW.md) | [English](README.en.md)

[![JavaScript](https://img.shields.io/badge/JavaScript-Web-F7DF1E?logo=javascript&logoColor=111)](https://github.com/masterai-top/Zhouyi-Divination-System-Source-Code) [![Stars](https://img.shields.io/github/stars/masterai-top/Zhouyi-Divination-System-Source-Code?style=social)](https://github.com/masterai-top/Zhouyi-Divination-System-Source-Code/stargazers) [![Pages](https://img.shields.io/badge/GitHub-Pages-222?logo=github)](https://masterai-top.github.io/Zhouyi-Divination-System-Source-Code/)

# Zhouyi, Bazi, Ziwei, Qimen and Qizheng Siyu Source Code

> A browser-based traditional-culture software snapshot with verifiable JavaScript for Bazi/Four Pillars relationships, luck cycles, time-zone and astronomical support, plus real product screenshots for Qizheng Siyu, Da Liuren and integrated chart pages.

<table><tr><td width="50%" align="center"><img src="./Screenshots/wujibazi.png" width="470" alt="无极八字排盘"><br><strong>Bazi chart</strong></td><td width="50%" align="center"><img src="./Screenshots/qizhengsiyu.png" width="470" alt="七政四余排盘"><br><strong>Qizheng Siyu chart</strong></td></tr></table>

## Product capabilities

| Area | What the material shows |
|---|---|
| Bazi / Four Pillars | Stems, branches, Ten Gods, hidden stems, relations and luck-cycle material |
| Five Elements and annual luck | Product result views and Bazi-related calculation material |
| Qizheng Siyu and Da Liuren | Real interface screenshots; full server algorithms require separate verification |
| Ziwei and Qimen integration | Product/integration references; do not assume a complete local engine |

## Chart workflow

1. Collect date, time, time zone and chart parameters.
2. Normalize time and derive Four Pillars data.
3. Calculate relations and luck-cycle information.
4. Render chart results or request integrated services.

## Verifiable code

- <code>paipan.js</code>: Bazi core, Ten Gods, hidden stems, luck-cycle and astronomy fragments
- <code>paipan.gx.js</code>: stem/branch relationship processing
- <code>timezone.js</code>, <code>astro.js</code>: time-zone and astronomy support
- <code>utils.js</code>: browser requests, date formatting and image export

## Product screenshots

<table><tr><td width="50%" align="center"><img src="./Screenshots/baizhipaipan.png" width="470" alt="四柱八字排盘"><br><strong>Four Pillars</strong></td><td width="50%" align="center"><img src="./Screenshots/wuxing.png" width="470" alt="五行分析"><br><strong>Five Elements</strong></td></tr><tr><td width="50%" align="center"><img src="./Screenshots/daliuren.png" width="470" alt="大六壬排盘"><br><strong>Da Liuren</strong></td><td width="50%" align="center"><img src="./Screenshots/qizheng2.png" width="470" alt="七政四余详细盘"><br><strong>Detailed Qizheng Siyu</strong></td></tr></table>

## Documentation

- [Zhouyi / Yijing source code](https://masterai-top.github.io/Zhouyi-Divination-System-Source-Code/en/zhouyi-yijing-source-code.html)
- [Bazi and Four Pillars](https://masterai-top.github.io/Zhouyi-Divination-System-Source-Code/en/bazi-four-pillars.html)
- [Ziwei and Qimen](https://masterai-top.github.io/Zhouyi-Divination-System-Source-Code/en/ziwei-qimen.html)
- [Qizheng Siyu](https://masterai-top.github.io/Zhouyi-Divination-System-Source-Code/en/qizheng-siyu.html)

## Scope and disclaimer

The repository verifies the listed browser code and screenshots. Some pages call server endpoints, so every pictured function must not be described as a complete offline engine. Content is for cultural-software research and does not provide deterministic, medical, legal, financial or life advice.
