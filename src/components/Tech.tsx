import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const TECH_ANIMATION_SRC = "https://lottie.host/10ed9b6b-3df8-48b8-8500-bad746fcbc3c/pXa82VXJrX.lottie";

type TechProps = {
  className?: string;
};

export function Tech({ className }: TechProps) {
  return <DotLottieReact src={TECH_ANIMATION_SRC} loop autoplay className={className} />;
}
