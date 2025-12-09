# 🚀 快速開始指南

## 立即預覽

**線上預覽**：https://4321-ikbdd3orxx616z3zkucal-82a1d21f.manus-asia.computer

---

## 本地開發

### 1. 安裝依賴

```bash
npm install
```

### 2. 啟動開發伺服器

```bash
npm run dev
```

瀏覽器開啟：http://localhost:4321

### 3. 建置生產版本

```bash
npm run build
```

---

## 🎯 三大核心需求實現

### ✅ 1. 選單結構

**位置**：`src/components/Navigation.astro`

導覽列已預留四個連結：
- 關於 (#about)
- 產品 (#products)
- 服務 (#services)
- 聯絡 (#contact)

**修改方式**：
直接編輯 `Navigation.astro` 中的 `<ul>` 列表即可新增或修改連結。

---

### ✅ 2. 全域字型控制

**一個檔案控制全站字型**：

**主要配置檔**：`src/config/typography.ts`
```typescript
export const typography = {
  heading: {
    fontFamily: "'Cormorant Garamond', 'Playfair Display', 'Noto Serif TC', serif",
  },
  body: {
    fontFamily: "'Crimson Pro', 'Noto Serif TC', serif",
  }
}
```

**CSS 變數映射**：`src/styles/global.css`
```css
:root {
  --font-heading: 'Cormorant Garamond', ...;
  --font-body: 'Crimson Pro', ...;
}
```

**修改流程**：
1. 編輯 `typography.ts` 中的字型定義
2. 更新 `global.css` 中對應的 CSS 變數
3. （可選）更新 `Layout.astro` 中的 Google Fonts 連結

整個網站的字體會立即更新！

---

### ✅ 3. 圖片自動優化

**Astro Assets 已完整整合**

**使用方式**：
1. 將圖片放入 `src/assets/` 目錄
2. 在元件中 import 並使用：

```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/my-image.jpg';
---

<Image 
  src={myImage} 
  alt="描述" 
  quality={85}
/>
```

**自動優化效果**：
- ✅ 自動轉換為 WebP 格式
- ✅ 響應式尺寸調整
- ✅ 延遲載入（lazy loading）
- ✅ 壓縮優化（平均減少 20-40% 檔案大小）

**驗證方式**：
執行 `npm run build`，查看輸出訊息：
```
generating optimized images 
  ▶ /_astro/perfume-splash.DYtLx5JL_Z2vzhVF.webp (before: 36kB, after: 30kB)
```

---

## 🎨 視覺特色

### Scrollytelling（滾動敘事）
- Hero 區塊視差效果
- 產品區滾動觸發動畫
- 平滑的元素淡入效果

### 玻璃光影效果
- 導覽列玻璃模糊背景
- 玻璃卡片設計
- 流動的玻璃球體裝飾

### 流體動畫
- 浮動動畫（float）
- 波紋擴散效果（ripple）
- 光澤移動效果（shimmer）

### 襯線字體系統
- **標題**：Cormorant Garamond（優雅輕盈）
- **內文**：Crimson Pro（易讀舒適）
- **裝飾**：Bodoni Moda（奢華感）
- **輔助**：Montserrat（現代簡潔）

---

## 📂 關鍵檔案

| 檔案 | 用途 |
|------|------|
| `src/pages/index.astro` | 首頁主檔案 |
| `src/components/Navigation.astro` | 導覽列 |
| `src/components/HeroScrollytelling.astro` | Hero 區塊 |
| `src/components/ProductShowcase.astro` | 產品展示 |
| `src/components/GlassFluidSection.astro` | 玻璃流體區塊 |
| `src/config/typography.ts` | 字型配置 |
| `src/styles/global.css` | 全域樣式 |
| `src/layouts/Layout.astro` | 主佈局 |

---

## 🔧 常見修改

### 更換 Logo
編輯 `src/components/Navigation.astro`：
```astro
<a href="/" class="logo">
  <span class="text-display">您的品牌名稱</span>
</a>
```

### 修改色彩
編輯 `src/styles/global.css` 中的 CSS 變數：
```css
:root {
  --color-accent: #d4af37; /* 改成您想要的顏色 */
}
```

### 新增產品
編輯 `src/components/ProductShowcase.astro`，複製產品卡片區塊並修改內容。

### 更新聯絡資訊
編輯 `src/pages/index.astro` 中的 Contact Section。

---

## 📦 部署建議

### Vercel（推薦）
```bash
npm run build
# 連接 GitHub repo 到 Vercel，自動部署
```

### Netlify
```bash
npm run build
# 上傳 dist/ 目錄到 Netlify
```

### GitHub Pages
```bash
npm run build
# 將 dist/ 內容推送到 gh-pages 分支
```

---

## 💡 效能優化

✅ 已實現：
- 圖片自動優化為 WebP
- CSS 最小化
- JavaScript 延遲載入
- 字型預載入（preconnect）
- 滾動動畫使用 Intersection Observer（高效能）

---

## 📞 技術支援

- **Astro 文件**：https://docs.astro.build
- **Tailwind CSS**：https://tailwindcss.com/docs
- **專案文件**：查看 `PROJECT_GUIDE.md`

---

**祝您使用愉快！🎉**
