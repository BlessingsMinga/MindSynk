import CardNav, { type CardNavItem } from "@/components/react-bits/CardNav";
import logoFull from "@/assets/logo-full.png";

const menuItems: CardNavItem[] = [
  { label: "What we do", links: [{ label: "Services", to: "/services", description: "Digital solutions" }] },
  { label: "Explore", links: [{ label: "Our work", to: "/work", description: "Selected projects" }, { label: "Pricing", to: "/pricing", description: "Plans and packages" }] },
  { label: "Meet MindSynk", links: [{ label: "About us", to: "/about", description: "Our story" }, { label: "Contact", to: "/contact", description: "Start a conversation" }] },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-[76px] px-3 pt-3 sm:px-4">
      <div className="mx-auto max-w-6xl">
        <CardNav logo={logoFull} logoAlt="MindSynk Technology" items={menuItems} />
      </div>
    </header>
  );
}
