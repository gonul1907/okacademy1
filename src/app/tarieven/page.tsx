import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Tarieven – Transparante prijzen voor alle trainingen | OKAcademy",
  description:
    "Bekijk de tarieven van OKAcademy. Privétraining, duo training en small group voor elk budget. Investeer in jouw voetbalontwikkeling.",
};

const pakketten = [
  {
    name: "Small Group",
    prijs: "€ 100,-",
    per: "per persoon",
    sessies: "5 sessies",
    highlight: false,
    beschrijving:
      "De meest toegankelijke optie. Train in een kleine groep van vergelijkbaar niveau en profiteer van groepsdynamiek en wedstrijdvormen.",
    inbegrepen: [
      "5 gestructureerde trainingen",
      "Kleine groep, veel balcontact",
      "Groepsvormen en wedstrijdsituaties",
      "Begeleiding door gecertificeerde trainer",
      "Positieve leeromgeving",
    ],
    cta: "Start Small Group",
  },
  {
    name: "Duo",
    prijs: "€ 250,-",
    per: "per persoon",
    sessies: "10 sessies",
    highlight: true,
    beschrijving:
      "De populairste keuze. Train samen met een vriend of vriendin voor een combinatie van persoonlijke aandacht en competitief leren.",
    inbegrepen: [
      "10 intensieve trainingen",
      "Persoonlijke aandacht voor beiden",
      "Competitief element met partner",
      "1v1 en duovormen",
      "Wedstrijdgerichte oefeningen",
      "Flexibele planning",
    ],
    cta: "Start Duo Training",
  },
  {
    name: "Privé",
    prijs: "€ 350,-",
    per: "totaal",
    sessies: "10 sessies",
    highlight: false,
    beschrijving:
      "Het meest intensieve programma. Volledige persoonlijke aandacht, maximale voortgang en een plan volledig op jouw maat.",
    inbegrepen: [
      "10 privétrainingen",
      "100% persoonlijke aandacht",
      "Volledig op maat programma",
      "Persoonlijk ontwikkelplan",
      "Flexibele planning",
      "Directe, uitgebreide feedback",
    ],
    cta: "Start Privétraining",
  },
];

export default function TarievenPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#0f0f0f] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-[#D62626] uppercase tracking-widest mb-4">
              Tarieven
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Transparante tarieven, maximale waarde
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Bij OKAcademy investeren we in talent. Geen verborgen kosten, geen
              verrassingen. Kies het pakket dat het beste past bij jouw doelen en budget.
            </p>
          </div>
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pakketten.map((pakket) => (
              <div
                key={pakket.name}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  pakket.highlight
                    ? "bg-[#0f0f0f] shadow-2xl shadow-black/30 md:-translate-y-3"
                    : "bg-gray-50 border border-gray-200"
                }`}
              >
                {pakket.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-[#D62626] text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    Aanbevolen
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`text-xl font-bold mb-1 ${
                      pakket.highlight ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {pakket.name}
                  </h3>
                  <p
                    className={`text-xs uppercase tracking-wider ${
                      pakket.highlight ? "text-gray-400" : "text-gray-400"
                    }`}
                  >
                    {pakket.sessies}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-end gap-2">
                    <span
                      className={`text-5xl font-bold ${
                        pakket.highlight ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {pakket.prijs}
                    </span>
                  </div>
                  <p
                    className={`text-sm mt-1 ${
                      pakket.highlight ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {pakket.per}
                  </p>
                </div>

                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    pakket.highlight ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {pakket.beschrijving}
                </p>

                <ul className="space-y-2.5 mb-8 flex-grow">
                  {pakket.inbegrepen.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
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
                  href="/aanmelden"
                  className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold transition-all ${
                    pakket.highlight
                      ? "bg-[#D62626] text-white hover:bg-[#B71C1C]"
                      : "bg-white text-gray-900 border border-gray-200 hover:border-[#D62626] hover:text-[#D62626]"
                  }`}
                >
                  {pakket.cta}
                  <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ over tarieven ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Veelgestelde vragen</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Kan ik eerst een proeftraining doen?",
                a: "Ja, absoluut! We bieden de mogelijkheid voor een vrijblijvende proeftraining zodat je zelf kunt ervaren hoe onze aanpak werkt. Neem contact met ons op om er een in te plannen.",
              },
              {
                q: "Zijn de prijzen inclusief btw?",
                a: "Ja, alle genoemde prijzen zijn eindprijzen, inclusief alle kosten. Er komen geen verborgen kosten bij.",
              },
              {
                q: "Kan ik zelf de trainingstijden bepalen?",
                a: "Ja, we plannen trainingen in overleg. We zoeken altijd naar een tijdstip dat voor jou het beste uitkomt.",
              },
              {
                q: "Wat als ik een training moet missen?",
                a: "In overleg is het mogelijk om een gemiste training te verzetten. Neem tijdig contact met ons op.",
              },
              {
                q: "Zijn er kortingen voor broers/zussen?",
                a: "We bekijken dit graag per situatie. Neem contact met ons op voor de mogelijkheden.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="bg-white rounded-xl border border-gray-200 group"
              >
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-gray-900 list-none">
                  {item.q}
                  <span className="text-[#D62626] text-xl leading-none group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#D62626]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-5">
            Klaar om te investeren in jouw spel?
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Meld je nu aan voor een (proef)training en zet de eerste stap naar jouw
            beste versie als voetballer.
          </p>
          <Link
            href="/aanmelden"
            className="inline-flex items-center gap-2 px-8 py-4 font-bold text-[#D62626] bg-white rounded-xl hover:bg-gray-50 transition-colors shadow-xl"
          >
            Direct aanmelden
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
