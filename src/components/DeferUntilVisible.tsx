import { Suspense, useEffect, useRef, useState, type ReactNode } from "react";

interface DeferUntilVisibleProps {
  children: ReactNode;
  /** Reserves space before the content mounts so the layout doesn't jump. */
  className?: string;
  /** How far ahead of the viewport to start loading. */
  rootMargin?: string;
}

/**
 * Mounts its children (typically React.lazy components) only once the placeholder
 * nears the viewport, so heavy below-the-fold code is never downloaded on first load.
 */
export function DeferUntilVisible({ children, className, rootMargin = "400px" }: DeferUntilVisibleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, visible]);

  return (
    <div ref={ref} className={className}>
      {visible && <Suspense fallback={null}>{children}</Suspense>}
    </div>
  );
}
