# AROMA - 小眾沙龍香水網站

## 🎨 專案概述

這是一個世界級的小眾沙龍香水網站首頁，採用 **Scrollytelling（滾動敘事）** 技術，強調 **透明感 (Transparency)**、**流體流動 (Fluidity)** 和 **玻璃光影 (Glass Morphism)** 的視覺語言。

### 核心特色

- ✨ **Scrollytelling 體驗**：滾動觸發的動畫敘事，打造沉浸式瀏覽體驗
- 🪞 **玻璃光影效果**：Glass Morphism 設計風格，透明感與模糊效果
- 🌊 **流體動畫**：浮動的玻璃球體與波紋互動效果
- 📝 **優雅襯線字體**：Cormorant Garamond、Crimson Pro 等高級字體
- 🖼️ **自動圖片優化**：Astro Assets 自動轉換為 WebP 格式
- 📱 **響應式設計**：完美適配桌面、平板與手機

---

## 📁 專案結構

```
demo-aroma/
├── src/
│   ├── assets/              # 圖片素材（自動優化）
│   │   ├── perfume-splash.jpg
│   │   ├── perfume-water.jpg
│   │   └── perfume-bottle.jpg
│   │
│   ├── components/          # 可重用元件
│   │   ├── Navigation.astro           # 導覽列（玻璃效果）
│   │   ├── HeroScrollytelling.astro   # Hero 區塊（視差動畫）
│   │   ├── ProductShowcase.astro      # 產品展示（滾動觸發）
│   │   └── GlassFluidSection.astro    # 玻璃流體區塊
│   │
│   ├── config/              # 配置檔案
│   │   ├── siteConfig.ts              # 網站設定
│   │   └── typography.ts              # 字型配置（全域控制）
│   │
│   ├── layouts/             # 佈局模板
│   │   └── Layout.astro               # 主佈局（含字型載入）
│   │
│   ├── pages/               # 頁面
│   │   └── index.astro                # 首頁
│   │
│   └── styles/              # 全域樣式
│       └── global.css                 # 全域 CSS（含字型變數）
│
├── public/                  # 靜態資源
├── package.json
└── astro.config.mjs
```

---

## 🎯 核心功能說明

### 1. 全域字型控制系統

**位置**：`src/config/typography.ts` + `src/styles/global.css`

所有字型在 `typography.ts` 統一定義，透過 CSS 變數全域套用：

```typescript
// typography.ts
export const typography = {
  heading: {
    fontFamily: "'Cormorant Garamond', 'Playfair Display', 'Noto Serif TC', serif",
  },
  body: {
    fontFamily: "'Crimson Pro', 'Noto Serif TC', serif",
  },
  // ...
}
```

```css
/* global.css */
:root {
  --font-heading: 'Cormorant Garamond', 'Playfair Display', 'Noto Serif TC', serif;
  --font-body: 'Crimson Pro', 'Noto Serif TC', serif;
}

h1, h2, h3 {
  font-family: var(--font-heading);
}
```

**修改方式**：只需編輯 `typography.ts` 和 `global.css` 中的字型定義，整個網站字體即會更新。

---

### 2. 導覽列結構

**位置**：`src/components/Navigation.astro`

- **預留連結**：關於、產品、服務、聯絡
- **滾動效果**：滾動超過 100px 後出現玻璃背景模糊效果
- **手機選單**：響應式漢堡選單，全螢幕覆蓋

**自訂方式**：
```astro
<ul class="hidden md:flex items-center gap-12">
  <li><a href="#about" class="nav-link text-accent">關於</a></li>
  <li><a href="#products" class="nav-link text-accent">產品</a></li>
  <!-- 新增更多連結 -->
</ul>
```

---

### 3. Astro Assets 圖片優化

**位置**：所有元件中的 `<Image />` 標籤

圖片放在 `src/assets/` 目錄，使用 Astro 內建的 `Image` 元件：

