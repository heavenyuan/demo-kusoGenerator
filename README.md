# Kuso Generator (回文圖產生器趴兔)

> A viral Taiwanese meme generator that took the internet by storm in 2016

[繁體中文](#繁體中文) | [English](#english)

---

## English

### Overview

Kuso Generator is a web-based meme image generator that allows users to create custom text overlays on images with various filters and effects. Originally developed in 2016, it became a viral phenomenon in the Taiwanese internet community, enabling users to create and share humorous "reply images" (回文圖) for social media.

### Historical Impact

**Year**: 2016
**Status**: Viral sensation in Taiwan's online community

When launched in 2016, Kuso Generator quickly became a cultural phenomenon:
- 🔥 **Viral Spread**: Widely shared across Facebook, LINE, and PTT (Taiwan's largest forum)
- 💬 **Cultural Impact**: Became synonymous with Taiwanese meme culture
- 📱 **Social Integration**: Direct sharing to Facebook and LINE built into the platform
- 🎨 **User Generated Content**: Thousands of user-created memes shared daily
- 🌟 **Trend Setter**: Inspired numerous similar tools and became part of internet culture vernacular

[Google Search Results](https://www.google.com/search?q=%E5%9B%9E%E6%96%87%E5%9C%96%E7%94%A2%E7%94%9F%E5%99%A8%E8%B6%B4%E5%85%94) show the lasting impact of this project.

### Features

#### Core Functionality
- 📸 **Image Upload**: Support for custom image uploads
- 🖼️ **Preset Images**: Built-in collection of popular meme templates
- ✍️ **Text Overlay**: Vertical/horizontal text positioning with customizable fonts
- 🎨 **Image Filters**: 6 filter options (Normal, B&W, Sepia, Brighten, Overexpose, Negative)
- 🎯 **Text Customization**:
  - Font size (10-200px)
  - Position (Top/Bottom/Left/Right)
  - Color (White/Black/Red/Green/Blue)
  - Font family (DFKai-sb, Microsoft JhengHei, PMingLiU)

#### Sharing & Export
- 💾 **Direct Download**: Two download methods for different devices
- 📤 **imgur Integration**: Upload and host images on imgur
- 👥 **Social Sharing**:
  - Facebook sharing
  - LINE messaging
  - Direct image links

### Technology Stack

**Frontend:**
- Pure JavaScript (ES5+, refactored to modern standards)
- HTML5 Canvas for image manipulation
- jQuery (legacy, being phased out)
- Fancybox for modal dialogs

**APIs & Services:**
- imgur API v3 for image hosting
- Facebook SDK for social sharing
- LINE sharing integration

**Image Processing:**
- Canvas-based pixel manipulation
- Real-time filter effects
- Custom vertical text rendering for Traditional Chinese

### Project Structure

```
demo-kusoGenerator/
├── index.html          # Main application page
├── index.js            # Core application logic (refactored)
├── style.css           # Styling
├── img/                # Preset meme images
│   ├── fdhg5re.jpg
│   ├── 7d65w.jpg
│   └── ...
└── README.md
```

### Browser Support

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Legacy & Influence

This project represents a snapshot of early viral web applications in Taiwan:
- **Simplicity**: No complex frameworks, just vanilla JavaScript and Canvas
- **Social Integration**: Built for sharing from day one
- **Cultural Relevance**: Tailored specifically for Traditional Chinese meme culture
- **Accessibility**: Works on both desktop and mobile devices

Despite being created in 2016, the core concept remains relevant, demonstrating the timeless appeal of user-generated content tools.

### Development Notes

**Original Development**: 2016
**Framework Philosophy**: Keep it simple, keep it working

---

## 繁體中文

### 專案簡介

回文圖產生器趴兔是一個網頁版的梗圖製作工具，讓使用者可以在圖片上加入自訂文字與各種濾鏡效果。最初於 2016 年開發，迅速成為台灣網路社群的病毒式現象，讓使用者能夠製作並分享幽默的「回文圖」到社群媒體。

### 歷史影響

**年份**: 2016
**狀態**: 台灣網路社群的病毒式熱潮

2016 年推出後，回文圖產生器迅速成為文化現象：
- 🔥 **病毒式傳播**: 在 Facebook、LINE 和 PTT 廣泛分享
- 💬 **文化影響**: 成為台灣梗圖文化的代名詞
- 📱 **社群整合**: 內建 Facebook 和 LINE 直接分享功能
- 🎨 **使用者生成內容**: 每天數千張使用者創作的梗圖被分享
- 🌟 **引領潮流**: 啟發了許多類似工具，成為網路文化的一部分

### 主要功能

#### 核心功能
- 📸 上傳自訂圖片
- 🖼️ 內建熱門梗圖模板
- ✍️ 垂直/水平文字配置，可自訂字型
- 🎨 6 種濾鏡選項（正常、黑白、泛黃、高亮、過曝、負片）
- 🎯 文字自訂化（大小、位置、顏色、字型）

#### 分享與匯出
- 💾 直接下載（兩種方式相容不同裝置）
- 📤 上傳至 imgur
- 👥 社群分享（Facebook、LINE）

### 技術架構

**前端：**
- 原生 JavaScript（ES5+，已重構為現代標準）
- HTML5 Canvas 圖片處理
- jQuery（舊版，逐步淘汰中）
- Fancybox 模態框

**API 與服務：**
- imgur API v3 圖床服務
- Facebook SDK 社群分享
- LINE 分享整合

**圖片處理：**
- Canvas 像素級處理
- 即時濾鏡效果
- 繁體中文直排文字渲染

### 專案結構

```
demo-kusoGenerator/
├── index.html          # 主應用程式頁面
├── index.js            # 核心應用邏輯（已重構）
├── style.css           # 樣式表
├── img/                # 預設梗圖
│   ├── fdhg5re.jpg
│   ├── 7d65w.jpg
│   └── ...
└── README.md
```

### 瀏覽器支援

- ✅ Chrome/Edge（推薦）
- ✅ Firefox
- ✅ Safari
- ✅ 行動裝置瀏覽器（iOS Safari、Chrome Mobile）

### 歷史意義與影響

這個專案代表了台灣早期病毒式網路應用的典範：
- **簡約設計**: 不依賴複雜框架，僅用原生 JavaScript 和 Canvas
- **社群優先**: 從開發初期就考慮分享功能
- **文化契合**: 專為繁體中文梗圖文化量身打造
- **跨平台**: 同時支援桌面與行動裝置

儘管誕生於 2016 年，核心概念至今仍具相關性，展現了使用者生成內容工具的永恆魅力。

### 開發筆記

**原始開發**: 2016 年
**框架理念**: 保持簡單，保持運作

---

## License

This is a legacy project from 2016.

## Credits

**Original Development**: 2016

---

*Built with ❤️ for the Taiwanese meme community*
