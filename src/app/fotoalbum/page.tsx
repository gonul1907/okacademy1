import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Fotoalbum – Beelden van onze trainingen | OKAcademy",
  description:
    "Bekijk sfeerbeelden van OKAcademy trainingen. Ontdek de sfeer, intensiteit en het plezier van onze persoonlijke voetbaltrainingen.",
};

const allPhotos = [
  {
    src: "https://primary.jwwb.nl/public/m/z/t/temp-padguskjejeujijcvqit/img_6576-high.jpg",
    alt: "OKAcademy training – technische oefeningen",
  },
  {
    src: "https://primary.jwwb.nl/public/m/z/t/temp-padguskjejeujijcvqit/img_6509-high.jpg",
    alt: "OKAcademy training – persoonlijke begeleiding",
  },
  {
    src: "https://primary.jwwb.nl/public/m/z/t/temp-padguskjejeujijcvqit/img_6304-high-n754fq.jpg",
    alt: "OKAcademy training – kleine groep in actie",
  },
  {
    src: "https://primary.jwwb.nl/public/m/z/t/temp-padguskjejeujijcvqit/img_6288-high-nj4eqd.jpg",
    alt: "OKAcademy training – individuele techniektraining",
  },
  {
    src: "https://primary.jwwb.nl/public/m/z/t/temp-padguskjejeujijcvqit/img_6392-high.jpg",
    alt: "OKAcademy training – wedstrijdvormen",
  },
  {
    src: "https://primary.jwwb.nl/public/m/z/t/temp-padguskjejeujijcvqit/img_6198-high.jpg",
    alt: "OKAcademy training – sfeermoment",
  },
];

export default function FotoalbumPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#0f0f0f] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-[#D62626] uppercase tracking-widest mb-4">
              Fotoalbum
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Beelden van onze trainingen
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Een blik achter de schermen. Ontdek de sfeer, de intensiteit en het plezier
              dat elke OKAcademy training kenmerkt.
            </p>
          </div>
        </div>
      </section>

      {/* ── Gallery Grid ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured large photo */}
          <div className="relative aspect-[16/7] rounded-2xl overflow-hidden mb-4 shadow-xl">
            <Image
              src={allPhotos[0].src}
              alt={allPhotos[0].alt}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Grid of remaining photos */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {allPhotos.slice(1).map((photo, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-xl overflow-hidden group shadow-md"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-xs font-medium">{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Wil jij ook onderdeel zijn van dit verhaal?
          </h2>
          <p className="text-gray-500 mb-8">
            Plan een proeftraining en maak kennis met de OKAcademy-aanpak.
          </p>
          <a
            href="/aanmelden"
            className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white bg-[#D62626] rounded-xl hover:bg-[#B71C1C] transition-colors shadow-lg"
          >
            Plan een proeftraining
          </a>
        </div>
      </section>
    </>
  );
}
