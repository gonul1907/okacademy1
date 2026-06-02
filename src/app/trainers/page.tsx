import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Trainers – Maak kennis met het OKAcademy team",
  description:
    "Maak kennis met Ole, Justen en Yoeri: de KNVB-gecertificeerde trainers van OKAcademy. Ervaren, gepassioneerd en 100% gericht op jouw ontwikkeling.",
};

const trainers = [
  {
    name: "Ole Koning",
    role: "Oprichter & Hoofdtrainer",
    diploma: "VC1 | VC2 (komend seizoen)",
    club: "PVCV Selectie",
    image: "https://primary.jwwb.nl/public/m/z/t/temp-padguskjejeujijcvqit/img_6552-standard-0ndj6a.jpg",
    bio: "Ole Koning (17) is de gedreven oprichter van OKAcademy. Als selectietrainer bij PVCV werkt hij dagelijks aan de ontwikkeling van spelers, waarbij techniek, spelinzicht en plezier centraal staan. Met zijn VC1-diploma en de ambitie om volgend seizoen VC2 te behalen, combineert Ole zijn passie voor het spel met een heldere visie op persoonlijke groei.",
    highlights: [
      "Oprichter van OKAcademy",
      "Selectietrainer bij PVCV",
      "In bezit van KNVB VC1-diploma",
      "Start komend seizoen met VC2-opleiding",
      "Focus op techniek, spelinzicht en plezier",
    ],
    initials: "OK",
  },
  {
    name: "Justen Levering",
    role: "Trainer",
    diploma: "VC1",
    club: "PVCV O17-1 (3e divisie)",
    image: "https://primary.jwwb.nl/public/m/z/t/temp-padguskjejeujijcvqit/img_6458-standard.jpg",
    bio: "Justen Levering (17) combineert acht jaar ervaring bij Vitesse met zijn huidige rol als selectietrainer bij OKAcademy. Hij voetbalt zelf op het derde niveau van Nederland bij PVCV O17-1. In zijn tweede jaar als trainer legt Justen de nadruk op niet alleen techniek en tactiek, maar ook op plezier, motivatie en de persoonlijke ontwikkeling van elke speler.",
    highlights: [
      "8 jaar spelervaring bij Vitesse academie",
      "Speelt op 3e nationaal niveau bij PVCV O17-1",
      "In bezit van KNVB VC1-licentie",
      "Focus op individuele begeleiding",
      "Creëert positieve en leerzame trainingssfeer",
    ],
    initials: "JL",
  },
  {
    name: "Yoeri Pietersen",
    role: "Trainer",
    diploma: "VC1 (aankomend seizoen)",
    club: "PVCV O17-1 (3e divisie)",
    image: "https://primary.jwwb.nl/public/m/z/t/temp-padguskjejeujijcvqit/img_6418-standard.jpg",
    bio: "Yoeri Pietersen (17) brengt meer dan 12 jaar clubervaring bij PVCV mee. In die tijd liep hij stage bij FC Utrecht, een unieke leerervaring die zijn visie op voetbalontwikkeling heeft gevormd. Als selectietrainer bij PVCV geeft hij al ruim vier jaar training aan alle breedteteams — met meetbare resultaten en een passie die zichtbaar is op het veld.",
    highlights: [
      "12+ jaar spelervaring bij PVCV",
      "Stage-ervaring bij FC Utrecht",
      "Speelt op 3e nationaal niveau bij PVCV O17-1",
      "4+ jaar trainervaring bij alle breedteteams PVCV",
      "Behaalt VC1-diploma komend seizoen",
    ],
    initials: "YP",
  },
];

export default function TrainersPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="bg-[#0f0f0f] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-[#D62626] uppercase tracking-widest mb-4">
              Het team
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Maak kennis met onze trainers
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Jonge, gepassioneerde trainers met clubervaring op hoog niveau. KNVB-gecertificeerd
              en 100% gericht op jouw persoonlijke ontwikkeling.
            </p>
          </div>
        </div>
      </section>

      {/* ── Trainers ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {trainers.map((trainer, i) => (
              <div
                key={trainer.name}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  i % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={trainer.image}
                      alt={`Trainer ${trainer.name} – OKAcademy`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-[#D62626] text-white text-xs font-bold rounded-lg">
                    {trainer.diploma}
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <p className="text-sm font-semibold text-[#D62626] mb-2">{trainer.role}</p>
                  <h2 className="text-3xl font-bold text-gray-900 mb-1">{trainer.name}</h2>
                  <p className="text-gray-500 text-sm mb-5">{trainer.club}</p>

                  <p className="text-gray-600 leading-relaxed mb-7">{trainer.bio}</p>

                  <ul className="space-y-2.5">
                    {trainer.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <CheckCircle size={17} className="text-[#D62626] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Train met de beste begeleiding
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Onze trainers staan klaar om jou of jouw kind te begeleiden naar een hoger
            niveau. Plan vandaag nog een vrijblijvende proeftraining.
          </p>
          <Link
            href="/aanmelden"
            className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white bg-[#D62626] rounded-xl hover:bg-[#B71C1C] transition-colors"
          >
            Plan een proeftraining
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
