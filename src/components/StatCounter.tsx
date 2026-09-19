import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  variant?: "onLight" | "onDark";
}

export function StatCounter({ value, suffix = "", label, variant = "onLight" }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(0);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 1500, bounce: 0 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <div ref={ref} className="text-center">
      <div
        className={cn(
          "text-5xl font-bold sm:text-6xl",
          variant === "onDark" ? "text-white" : "text-navy"
        )}
      >
        {display}
        <span className="text-orange">{suffix}</span>
      </div>
      <p className={cn("mt-2 text-sm font-medium", variant === "onDark" ? "text-white/60" : "text-navy/60")}>
        {label}
      </p>
    </div>
  );
}
