import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Star,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  ChevronRight,
  Shield,
} from "lucide-react";
import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "OKAcademy – Persoonlijke Voetbaltraining voor Jonge Talenten",
  description:
    "Til jouw voetbal naar het volgende niveau. OKAcademy biedt persoonlijke voetbaltraining in Vleuten: kleine groepen, KNVB-gecertificeerde trainers, zichtbare groei.",
};

const features = [
  {
    icon: Users,
    title: "Kleine groepen",
    description:
      "Maximale aandacht per speler. Geen verlies in de massa, maar gerichte begeleiding op jouw niveau en persoonlijke doelen.",
  },
  {
    icon: Award,
    title: "KNVB-gecertificeerd",
    description:
      "Al onze trainers zijn in het bezit van een officiële KNVB VC1-licentie en actief als selectietrainer bij PVCV.",
  },
  {
    icon: TrendingUp,
    title: "Zichtbare groei",
    description:
      "We bouwen voort op jouw sterke punten en werken gericht aan verbeterpunten. Stap voor stap beter worden.",
  },
  {
    icon: Star,
    title: "Plezier voorop",
    description:
      "Leren gaat beter als je het leuk vindt. We combineren discipline met een positieve en motiverende leeromgeving.",
  },
];

const trainingsvormen = [
  {
    name: "Individueel",
    sessions: "10 sessies",
    price: "€ 350,-",
    description:
      "Maximale persoonlijke aandacht. Elke training volledig afgestemd op jouw niveau, doelen en specifieke verbeterpunten.",
    features: ["1-op-1 begeleiding", "Volledig maatwerk", "Flexibele planning", "Persoonlijk ontwikkelplan"],
    highlight: false,
  },
  {
    name: "Duo",
    sessions: "10 sessies",
    price: "€ 250,-",
    priceNote: "p.p.",
    description:
      "Train samen met een vriend of vriendin. Daag elkaar uit, leer van elkaar en groei samen in een competitieve setting.",
    features: ["Competitief leren", "Samen groeien", "Directe feedback", "Wedstrijdvormen"],
    highlight: true,
  },
  {
    name: "Small Group",
    sessions: "5 sessies",
    price: "€ 100,-",
    priceNote: "p.p.",
    description:
      "De kracht van groepsdynamiek in een kleine, behapbare setting. Leer van én met leeftijdsgenoten op vergelijkbaar niveau.",
    features: ["Groepsdynamiek", "Meer variatie", "Kostenefficiënt", "Sociale component"],
    highlight: false,
  },
];

