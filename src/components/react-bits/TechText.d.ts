// Types for TechText.jsx (an imperative canvas effect kept in JS); TypeScript resolves this file for imports of "./TechText".
import type { CSSProperties, FC } from "react";

export interface TechTextProps {
  text?: string;
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: number;
  letterSpacing?: number;
  color?: string;
  accentColor?: string;
  reach?: number;
  softness?: number;
  dashLength?: number;
  dashGap?: number;
  strokeWidth?: number;
  lineStyle?: "dashed" | "solid";
  reveal?: "letter" | "area";
  specks?: number;
  selection?: boolean;
  labels?: boolean;
  draggable?: boolean;
  sweep?: boolean;
  speed?: number;
  className?: string;
  style?: CSSProperties;
}

declare const TechText: FC<TechTextProps>;
export default TechText;
