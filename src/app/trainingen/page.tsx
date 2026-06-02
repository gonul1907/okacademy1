import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Users, User, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Trainingen – Individueel, Duo & Small Group | OKAcademy",
  description:
    "Ontdek de drie trainingsvormen van OKAcademy: individueel, duo en small group. Persoonlijke begeleiding, doelgerichte sessies en zichtbare groei.",
};

const vormen = [
  {
    icon: User,
    name: "Individueel",
    tagline: "Maximale aandacht, maximale groei",
    description:
      "Bij een individuele training draait alles om jou. Elke sessie is volledig afgestemd op jouw niveau, jouw doelen en jouw specifieke verbeterpunten. Je hebt de volledige aandacht van de trainer — geen afleiding, geen wachten, gewoon werken aan jouw spel.",
    features: [
      "100% persoonlijke aandacht van de trainer",
      "Programma volledig op maat",
      "Flexibele planning en locatie",
      "Persoonlijk ontwikkelplan",
      "Snelle progressie dankzij intensieve begeleiding",
      "Ideaal voor spelers met specifieke leerdoelen",
    ],
    ideal: "Spelers die snel willen progressiemaken of specifieke technische aspecten willen verbeteren.",
    sessions: "10 sessies",
    price: "€ 350,-",
    color: "bg-gray-50 border-gray-200",
    highlight: false,
  },
  {
    icon: UserCheck,
    name: "Duo",
    tagline: "Samen groeien, elkaar uitdagen",
    description:
      "De duotraining combineert persoonlijke begeleiding met de dynamiek van een partner. Je traint samen met een vriend of vriendin op vergelijkbaar niveau. Wedstrijdelementen, directe vergelijking en gezamenlijke motivatie zorgen voor een unieke leeromgeving.",
    features: [
      "Aandacht verdeeld over twee spelers",
      "Competitief element stimuleert prestaties",
      "Wedstrijdvormen en 1v1-situaties",
      "Directe feedback en vergelijking",
      "Gezellig en motiverend",
      "Kostenefficiënter dan individueel",
    ],
    ideal: "Vrienden of broers/zussen die graag samen trainen en elkaar kunnen uitdagen.",
    sessions: "10 sessies",
    price: "€ 250,-",
    priceNote: "p.p.",
    color: "bg-[#0f0f0f]",
    highlight: true,
  },
  {
    icon: Users,
    name: "Small Group",
    tagline: "Leer van én met elkaar",
    description:
      "In een small group training werk je samen met een kleine groep spelers op vergelijkbaar niveau. Groepsdynamiek, wedstrijdvormen en sociale interactie maken deze trainingsvorm bijzonder leerzaam en leuk tegelijkertijd.",
    features: [
      "Kleine groep, veel persoonlijke aandacht",
      "Groepsvormen en wedstrijdsituaties",
      "Leren van leeftijdsgenoten",
      "Sociale component en teamspirit",
      "Afwisseling en variatie",
      "Meest toegankelijk qua prijs",
    ],
    ideal: "Spelers die de sociale component van trainen waarderen en graag met anderen leren.",
    sessions: "5 sessies",
    price: "€ 100,-",
    priceNote: "p.p.",
    color: "bg-gray-50 border-gray-200",
    highlight: false,
  },
];

