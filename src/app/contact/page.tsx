"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

const faqItems = [
  {
    q: "Is dit geschikt voor mijn kind?",
    a: "Onze trainingen zijn ontworpen voor jonge voetballers van alle niveaus die hun individuele vaardigheden willen verbeteren. Of je nu net begint of al jaren ervaring hebt, wij bieden gerichte begeleiding om het maximale uit elke speler te halen.",
  },
  {
    q: "Wat maakt deze trainingen anders dan een gewone clubtraining?",
    a: "Bij OKAcademy focussen we op persoonlijke aandacht en individuele ontwikkeling in kleine groepen. Dit betekent meer oefentijd, directere feedback en trainingen die specifiek zijn afgestemd op de behoeften van elke speler — in tegenstelling tot grotere clubtrainingen.",
  },
  {
    q: "Hoe ziet een training er precies uit?",
    a: "Een typische training omvat een warming-up, technische oefeningen (dribbelen, passen, schieten), tactische spelvormen, fysieke oefeningen en een afsluitend partijspel. Plezier en discipline staan hierbij centraal.",
  },
  {
    q: "Hoe groot zijn de groepen?",
    a: "We werken bewust met kleine groepen om optimale persoonlijke aandacht te garanderen. Dit zorgt voor effectievere trainingen en meer individuele begeleiding.",
  },
  {
    q: "Kan ik eerst een keer proberen?",
    a: "Ja, we bieden de mogelijkheid voor een proeftraining zodat je zelf kunt ervaren hoe onze trainingen eruitzien en of het bij je past. Neem contact met ons op om een afspraak te maken.",
  },
  {
    q: "Waar vinden de trainingen plaats?",
    a: "De trainingen vinden plaats in de omgeving van Vleuten. Het exacte trainingsveld delen we bij de aanmelding. Neem contact met ons op voor meer informatie.",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    naam: "",
    email: "",
    telefoon: "",
    bericht: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#0f0f0f] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-[#D62626] uppercase tracking-widest mb-4">
              Contact
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Neem contact op
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Heb je vragen of wil je meer weten over onze trainingen? We staan klaar om
              al jouw vragen te beantwoorden. Neem gerust contact op.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact Info + Form ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Contactgegevens</h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-[#D62626]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Adres</p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Europaweg 52<br />3451HG, Vleuten
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-[#D62626]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Telefoon</p>
                    <a
                      href="tel:+31640727145"
                      className="text-gray-500 hover:text-[#D62626] text-sm transition-colors"
                    >
                      +31 6 40727145
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-[#D62626]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">E-mail</p>
                    <a
                      href="mailto:OKAcademy2026@gmail.com"
                      className="text-gray-500 hover:text-[#D62626] text-sm transition-colors"
                    >
                      OKAcademy2026@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <p className="font-semibold text-gray-900 mb-4">Volg ons op social media</p>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/olekoningacademy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 rounded-xl text-gray-600 hover:bg-[#D62626] hover:text-white transition-all text-sm font-medium"
                  >
                    <InstagramIcon size={16} />
                    Instagram
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=31640727145"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 rounded-xl text-gray-600 hover:bg-[#D62626] hover:text-white transition-all text-sm font-medium"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="mt-8 p-5 bg-[#D62626]/5 rounded-xl border border-[#D62626]/20">
                <p className="font-semibold text-gray-900 mb-2 text-sm">Liever direct aanmelden?</p>
                <p className="text-gray-500 text-sm mb-3">
                  Plan een (proef)training via het aanmeldformulier.
                </p>
                <Link
                  href="/aanmelden"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D62626]"
                >
                  Naar aanmeldformulier →
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-gray-50 rounded-2xl p-8 sm:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Bericht verzonden!</h3>
                    <p className="text-gray-500 max-w-sm leading-relaxed">
                      Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Stuur ons een bericht
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="naam">
                            Naam <span className="text-[#D62626]">*</span>
                          </label>
                          <input
                            id="naam"
                            type="text"
                            required
                            value={form.naam}
                            onChange={(e) => setForm({ ...form, naam: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D62626]/30 focus:border-[#D62626] transition-colors text-sm"
                            placeholder="Jouw naam"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="telefoon">
                            Telefoon
                          </label>
                          <input
                            id="telefoon"
                            type="tel"
                            value={form.telefoon}
                            onChange={(e) => setForm({ ...form, telefoon: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D62626]/30 focus:border-[#D62626] transition-colors text-sm"
                            placeholder="+31 6 ..."
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">
                          E-mailadres <span className="text-[#D62626]">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D62626]/30 focus:border-[#D62626] transition-colors text-sm"
                          placeholder="jouw@email.nl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="bericht">
                          Bericht <span className="text-[#D62626]">*</span>
                        </label>
                        <textarea
                          id="bericht"
                          required
                          rows={5}
                          value={form.bericht}
                          onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D62626]/30 focus:border-[#D62626] transition-colors text-sm resize-none"
                          placeholder="Jouw vraag of opmerking..."
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 font-bold text-white bg-[#D62626] rounded-xl hover:bg-[#B71C1C] disabled:opacity-60 transition-all"
                      >
                        {loading ? (
                          <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <Send size={17} />
                            Bericht verzenden
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-[#D62626] uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Veelgestelde vragen</h2>
            <p className="text-gray-500">
              Staat jouw vraag er niet bij? Neem dan direct contact met ons op.
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="bg-white rounded-2xl border border-gray-100 group overflow-hidden"
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer font-semibold text-gray-900 list-none">
                  <span>{item.q}</span>
                  <span className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-[#D62626] text-lg font-bold flex-shrink-0 ml-4 group-open:bg-[#D62626] group-open:text-white transition-all">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
