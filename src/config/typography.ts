/**
 * 全域字型配置
 * Typography Configuration
 * 
 * 在此統一管理全站字型設定，修改此檔案即可影響整個網站的字體呈現
 */

export const typography = {
  // 主標題字型 - 優雅襯線體
  heading: {
    fontFamily: "'Cormorant Garamond', 'Playfair Display', 'Noto Serif TC', serif",
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    }
  },
  
  // 內文字型 - 易讀襯線體
  body: {
    fontFamily: "'Crimson Pro', 'Noto Serif TC', serif",
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
    }
  },
  
  // 裝飾性字型 - 用於特殊標題或引言
  display: {
    fontFamily: "'Bodoni Moda', 'Cormorant Garamond', serif",
    weights: {
      regular: 400,
      medium: 500,
      bold: 700,
    }
  },
  
  // 輔助字型 - 用於按鈕、標籤等
  accent: {
    fontFamily: "'Montserrat', 'Noto Sans TC', sans-serif",
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
    }
  }
} as const;

// Google Fonts 載入 URL
export const fontImportUrl = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Crimson+Pro:wght@300;400;500;600&family=Bodoni+Moda:wght@400;500;700&family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&family=Noto+Serif+TC:wght@300;400;500;600;700&family=Noto+Sans+TC:wght@300;400;500;600&display=swap";
