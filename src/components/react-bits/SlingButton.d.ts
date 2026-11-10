// Types for SlingButton.jsx (an imperative gesture component kept in JS); TypeScript resolves this file for imports of "./SlingButton".
import type { ReactNode } from "react";

export interface SlingButtonProps {
  children?: ReactNode;
  onSend?: () => void;
  padColor?: string;
  iconColor?: string;
  accentColor?: string;
  wellColor?: string;
  bandColor?: string;
  size?: number;
  strokeWidth?: number;
  armAt?: number;
  maxPull?: number;
  launchSpeed?: number;
  recoil?: number;
  flight?: number;
  axis?: "any" | "horizontal" | "vertical";
  tapSends?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
}

export default function SlingButton(props: SlingButtonProps): ReactNode;
