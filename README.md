[简体中文](README.md) | [繁體中文](README.zh-TW.md) | [English](README.en.md)

[![JavaScript](https://img.shields.io/badge/JavaScript-Web-F7DF1E?logo=javascript&logoColor=111)](https://github.com/masterai-top/Zhouyi-Divination-System-Source-Code) [![Stars](https://img.shields.io/github/stars/masterai-top/Zhouyi-Divination-System-Source-Code?style=social)](https://github.com/masterai-top/Zhouyi-Divination-System-Source-Code/stargazers) [![Pages](https://img.shields.io/badge/GitHub-Pages-222?logo=github)](https://masterai-top.github.io/Zhouyi-Divination-System-Source-Code/)

# 周易源码：八字排盘、易经、紫微斗数、奇门遁甲与七政四余

> 面向传统文化软件研究与合规应用开发的浏览器端项目。仓库公开代码重点包含四柱八字、十神、藏干、刑冲合害、大运流年、时间与天文数据处理；产品截图同时展示无极八字、五行、大六壬、七政四余及综合排盘界面。

<table><tr><td width="50%" align="center"><img src="./Screenshots/wujibazi.png" width="470" alt="周易源码与无极八字排盘界面"><br><strong>无极八字排盘</strong><br><sub>四柱、干支及命盘信息展示</sub></td><td width="50%" align="center"><img src="./Screenshots/qizhengsiyu.png" width="470" alt="七政四余排盘源码产品界面"><br><strong>七政四余排盘</strong><br><sub>星曜与传统排盘产品界面</sub></td></tr></table>

## 项目定位

该项目把周易、易经和传统术数产品界面与浏览器端 JavaScript 计算代码放在同一仓库中。适合评估八字排盘网页、传统历法工具、四柱八字数据处理、排盘结果展示和多术数产品导航。它不是对人生结果的确定性预测，也不替代医疗、法律或金融建议。

## 产品功能矩阵

| 专题 | 产品内容 | 公开证据与边界 |
|---|---|---|
| **四柱八字排盘** | 年月日时、天干地支、十神、藏干、纳音、刑冲合害 | <code>paipan.js</code>、<code>paipan.gx.js</code> 与八字截图可核验 |
| **五行分析** | 命盘中的五行信息与关系展示 | 五行产品截图；算法完整度需结合实际接口核验 |
| **大运流年** | 起运、大运与年度信息展示 | <code>paipan.js</code> 含排大运逻辑，配有流年截图 |
| **七政四余** | 七政四余盘面与详细结果页面 | 产品截图可核验；完整后端计算服务未全部公开 |
| **大六壬** | 大六壬排盘结果展示 | 产品截图可核验；算法交付范围需另行确认 |
| **紫微斗数、奇门遁甲** | 多术数产品入口与集成场景 | 文案/接口调用可见，不能把未公开后端描述为完整本地算法 |
| **天文与时间处理** | 时区、日期、太阳/月亮位置及相关数据 | <code>timezone.js</code>、<code>astro.js</code> 可核验 |

## 从输入到排盘结果

1. **输入资料**：日期、时间、时区及产品所需参数。
2. **时间归一化**：通过日期、时区和天文辅助逻辑统一输入。
3. **四柱计算**：形成干支、十神、藏干、纳音及关系数据。
4. **扩展排盘**：根据产品入口请求或展示大运流年、七政四余、大六壬、紫微斗数或奇门遁甲。
5. **界面输出**：生成适合浏览器查看或保存的排盘结果。

## 真实产品截图

<table><tr><td width="50%" align="center"><img src="./Screenshots/baizhipaipan.png" width="470" alt="四柱八字排盘"><br><strong>四柱八字排盘</strong></td><td width="50%" align="center"><img src="./Screenshots/wuxing.png" width="470" alt="五行分析"><br><strong>五行分析</strong></td></tr><tr><td width="50%" align="center"><img src="./Screenshots/liunian.png" width="470" alt="大运流年"><br><strong>大运流年</strong></td><td width="50%" align="center"><img src="./Screenshots/daliuren.png" width="470" alt="大六壬排盘"><br><strong>大六壬排盘</strong></td></tr><tr><td width="50%" align="center"><img src="./Screenshots/qizheng2.png" width="470" alt="七政四余详细盘"><br><strong>七政四余详细盘</strong></td><td width="50%" align="center"><img src="./Screenshots/paipan.png" width="470" alt="综合排盘"><br><strong>综合排盘</strong></td></tr></table>

## 可核验的技术结构

| 文件 | 作用 |
|---|---|
| <code>paipan.js</code> | 八字排盘主逻辑、十神、藏干、大运及天文计算片段 |
| <code>paipan.gx.js</code> | 天干地支刑冲合害等关系处理 |
| <code>door.js</code> | 时间参数、方位/门类信息及服务接口处理 |
| <code>astro.js</code> | 天文位置接口和十二地支相关处理 |
| <code>timezone.js</code> | 时区数据 |
| <code>utils.js</code> | 请求、日期格式化、结果保存等浏览器工具 |
| <code>index.html</code>、<code>index.js</code> | 产品入口及网页交互 |

## 图文专题

- [周易源码与易经排盘](https://masterai-top.github.io/Zhouyi-Divination-System-Source-Code/zh-cn/zhouyi-yijing-source-code.html)
- [八字排盘与四柱八字源码](https://masterai-top.github.io/Zhouyi-Divination-System-Source-Code/zh-cn/bazi-four-pillars.html)
- [紫微斗数与奇门遁甲集成说明](https://masterai-top.github.io/Zhouyi-Divination-System-Source-Code/zh-cn/ziwei-qimen.html)
- [七政四余排盘专题](https://masterai-top.github.io/Zhouyi-Divination-System-Source-Code/zh-cn/qizheng-siyu.html)
- [大六壬与综合排盘](https://masterai-top.github.io/Zhouyi-Divination-System-Source-Code/zh-cn/da-liuren-chart.html)
- [JavaScript 排盘技术结构](https://masterai-top.github.io/Zhouyi-Divination-System-Source-Code/zh-cn/javascript-chart-architecture.html)

## 公开范围与免责声明

公开仓库可验证上述 JavaScript、HTML、文档和截图。部分页面调用服务端接口，因此不能将所有截图对应功能都描述为完全离线或完整开源后端。内容用于传统文化软件展示、研究和产品评估，不构成确定性预测或医疗、法律、金融、投资和人生决策建议。

Telegram：@xuzongbin001 · Email：masterai918@gmail.com