export default function TrainingenPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-[#0f0f0f] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://primary.jwwb.nl/public/m/z/t/temp-padguskjejeujijcvqit/img_6392-high.jpg"
            alt="OKAcademy trainingen"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] to-[#0f0f0f]/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-[#D62626] uppercase tracking-widest mb-4">
              Trainingen
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Individuele groei staat centraal
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Ontdek onze persoonlijke en doelgerichte trainingen, volledig afgestemd op
              jouw niveau en wensen. In een veilige omgeving waar fouten maken mag,
              werken we aan techniek, spelinzicht en zelfvertrouwen.
            </p>
            <Link
              href="/aanmelden"
              className="inline-flex items-center gap-2 px-7 py-4 font-bold text-white bg-[#D62626] rounded-xl hover:bg-[#B71C1C] transition-colors"
            >
              Neem contact op
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trainingsvormen ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-[#D62626] uppercase tracking-widest mb-3">
              Kies jouw stijl
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Drie trainingsvormen, één doel
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              We bieden verschillende trainingsvormen zodat er altijd een optie is die
              perfect aansluit bij jouw behoeften, budget en doelen.
            </p>
          </div>

          <div className="space-y-8">
            {vormen.map((vorm, i) => (
              <div
                key={vorm.name}
                className={`rounded-2xl p-8 sm:p-10 border ${
                  vorm.highlight ? "bg-[#0f0f0f] border-gray-800" : "bg-gray-50 border-gray-200"
                }`}
              >
                <div className={`grid lg:grid-cols-2 gap-10 items-start ${i % 2 === 1 ? "" : ""}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          vorm.highlight ? "bg-[#D62626]" : "bg-[#D62626]/10"
                        }`}
                      >
                        <vorm.icon
                          size={20}
                          className={vorm.highlight ? "text-white" : "text-[#D62626]"}
                        />
                      </div>
                      <div>
                        <h3
                          className={`text-2xl font-bold ${
                            vorm.highlight ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {vorm.name}
                        </h3>
                        <p className={`text-sm ${vorm.highlight ? "text-[#D62626]" : "text-[#D62626]"}`}>
                          {vorm.tagline}
                        </p>
                      </div>
                    </div>

                    <p
                      className={`leading-relaxed mb-6 ${
                        vorm.highlight ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {vorm.description}
                    </p>

                    <div
                      className={`p-4 rounded-xl mb-6 ${
                        vorm.highlight ? "bg-white/5" : "bg-white border border-gray-100"
                      }`}
                    >
                      <p
                        className={`text-xs font-semibold uppercase tracking-wider mb-1 ${
                          vorm.highlight ? "text-gray-400" : "text-gray-400"
                        }`}
                      >
                        Ideaal voor
                      </p>
                      <p className={`text-sm ${vorm.highlight ? "text-gray-300" : "text-gray-600"}`}>
                        {vorm.ideal}
                      </p>
                    </div>

                    <div className="flex items-baseline gap-1.5 mb-5">
                      <span
                        className={`text-4xl font-bold ${
                          vorm.highlight ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {vorm.price}
                      </span>
                      {vorm.priceNote && (
                        <span
                          className={`text-sm ${vorm.highlight ? "text-gray-400" : "text-gray-500"}`}
                        >
                          {vorm.priceNote}
                        </span>
                      )}
                      <span
                        className={`text-sm ml-1 ${vorm.highlight ? "text-gray-400" : "text-gray-500"}`}
                      >
                        · {vorm.sessions}
                      </span>
                    </div>

                    <Link
                      href="/aanmelden"
                      className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all ${
                        vorm.highlight
                          ? "bg-[#D62626] text-white hover:bg-[#B71C1C]"
                          : "bg-[#0f0f0f] text-white hover:bg-gray-800"
                      }`}
                    >
                      Aanmelden voor {vorm.name}
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                  <div>
                    <p
                      className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                        vorm.highlight ? "text-gray-400" : "text-gray-400"
                      }`}
                    >
                      Wat is inbegrepen
                    </p>
                    <ul className="space-y-3">
                      {vorm.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle
                            size={17}
                            className="text-[#D62626] flex-shrink-0 mt-0.5"
                          />
                          <span
                            className={`text-sm ${
                              vorm.highlight ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USPs ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-bold text-[#D62626] uppercase tracking-widest mb-3">
                Uniek bij OKAcademy
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Wat maakt OKAcademy uniek?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Persoonlijke aandacht, doelgerichte trainingen en een positieve leeromgeving.
                Wij bouwen verder op jouw sterke punten en werken aan je verbeterpunten.
              </p>
              <div className="space-y-5">
                {[
                  {
                    title: "Persoonlijke begeleiding",
                    desc: "Elke speler krijgt begeleiding op maat. We focussen op jouw sterke punten én verbeterpunten.",
                  },
                  {
                    title: "Verwacht resultaat",
                    desc: "Zichtbare stappen in je ontwikkeling, meer zelfvertrouwen en een beter spelinzicht.",
                  },
                  {
                    title: "Positieve sfeer",
                    desc: "In een omgeving waar fouten maken mag, durven spelers meer te experimenteren.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#D62626] flex-shrink-0 mt-2" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://primary.jwwb.nl/public/m/z/t/temp-padguskjejeujijcvqit/img_6576-high.jpg"
                alt="OKAcademy unieke trainingsaanpak"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
