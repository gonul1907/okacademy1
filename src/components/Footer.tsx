import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

function InstagramIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export default function Footer() {
  const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/over-ons", label: "Over ons" },
    { href: "/trainers", label: "Trainers" },
    { href: "/trainingen", label: "Trainingen" },
    { href: "/tarieven", label: "Tarieven" },
    { href: "/fotoalbum", label: "Fotoalbum" },
    { href: "/aanmelden", label: "Aanmelden" },
  ];

  return (
    <footer className="bg-[#0f0f0f] text-gray-300">
      {/* ── Partners ── */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-center text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">
            Onze partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {[
              {
                src: "https://primary.jwwb.nl/public/m/z/t/temp-padguskjejeujijcvqit/image-high-uogqjp.png",
                alt: "Partner OKAcademy",
              },
              {
                src: "https://primary.jwwb.nl/public/m/z/t/temp-padguskjejeujijcvqit/bodyproof_logo_logo-cirkel-onderzin-tekst-wit-standard-w3d9rp.png",
                alt: "BodyProof",
              },
              {
                src: "https://primary.jwwb.nl/public/m/z/t/temp-padguskjejeujijcvqit/scherm-afbeelding-2026-03-25-om-11-22-18-standard.png",
                alt: "Partner OKAcademy",
              },
              {
                src: "https://primary.jwwb.nl/public/m/z/t/temp-padguskjejeujijcvqit/scherm-afbeelding-2026-05-04-om-13-53-00-standard-2ki0jh.png",
                alt: "Partner OKAcademy",
              },
            ].map((partner) => (
              <div key={partner.src} className="relative h-12 w-32">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  sizes="128px"
                  className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="https://primary.jwwb.nl/public/m/z/t/temp-padguskjejeujijcvqit/scherm-afbeelding-2026-03-17-om-11-10-19-high.png"
              alt="OKAcademy"
              width={180}
              height={72}
              className="h-14 w-auto object-contain mb-5"
            />
            <p className="text-gray-400 leading-relaxed max-w-sm mb-6 text-sm">
              OKAcademy helpt jonge voetballers hun volledige potentieel te bereiken.
              Persoonlijke begeleiding, kleine groepen en meetbare groei in techniek,
              tactiek en zelfvertrouwen.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/olekoningacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-gray-800 rounded-lg hover:bg-[#D62626] transition-colors"
                aria-label="Volg OKAcademy op Instagram"
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=31640727145"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-gray-800 rounded-lg hover:bg-[#D62626] transition-colors"
                aria-label="Stuur een WhatsApp bericht"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@okacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-gray-800 rounded-lg hover:bg-[#D62626] transition-colors"
                aria-label="Volg OKAcademy op TikTok"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.53V6.78a4.85 4.85 0 01-1.02-.09z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Navigatie</h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#D62626] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Europaweg 52<br />3451HG, Vleuten
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#D62626] flex-shrink-0" />
                <a
                  href="tel:+31640727145"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  +31 6 40727145
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[#D62626] flex-shrink-0" />
                <a
                  href="mailto:OKAcademy2026@gmail.com"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  OKAcademy2026@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-5 pt-5 border-t border-gray-800">
              <p className="text-gray-600 text-xs">KvK: 99997118</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 OKAcademy. Alle rechten voorbehouden.
          </p>
          <Link
            href="/aanmelden"
            className="text-sm font-semibold text-[#D62626] hover:text-[#E53535] transition-colors"
          >
            Plan een proeftraining →
          </Link>
        </div>
      </div>
    </footer>
  );
}
