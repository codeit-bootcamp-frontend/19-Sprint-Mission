export const theme = {
  // 브레이크포인트 정의
  device : {
    mobile: `(max-width: 768px)`,
    tablet: `(max-width: 1024px)`,
    desktop: `(min-width: 1025px)`,
  },

  colors : {
    // 그레이 스케일
    gray50: "#F9FAFB",
    gray100: "#F3F4F6",
    gray200: "#E5E7EB",
    gray400: "#9CA3AF",
    gray500: "#6B7280",
    gray600: "#4B5563",
    gray700: "#374151",
    gray800: "#1F2937",
    gray900: "#111827",

    // 기본 색상
    background: "#FCFCFC",
    text: "#333333",

    // 브랜드 색상
    primary100: "#3692FF",
    primary200: "#1967D6",
    primary300: "#1251AA",
  },

  typography : {
    // Text-3xl (32px)
    text3xl: {
      bold: {
        fontFamily: "Pretendard",
        fontSize: "32px",
        lineHeight: "42px",
        fontWeight: "700",
      },
      semibold: {
        fontFamily: "Pretendard",
        fontSize: "32px",
        lineHeight: "42px",
        fontWeight: "600",
      },
    },

    // Text-2xl (24px)
    text2xl: {
      bold: {
        fontFamily: "Pretendard",
        fontSize: "24px",
        lineHeight: "32px",
        fontWeight: "700",
      },
      semibold: {
        fontFamily: "Pretendard",
        fontSize: "24px",
        lineHeight: "32px",
        fontWeight: "600",
      },
      medium: {
        fontFamily: "Pretendard",
        fontSize: "24px",
        lineHeight: "32px",
        fontWeight: "500",
      },
      regular: {
        fontFamily: "Pretendard",
        fontSize: "24px",
        lineHeight: "32px",
        fontWeight: "400",
      },
    },

    // Text-xl (20px)
    textXl: {
      bold: {
        fontFamily: "Pretendard",
        fontSize: "20px",
        lineHeight: "32px",
        fontWeight: "700",
      },
      semibold: {
        fontFamily: "Pretendard",
        fontSize: "20px",
        lineHeight: "32px",
        fontWeight: "600",
      },
      medium: {
        fontFamily: "Pretendard",
        fontSize: "20px",
        lineHeight: "32px",
        fontWeight: "500",
      },
      regular: {
        fontFamily: "Pretendard",
        fontSize: "20px",
        lineHeight: "32px",
        fontWeight: "400",
      },
    },

    // Text-2lg (18px)
    text2lg: {
      bold: {
        fontFamily: "Pretendard",
        fontSize: "18px",
        lineHeight: "26px",
        fontWeight: "700",
      },
      semibold: {
        fontFamily: "Pretendard",
        fontSize: "18px",
        lineHeight: "26px",
        fontWeight: "600",
      },
      medium: {
        fontFamily: "Pretendard",
        fontSize: "18px",
        lineHeight: "26px",
        fontWeight: "500",
      },
      regular: {
        fontFamily: "Pretendard",
        fontSize: "18px",
        lineHeight: "26px",
        fontWeight: "400",
      },
    },

    // Text-lg (16px)
    textLg: {
      bold: {
        fontFamily: "Pretendard",
        fontSize: "16px",
        lineHeight: "26px",
        fontWeight: "700",
      },
      semibold: {
        fontFamily: "Pretendard",
        fontSize: "16px",
        lineHeight: "26px",
        fontWeight: "600",
      },
      medium: {
        fontFamily: "Pretendard",
        fontSize: "16px",
        lineHeight: "26px",
        fontWeight: "500",
      },
      regular: {
        fontFamily: "Pretendard",
        fontSize: "16px",
        lineHeight: "26px",
        fontWeight: "400",
      },
    },

    // Text-md (14px)
    textMd: {
      bold: {
        fontFamily: "Pretendard",
        fontSize: "14px",
        lineHeight: "24px",
        fontWeight: "700",
      },
      semibold: {
        fontFamily: "Pretendard",
        fontSize: "14px",
        lineHeight: "24px",
        fontWeight: "600",
      },
      medium: {
        fontFamily: "Pretendard",
        fontSize: "14px",
        lineHeight: "24px",
        fontWeight: "500",
      },
      regular: {
        fontFamily: "Pretendard",
        fontSize: "14px",
        lineHeight: "24px",
        fontWeight: "400",
      },
    },

    // Text-sm (13px)
    textSm: {
      semibold: {
        fontFamily: "Pretendard",
        fontSize: "13px",
        lineHeight: "22px",
        fontWeight: "600",
      },
      medium: {
        fontFamily: "Pretendard",
        fontSize: "13px",
        lineHeight: "22px",
        fontWeight: "500",
      },
    },

    // Text-xs (12px)
    textXs: {
      semibold: {
        fontFamily: "Pretendard",
        fontSize: "12px",
        lineHeight: "20px",
        fontWeight: "600",
      },
      medium: {
        fontFamily: "Pretendard",
        fontSize: "12px",
        lineHeight: "18px",
        fontWeight: "500",
      },
      regular: {
        fontFamily: "Pretendard",
        fontSize: "12px",
        lineHeight: "18px",
        fontWeight: "400",
      },
    },
  }
} as const; // 리터럴/readonly 고정

// theme에서 타입 자동 추론
export type AppTheme = typeof theme;
