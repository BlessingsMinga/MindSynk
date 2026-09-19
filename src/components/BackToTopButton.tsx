import { useCallback, useEffect, useState } from "react";
import SlingButton from "@/components/react-bits/SlingButton";

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <SlingButton
        onSend={scrollToTop}
        ariaLabel="Back to top"
        padColor="#F15922"
        iconColor="#FFFFFF"
        accentColor="#F15922"
        wellColor="#1D1E32"
        bandColor="#4b4d6b"
        size={52}
      />
    </div>
  );
}
