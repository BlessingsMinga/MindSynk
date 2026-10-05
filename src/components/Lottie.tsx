import { DotLottieReact, type DotLottieReactProps } from "@lottiefiles/dotlottie-react";

const ANIMATION_SRC = "https://lottie.host/4ecb791e-7b5c-4684-813a-c312c3d0c311/MngOODvTKa.lottie";

type LottieProps = DotLottieReactProps & {
  /** Accessible name announced by screen readers instead of the raw canvas. */
  ariaLabel?: string;
};

export function Lottie({
  src = ANIMATION_SRC,
  loop = true,
  autoplay = true,
  ariaLabel = "Animation",
  className,
  ...rest
}: LottieProps) {
  return (
    <DotLottieReact
      {...rest}
      src={src}
      loop={loop}
      autoplay={autoplay}
      className={className}
      role="img"
      aria-label={ariaLabel}
    />
  );
}