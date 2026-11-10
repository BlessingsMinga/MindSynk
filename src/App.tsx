import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { BackToTopButton } from "@/components/BackToTopButton";
import Home from "@/pages/Home";

// Home is the main landing page, so it ships in the entry bundle; other routes load on demand.
const Services = lazy(() => import("@/pages/Services"));
const Pricing = lazy(() => import("@/pages/Pricing"));
const Work = lazy(() => import("@/pages/Work"));
const CaseStudy = lazy(() => import("@/pages/CaseStudy"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const NeonCursor = lazy(() => import("@/components/react-bits/NeonCursor"));

// The neon cursor only makes sense with a precise pointer and motion enabled, so touch devices never download it.
const NEON_CURSOR_QUERY = "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

function RouteFallback() {
  return <div className="min-h-screen bg-navy" aria-busy="true" />;
}

/** Routes and global chrome. The router itself is supplied by main.tsx (browser) or entry-server.tsx (prerender). */
function App() {
  // Decided after mount so the prerendered HTML and the first client render match.
  const [showNeonCursor, setShowNeonCursor] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reading a media query is browser-only
    setShowNeonCursor(window.matchMedia(NEON_CURSOR_QUERY).matches);
  }, []);

  return (
    <>
      <ScrollToTop />
      {showNeonCursor && (
        <Suspense fallback={null}>
          <NeonCursor />
        </Suspense>
      )}
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <BackToTopButton />
    </>
  );
}

export default App;