```astro
---
import { Image } from 'astro:assets';
import perfumeSplash from '../assets/perfume-splash.jpg';
---

<Image 
  src={perfumeSplash}
  alt="Luxury perfume splash"
  quality={90}
/>
```

**自動優化**：
- ✅ 自動轉換為 WebP 格式
- ✅ 響應式尺寸調整
- ✅ 延遲載入（lazy loading）

建置後可在 `dist/_astro/` 看到優化後的圖片。

---

## 🚀 開發指令

```bash
# 安裝依賴
npm install

# 啟動開發伺服器（http://localhost:4321）
npm run dev

# 建置生產版本
npm run build

# 預覽建置結果
npm run preview
```

---

## 🎨 設計系統

### 色彩系統

```css
--color-primary: #1a1a1a;        /* 主色 */
--color-secondary: #f5f5f5;      /* 次要色 */
--color-accent: #d4af37;         /* 金色點綴 */
--color-glass: rgba(255, 255, 255, 0.1);  /* 玻璃效果 */
```

### 字型層級

- **Display**：Bodoni Moda（裝飾性標題）
- **Heading**：Cormorant Garamond（主標題）
- **Body**：Crimson Pro（內文）
- **Accent**：Montserrat（按鈕、標籤）

### 動畫效果

1. **float**：浮動動畫（玻璃球體）
2. **ripple**：波紋擴散效果
3. **shimmer**：光澤移動效果
4. **scroll-reveal**：滾動觸發淡入動畫

---

## 📝 頁面區塊說明

### Hero Section（HeroScrollytelling.astro）
- 全螢幕開場
- 視差背景效果
- 序列動畫載入
- 滾動提示器

### Product Showcase（ProductShowcase.astro）
- 產品卡片網格
- 滾動觸發動畫
- Hover 放大效果
- 特色標籤區塊

### Glass Fluid Section（GlassFluidSection.astro）
- 深色背景
- 流動玻璃球體
- 互動波紋效果
- 玻璃卡片設計

### Services Section
- 雙欄服務介紹
- 漸層背景裝飾
- 列表式內容呈現

### Contact Section
- 聯絡資訊卡片
- CTA 按鈕組
- 背景動態裝飾

---

## 🔧 自訂與擴展

### 新增頁面

1. 在 `src/pages/` 建立新檔案，例如 `about.astro`
2. 使用 Layout 包裹內容：

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="關於我們">
  <h1>關於內容</h1>
</Layout>
```

### 修改字型

1. 編輯 `src/config/typography.ts`
2. 更新 `src/styles/global.css` 中的 CSS 變數
3. 在 `src/layouts/Layout.astro` 更新 Google Fonts 連結

### 新增圖片

1. 將圖片放入 `src/assets/`
2. 在元件中 import 並使用：

```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/my-image.jpg';
---

<Image src={myImage} alt="描述" />
```

---

## 📦 部署

### 靜態部署（推薦）

建置後的 `dist/` 目錄可直接部署到：
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

```bash
npm run build
# 將 dist/ 目錄上傳到主機
```

### 環境變數

目前無需環境變數，所有設定在 `src/config/siteConfig.ts` 中管理。

---

## 🎯 技術亮點

1. **原生 JavaScript 動畫**：無需 GSAP，使用 Intersection Observer + CSS Transitions
2. **模組化元件**：每個區塊獨立元件，易於維護
3. **效能優化**：圖片自動優化、延遲載入、CSS 最小化
4. **無障礙設計**：語意化 HTML、鍵盤導航支援
5. **SEO 友善**：完整 Meta Tags、語意化結構

---

## 📞 支援

如需修改或擴展功能，請參考：
- [Astro 官方文件](https://docs.astro.build)
- [Astro Assets 指南](https://docs.astro.build/en/guides/images/)
- [Tailwind CSS 文件](https://tailwindcss.com/docs)

---

**版本**：1.0.0  
**建立日期**：2024-12-09  
**技術棧**：Astro 5.16.4 + Vite + Tailwind CSS
