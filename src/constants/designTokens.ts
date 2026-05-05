/* Design System Tokens */
export const designTokens = {
  green900: "#0D2B1F",
  green800: "#164233",
  green700: "#1E5C47",
  green600: "#27754C",
  green500: "#369962",
  green400: "#5AB882",
  green100: "#E6F4EE",
  green50: "#F2FAF5",
  white: "#FFFFFF",
  cream: "#FAFAF8",
  gray50: "#F7F8F7",
  gray100: "#EEF0ED",
  gray300: "#C8CCC7",
  gray500: "#7A8078",
  gray700: "#3D4039",
  gray900: "#1A1D19",
} as const;

export type DesignToken = typeof designTokens[keyof typeof designTokens];
