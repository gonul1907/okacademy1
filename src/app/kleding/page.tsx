import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Kleding – Officiële OK Academy tenue | OKAcademy",
  description:
    "Bestel officiële OK Academy-kleding. Shirts, broekjes, sokken, truien en complete paketten voorzien van het OK Academy-logo.",
};

const losse = [
  { naam: "Shirt", prijs: "€29,95", img: "/shirt.jpeg" },
  { naam: "Broekje", prijs: "€24,95", img: "/korte-broek.jpeg" },
  { naam: "Lange broek", prijs: "€40,95", img: "/broek.jpeg" },
  { naam: "Sokken", prijs: "€12,95", img: "/sokken.jpeg" },
  { naam: "Trui", prijs: "€44,95", img: "/vest.jpeg" },
];

const pakketten = [
  {
    naam: "Tenuepakket",
    inhoud: "Shirt + broekje + sokken",
    prijs: "€59,95",
    items: ["Shirt", "Broekje", "Sokken"],
    besparing: "Bespaar €7,90",
    highlight: false,
  },
  {
    naam: "Trainingspakket",
    inhoud: "Trui + lange broek",
    prijs: "€79,95",
    items: ["Trui", "Lange broek"],
    besparing: "Bespaar €5,95",
    highlight: false,
  },
  {
    naam: "Complete OK Academy-set",
    inhoud: "Shirt + broekje + sokken + trui + lange broek",
    prijs: "€134,95",
    items: ["Shirt", "Broekje", "Sokken", "Trui", "Lange broek"],
    besparing: "Bespaar €18,70",
    highlight: true,
  },
];

export default function KledingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#0f0f0f] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-[#D62626] uppercase tracking-widest mb-4">
              Officiële kleding
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Draag de kleuren van OKAcademy
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Aanschaffen is niet verplicht, maar trainen in het officiële tenue geeft
              extra trots op het veld. Alle kleding is voorzien van het OK Academy-logo.
            </p>
          </div>
        </div>
      </section>

      {/* ── Losse artikelen ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Losse artikelen</h2>
            <p className="text-gray-500">Stel zelf jouw combinatie samen.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {losse.map((artikel) => (
              <div
                key={artikel.naam}
                className="flex flex-col items-center gap-3 bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#D62626] transition-colors group overflow-hidden"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={artikel.img}
                    alt={artikel.naam}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover"
                  />
                </div>
                <div className="px-4 pb-5 text-center">
                  <span className="text-sm font-semibold text-gray-900 block">{artikel.naam}</span>
                  <span className="text-xl font-bold text-gray-900">{artikel.prijs}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pakketten ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Voordelige pakketten</h2>
            <p className="text-gray-500">Kies een pakket en bespaar direct.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pakketten.map((pakket) => (
              <div
                key={pakket.naam}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  pakket.highlight
                    ? "bg-[#0f0f0f] shadow-2xl shadow-black/30 md:-translate-y-3"
                    : "bg-white border border-gray-200"
                }`}
              >
                {pakket.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-[#D62626] text-white text-xs font-bold rounded-full uppercase tracking-wider whitespace-nowrap">
                    Meeste waarde
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`text-xl font-bold mb-1 ${
                      pakket.highlight ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {pakket.naam}
                  </h3>
                  <p className={`text-xs uppercase tracking-wider ${pakket.highlight ? "text-gray-400" : "text-gray-400"}`}>
                    {pakket.inhoud}
                  </p>
                </div>

                <div className="mb-6">
                  <span
                    className={`text-5xl font-bold ${
                      pakket.highlight ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {pakket.prijs}
                  </span>
                  <p className={`text-sm mt-1 font-semibold ${pakket.highlight ? "text-[#D62626]" : "text-green-600"}`}>
                    {pakket.besparing}
                  </p>
                </div>

                <ul className="space-y-2.5 mb-8 flex-grow">
                  {pakket.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <CheckCircle
                        size={15}
                        className={pakket.highlight ? "text-[#D62626]" : "text-green-500"}
                      />
                      <span
                        className={`text-sm ${
                          pakket.highlight ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold transition-all ${
                    pakket.highlight
                      ? "bg-[#D62626] text-white hover:bg-[#B71C1C]"
                      : "bg-white text-gray-900 border border-gray-200 hover:border-[#D62626] hover:text-[#D62626]"
                  }`}
                >
                  Bestel via contact
                  <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Note ── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm leading-relaxed">
            Aanschaffen van kleding is <strong className="text-gray-700">niet verplicht</strong>.
            Alle kleding wordt voorzien van het officiële OK Academy-logo.
            Neem contact op via WhatsApp of het contactformulier om een bestelling te plaatsen.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-6 px-8 py-4 font-bold text-white bg-[#D62626] rounded-xl hover:bg-[#B71C1C] transition-colors"
          >
            Neem contact op
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
