import { Link } from "react-router-dom";
import logoFull from "@/assets/logo-full.png";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logoFull} alt="MindSynk Technology" className="h-8 w-auto brightness-0 invert" />
            <p className="mt-4 text-sm text-white/60">
              A Malawian ICT partnership powering progress through technology.
            </p>
            <p className="mt-4 text-xs text-white/40">Registered in Malawi · BRN-L5SB7RNK</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">Explore</h4>
            <ul className="mt-2 space-y-0 text-sm text-white/60">
              <li><Link to="/about" className="inline-block py-2 hover:text-white">About</Link></li>
              <li><Link to="/work" className="inline-block py-2 hover:text-white">Work</Link></li>
              <li><Link to="/pricing" className="inline-block py-2 hover:text-white">Pricing</Link></li>
              <li><Link to="/contact" className="inline-block py-2 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">Services</h4>
            <ul className="mt-2 space-y-0 text-sm text-white/60">
              <li><Link to="/services" className="inline-block py-2 hover:text-white">Software & Mobile Development</Link></li>
              <li><Link to="/services" className="inline-block py-2 hover:text-white">E-commerce & Commerce</Link></li>
              <li><Link to="/services" className="inline-block py-2 hover:text-white">IT Consultancy & Networking</Link></li>
              <li><Link to="/services" className="inline-block py-2 hover:text-white">Cybersecurity Awareness Training</Link></li>
              <li><Link to="/services" className="inline-block py-2 hover:text-white">Digital Marketing & Social Media</Link></li>
              <li><Link to="/services" className="inline-block py-2 hover:text-white">Graphic Design, Branding & UI/UX</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">Get in touch</h4>
            <ul className="mt-2 space-y-0 text-sm text-white/60">
              {/* TODO: replace with real MindSynk contact details */}
              <li>
                <a href="mailto:hello@mindsynk.tech" className="inline-block py-2 hover:text-white">hello@mindsynk.tech</a>
              </li>
              {/* TODO: replace with real MindSynk contact details */}
              <li>
                <a href="tel:+265992092766" className="inline-block py-2 hover:text-white">+265 99 209 2766</a>
              </li>
              {/* TODO: replace with real MindSynk address */}
              <li>Lilongwe, Malawi</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} MindSynk Technologies. All rights reserved.</p>
          <p className="font-medium text-white/60">Powering Progress Through Technology</p>
        </div>
      </div>
    </footer>
  );
}
