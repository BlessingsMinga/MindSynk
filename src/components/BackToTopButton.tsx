import { useCallback, useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, WhatsappIcon } from "@hugeicons/core-free-icons";
import SlingButton from "@/components/react-bits/SlingButton";

const WHATSAPP_NUMBER = "265992092766";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi MindSynk, I'd like to talk about a project."
)}`;
const BUBBLE_MS = 6000;

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const [bubbleOpen, setBubbleOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Pop the quick message once the buttons appear, then tuck it away after a few seconds
  useEffect(() => {
    if (!visible || dismissed) {
      setBubbleOpen(false);
      return;
    }
    setBubbleOpen(true);
    const timer = setTimeout(() => setBubbleOpen(false), BUBBLE_MS);
    return () => clearTimeout(timer);
  }, [visible, dismissed]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const showBubble = visible && (bubbleOpen || hovered);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          role="status"
          className={`absolute bottom-2 right-full mr-3 w-60 origin-bottom-right rounded-2xl rounded-br-sm bg-white p-4 pr-8 text-sm text-navy shadow-xl shadow-black/10 ring-1 ring-navy/10 transition-all duration-200 ${
            showBubble ? "scale-100 opacity-100" : "pointer-events-none scale-90 opacity-0"
          }`}
        >
          <button
            type="button"
            onClick={() => {
              setDismissed(true);
              setHovered(false);
            }}
            aria-label="Dismiss message"
            className="absolute right-2 top-2 rounded-full p-1 text-navy/50 transition-colors hover:bg-navy/5 hover:text-navy"
          >
            <HugeiconsIcon icon={Cancel01Icon} size={14} />
          </button>
          <p className="font-semibold">Hi there 👋</p>
          <p className="mt-1 text-navy/70">Have a project in mind? Chat with us on WhatsApp.</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block font-semibold text-[#128C7E] hover:underline"
          >
            Start chat →
          </a>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
        >
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
          <HugeiconsIcon icon={WhatsappIcon} size={28} strokeWidth={1.8} />
        </a>
      </div>
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