const photos = [
  "https://primary.jwwb.nl/public/m/z/t/temp-padguskjejeujijcvqit/img_6576-high.jpg",
  "https://primary.jwwb.nl/public/m/z/t/temp-padguskjejeujijcvqit/img_6509-high.jpg",
  "https://primary.jwwb.nl/public/m/z/t/temp-padguskjejeujijcvqit/img_6304-high-n754fq.jpg",
  "https://primary.jwwb.nl/public/m/z/t/temp-padguskjejeujijcvqit/img_6288-high-nj4eqd.jpg",
  "https://primary.jwwb.nl/public/m/z/t/temp-padguskjejeujijcvqit/img_6392-high.jpg",
  "https://primary.jwwb.nl/public/m/z/t/temp-padguskjejeujijcvqit/img_6198-high.jpg",
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center bg-[#0f0f0f] overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://primary.jwwb.nl/public/m/z/t/temp-padguskjejeujijcvqit/img_6509-high.jpg"
            alt="OKAcademy voetbaltraining"
            fill
            sizes="100vw"
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/75 to-[#0f0f0f]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-semibold text-[#D62626] bg-[#D62626]/10 border border-[#D62626]/20 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D62626] animate-pulse" />
              KNVB-gecertificeerde trainers · Vleuten
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Til jouw voetbal{" "}
              <span className="text-[#D62626]">naar het volgende niveau</span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
              Persoonlijke voetbaltraining voor gemotiveerde spelers. Kleine groepen,
              professionele begeleiding en een omgeving waarin jij optimaal kunt groeien.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/aanmelden"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 font-bold text-white bg-[#D62626] rounded-xl hover:bg-[#B71C1C] transition-all hover:shadow-2xl hover:shadow-[#D62626]/30 hover:-translate-y-0.5"
              >
                Plan een proeftraining
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/trainingen"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 font-semibold text-white border border-gray-600 rounded-xl hover:border-gray-400 transition-colors"
              >
                Bekijk trainingen
              </Link>
            </div>

            <div className="flex items-center gap-8 mt-12 pt-12 border-t border-gray-800/60">
              <div>
                <div className="text-3xl font-bold text-white">4</div>
                <div className="text-sm text-gray-500 mt-0.5">gecertificeerde trainers</div>
              </div>
              <div className="w-px h-12 bg-gray-800" />
              <div>
                <div className="text-3xl font-bold text-white">3</div>
                <div className="text-sm text-gray-500 mt-0.5">trainingsvormen</div>
              </div>
              <div className="w-px h-12 bg-gray-800" />
              <div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-gray-500 mt-0.5">persoonlijke aandacht</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn variant="fadeUp" className="text-center mb-16">
            <p className="text-sm font-bold text-[#D62626] uppercase tracking-widest mb-3">
              Onze aanpak
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen voor OKAcademy?
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Wij geloven in persoonlijke aandacht, positieve begeleiding en zichtbare resultaten.
              Dit is wat ons onderscheidt van een standaard clubtraining.
            </p>
          </AnimateIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div
                  className="group p-7 rounded-2xl border border-gray-100 hover:border-[#D62626]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5 group-hover:bg-[#D62626] transition-colors duration-300">
                    <feature.icon
                      size={22}
                      className="text-[#D62626] group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── About Preview ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateIn variant="fadeLeft" className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://primary.jwwb.nl/public/m/z/t/temp-padguskjejeujijcvqit/img_6576-high.jpg"
                  alt="OKAcademy training in actie"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-[#D62626] rounded-2xl p-5 text-white text-center shadow-2xl">
                <div className="text-3xl font-bold">VC1</div>
                <div className="text-xs font-semibold uppercase tracking-wide opacity-90 mt-0.5">
                  KNVB licentie
                </div>
              </div>
            </AnimateIn>

            <AnimateIn variant="fadeRight" className="order-1 lg:order-2">
              <p className="text-sm font-bold text-[#D62626] uppercase tracking-widest mb-3">
                Over OKAcademy
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Jouw groei is onze missie
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                OKAcademy is opgericht door gepassioneerde jonge trainers die het verschil willen
                maken in de ontwikkeling van jonge voetballers. We combineren technische expertise,
                pedagogisch inzicht en een echte liefde voor het spel.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Trainers met clubervaring bij PVCV-selectie",
                  "Stage-ervaring bij professionele academies (Vitesse, FC Utrecht)",
                  "Elke training volledig afgestemd op de individuele speler",
                  "Veilige en positieve leeromgeving voor alle niveaus",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#D62626] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/over-ons"
                className="inline-flex items-center gap-1.5 font-semibold text-[#D62626] group"
              >
                Leer ons beter kennen
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Trainingen / Pricing ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn variant="fadeUp" className="text-center mb-16">
            <p className="text-sm font-bold text-[#D62626] uppercase tracking-widest mb-3">
              Trainingsvormen
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Kies jouw trainingsvorm
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Van volledig individueel tot kleine groep — er is altijd een optie die aansluit
              bij jouw wensen, budget en doelen.
            </p>
          </AnimateIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {trainingsvormen.map((vorm) => (
              <StaggerItem key={vorm.name}>
              <div
                className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                  vorm.highlight
                    ? "bg-[#0f0f0f] shadow-2xl shadow-black/40 md:-translate-y-2"
                    : "bg-gray-50 border border-gray-200 hover:shadow-lg"
                }`}
              >
                {vorm.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-[#D62626] text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
                    Meest gekozen
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`text-xl font-bold mb-1 ${
                      vorm.highlight ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {vorm.name}
                  </h3>
                  <p className={`text-sm ${vorm.highlight ? "text-gray-400" : "text-gray-500"}`}>
                    {vorm.sessions}
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
                    <span className={`text-sm ${vorm.highlight ? "text-gray-400" : "text-gray-500"}`}>
                      {vorm.priceNote}
                    </span>
                  )}
                </div>

                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    vorm.highlight ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {vorm.description}
                </p>

                <ul className="space-y-2.5 mb-8 flex-grow">
                  {vorm.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <CheckCircle
                        size={15}
                        className={vorm.highlight ? "text-[#D62626]" : "text-green-500"}
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

                <Link
                  href="/aanmelden"
                  className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm transition-all ${
                    vorm.highlight
                      ? "bg-[#D62626] text-white hover:bg-[#B71C1C]"
                      : "bg-white text-gray-900 border border-gray-200 hover:border-[#D62626] hover:text-[#D62626]"
                  }`}
                >
                  Kies {vorm.name}
                  <ArrowRight size={15} />
                </Link>
              </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center mt-10">
            <Link
              href="/tarieven"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#D62626] transition-colors font-medium"
            >
              Alle tarieven en details bekijken
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Photo Grid ── */}
      <section className="py-24 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn variant="fadeUp" className="text-center mb-12">
            <p className="text-sm font-bold text-[#D62626] uppercase tracking-widest mb-3">
              In actie
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Zo trainen we bij OKAcademy
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Ontdek de sfeer, intensiteit en het plezier van onze trainingen.
            </p>
          </AnimateIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {photos.map((src, i) => (
              <StaggerItem key={i}>
              <div className="relative aspect-square rounded-xl overflow-hidden group">
                <Image
                  src={src}
                  alt={`OKAcademy training moment ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center mt-8">
            <Link
              href="/fotoalbum"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium"
            >
              Bekijk het volledige fotoalbum
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="py-24 bg-white">
        <AnimateIn variant="scaleUp" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-[#D62626] fill-[#D62626]" />
            ))}
          </div>
          <blockquote className="text-2xl sm:text-3xl font-medium text-gray-900 leading-relaxed mb-8 italic">
            &#8220;Als je kind net als onze zoon zelfverzekerder, sneller, tactisch en sterker
            aan de bal wilt laten worden — dan ben je bij OKAcademy in goede handen.
            Top trainers die echt meedenken.&#8221;
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-11 h-11 rounded-full bg-red-50 flex items-center justify-center font-bold text-[#D62626]">
              S
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">Stefan</div>
              <div className="text-sm text-gray-500">Vader van Bram</div>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* ── Trust Badges ── */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: Shield,
                title: "KNVB-gecertificeerd",
                desc: "Officiële VC1-licentie voor al onze trainers",
              },
              {
                icon: Users,
                title: "Kleine groepen",
                desc: "Maximale persoonlijke aandacht per speler",
              },
              {
                icon: TrendingUp,
                title: "Meetbare vooruitgang",
                desc: "Zichtbare groei in techniek, tactiek & zelfvertrouwen",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-3">
                  <item.icon size={22} className="text-[#D62626]" />
                </div>
                <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
                <div className="text-sm text-gray-500">{item.desc}</div>
              </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 bg-[#D62626]">
        <AnimateIn variant="scaleUp" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Klaar om te starten?
          </h2>
          <p className="text-red-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Plan vandaag nog een vrijblijvende proeftraining en ervaar zelf wat OKAcademy
            voor jou of jouw kind kan betekenen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/aanmelden"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-[#D62626] bg-white rounded-xl hover:bg-gray-50 transition-colors shadow-xl"
            >
              Plan een proeftraining
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white border-2 border-white/40 rounded-xl hover:border-white/80 transition-colors"
            >
              Stel een vraag
            </Link>
          </div>
        </AnimateIn>
      </section>
    </>
  );
}

