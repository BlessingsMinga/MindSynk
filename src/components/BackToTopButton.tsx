import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MessageCircle, X } from "lucide-react";
import SlingButton from "@/components/react-bits/SlingButton";

const WHATSAPP_NUMBER = "265992092766";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi MindSynk, I'd like to talk about a project."
)}`;
const BUBBLE_MS = 6000;

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  // The welcome bubble shows each time the buttons appear, until it times out or is dismissed
  const [bubbleExpired, setBubbleExpired] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const pastFold = window.scrollY > 400;
      setVisible(pastFold);
      if (!pastFold) setBubbleExpired(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!visible || dismissed) return;
    const timer = setTimeout(() => setBubbleExpired(true), BUBBLE_MS);
    return () => clearTimeout(timer);
  }, [visible, dismissed]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const showBubble = visible && ((!dismissed && !bubbleExpired) || hovered);

  // The contact page already has its own form and WhatsApp link, so the floating widgets only get in the way there.
  if (pathname === "/contact") return null;

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 flex flex-col items-center gap-2 sm:bottom-6 sm:right-6 sm:gap-3 transition-all duration-300 ${
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
          className={`absolute bottom-2 right-full mr-3 hidden w-60 origin-bottom-right sm:block rounded-2xl rounded-br-sm bg-white p-4 pr-8 text-sm text-navy shadow-xl shadow-black/10 ring-1 ring-navy/10 transition-all duration-200 ${
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
            <X size={14} />
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
          <span className="absolute inset-0 -z-10 hidden animate-ping rounded-full bg-[#25D366]/40 sm:block" />
          <MessageCircle size={28} strokeWidth={1.8} />
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
