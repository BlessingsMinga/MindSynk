import { useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import "./CardNav.css";

export type CardNavItem = {
  label: string;
  links: Array<{ label: string; to: string; description?: string }>;
  className?: string;
};

type CardNavProps = { logo: string; logoAlt: string; items: CardNavItem[] };

export default function CardNav({ logo, logoAlt, items }: CardNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const { pathname } = useLocation();
  const menuHeight = () => (window.matchMedia("(max-width: 700px)").matches ? 414 : 272);
  const createTimeline = () => {
    const nav = navRef.current;
    if (!nav) return null;
    gsap.set(nav, { height: 64, overflow: "hidden" });
    gsap.set(cardsRef.current.filter(Boolean), { y: 28, opacity: 0 });
    return gsap.timeline({ paused: true })
      .to(nav, { height: menuHeight, duration: 0.45, ease: "power3.out" })
      .to(cardsRef.current.filter(Boolean), { y: 0, opacity: 1, duration: 0.35, stagger: 0.07, ease: "power3.out" }, "-=0.16");
  };

  useLayoutEffect(() => {
    timelineRef.current = createTimeline();
    return () => {
      timelineRef.current?.kill();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useLayoutEffect(() => {
    const onResize = () => { timelineRef.current?.kill(); timelineRef.current = createTimeline(); if (isOpen) timelineRef.current?.progress(1); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isOpen]);
  const toggle = () => {
    const timeline = timelineRef.current;
    if (!timeline) return;
    if (isOpen) timeline.reverse(); else timeline.play(0);
    setIsOpen((open) => !open);
  };
  const close = () => { if (isOpen) { timelineRef.current?.reverse(); setIsOpen(false); } };

  return <nav ref={navRef} className={cn("card-nav", isOpen && "card-nav--open")} aria-label="Main navigation">
    <div className="card-nav__bar">
      <button type="button" className="card-nav__toggle" onClick={toggle} aria-expanded={isOpen} aria-label={isOpen ? "Close menu" : "Open menu"}><span /><span /></button>
      <Link to="/" className="card-nav__logo" onClick={close}><img src={logo} alt={logoAlt} /></Link>
      <Link to="/contact" className="card-nav__cta" onClick={close}>Get a Quote</Link>
    </div>
    <div className="card-nav__content" aria-hidden={!isOpen}>
      {items.slice(0, 3).map((item, index) => <div key={item.label} ref={(element) => { cardsRef.current[index] = element; }} className={cn("card-nav__card", item.className)}>
        <p className="card-nav__label">{item.label}</p>
        <div className="card-nav__links">{item.links.map((link) => {
          const active = pathname === link.to || (link.to !== "/" && pathname.startsWith(`${link.to}/`));
          return <Link key={link.to} to={link.to} onClick={close} className={cn("card-nav__link", active && "card-nav__link--active")}><ArrowUpRight aria-hidden="true" /><span>{link.label}</span>{link.description && <small>{link.description}</small>}</Link>;
        })}</div>
      </div>)}
    </div>
  </nav>;
}
