import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Target, Heart, Lightbulb, Users } from "lucide-react";
import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Over OKAcademy – Onze Missie, Visie en Aanpak",
  description:
    "Leer meer over OKAcademy: wie we zijn, waarom we zijn opgericht en hoe we jonge voetballers helpen groeien. Persoonlijke aanpak, positieve omgeving.",
};

const onderscheidend = [
  {
    icon: Target,
    title: "Individuele aandacht",
    description:
      "Elke speler krijgt training op basis van zijn of haar eigen doelen en ontwikkelpunten. We kijken niet naar de groep als geheel, maar naar jou als individu.",
  },
  {
    icon: Users,
    title: "Kleine trainingsvormen",
    description:
      "Door bewust te werken in kleine groepen garanderen we maximale aandacht, veel balcontacten en een hoge trainingsintensiteit per sessie.",
  },
  {
    icon: Heart,
    title: "Ontwikkeling met plezier",
    description:
      "Een positieve leeromgeving is de basis voor groei. Spelers leren beter voetballen in een sfeer waar fouten mogen en zelfs worden aangemoedigd.",
  },
  {
    icon: Lightbulb,
    title: "Gericht op totale groei",
    description:
      "We kijken verder dan techniek. Mentale weerbaarheid, spelinzicht en zelfvertrouwen zijn even belangrijk als een goede eerste aanname.",
  },
];

export default function OverOnsPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="bg-[#0f0f0f] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn variant="fadeUp" className="max-w-3xl">
            <p className="text-sm font-bold text-[#D62626] uppercase tracking-widest mb-4">
              Over ons
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Welkom bij OKAcademy
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Wij helpen jonge voetballers hun potentieel te ontdekken en te bereiken.
              Door persoonlijke begeleiding, deskundige trainers en een omgeving die
              groei stimuleert, zetten we spelers op de weg naar hun beste versie.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── Missie ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateIn variant="fadeLeft">
              <p className="text-sm font-bold text-[#D62626] uppercase tracking-widest mb-3">
                Onze missie
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Elke gemotiveerde speler verdient de kans om te groeien
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Bij OKAcademy geloven we dat talent niet alleen aangeboren is — het wordt
                ontwikkeld. Met de juiste begeleiding, de juiste omgeving en de juiste
                mindset kan elke gemotiveerde speler stappen zetten die hij of zij zelf
                voor onmogelijk hield.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Onze missie is simpel: elke speler helpen om na elke training beter van
                het veld te stappen dan hij of zij erop kwam. Stap voor stap, sessie voor
                sessie, seizoen voor seizoen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/aanmelden"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 font-bold text-white bg-[#D62626] rounded-xl hover:bg-[#B71C1C] transition-colors"
                >
                  Plan een proeftraining
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/trainingen"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold text-gray-700 border border-gray-200 rounded-xl hover:border-gray-400 transition-colors"
                >
                  Bekijk trainingen
                </Link>
              </div>
            </AnimateIn>
            <AnimateIn variant="fadeRight" className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://primary.jwwb.nl/public/m/z/t/temp-padguskjejeujijcvqit/img_6392-high.jpg"
                  alt="OKAcademy missie – jonge voetballers aan het trainen"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Voor wie ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://primary.jwwb.nl/public/m/z/t/temp-padguskjejeujijcvqit/img_6288-high-nj4eqd.jpg"
                  alt="Jonge voetballer in training bij OKAcademy"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-bold text-[#D62626] uppercase tracking-widest mb-3">
                Voor wie zijn wij er?
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Voor iedere gemotiveerde speler
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                OKAcademy is er voor jonge voetballers die extra stappen willen zetten in
                hun ontwikkeling, en voor ouders die hun kind daarin willen ondersteunen.
                Niveau doet er niet toe — motivatie des te meer.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Of het nu gaat om extra techniektraining, meer zelfvertrouwen op het veld
                of een beter begrip van het spel: wij helpen spelers het maximale uit
                zichzelf te halen, altijd in een veilige en positieve leeromgeving.
              </p>
              <ul className="space-y-3">
                {[
                  "KNVB-gecertificeerde trainer met oog voor het individu",
                  "Veilige en positieve leeromgeving",
                  "Aandacht voor zowel sterke punten als verbeterpunten",
                  "Plezier en ontwikkeling gaan hand in hand",
                  "Geschikt voor alle niveaus en leeftijden",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#D62626] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Wat maakt ons anders ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn variant="fadeUp" className="text-center mb-16">
            <p className="text-sm font-bold text-[#D62626] uppercase tracking-widest mb-3">
              Onderscheidend vermogen
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Wat maakt OKAcademy anders?
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Bij OKAcademy draait alles om persoonlijke aandacht en maatwerk. Geen
              standaardtrainingen, maar sessies die volledig zijn afgestemd op de speler
              als individu.
            </p>
          </AnimateIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {onderscheidend.map((item) => (
              <StaggerItem key={item.title}>
              <div
                className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={26} className="text-[#D62626]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Quote / Brand Statement ── */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl text-[#D62626] font-serif mb-6">&#8220;</div>
          <p className="text-2xl sm:text-3xl font-medium text-white leading-relaxed">
            Elke gemotiveerde speler kan stappen maken, zolang hij of zij de juiste
            begeleiding krijgt.
          </p>
          <div className="mt-6 text-[#D62626] text-5xl font-serif">&#8221;</div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
            De volgende stap
          </h2>
          <p className="text-lg text-gray-500 mb-8 leading-relaxed">
            Ben je enthousiast geworden? Neem contact met ons op voor meer informatie of
            plan direct een proeftraining. We denken graag met je mee over welke
            trainingsvorm het beste past.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/aanmelden"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white bg-[#D62626] rounded-xl hover:bg-[#B71C1C] transition-colors shadow-lg"
            >
              Plan een proeftraining
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-gray-700 border border-gray-200 rounded-xl hover:border-gray-400 transition-colors"
            >
              Stel een vraag
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
