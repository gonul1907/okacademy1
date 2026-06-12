"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

type FormData = {
  naam: string;
  geboortedatum: string;
  club: string;
  team: string;
  email: string;
  telefoon: string;
  trainingsvorm: string;
  opmerkingen: string;
};

const initialForm: FormData = {
  naam: "",
  geboortedatum: "",
  club: "",
  team: "",
  email: "",
  telefoon: "",
  trainingsvorm: "",
  opmerkingen: "",
};

export default function AanmeldenPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/aanmelden", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Verzenden mislukt");
      setSubmitted(true);
    } catch {
      alert("Er is iets misgegaan. Probeer het opnieuw of neem direct contact op.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#0f0f0f] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-[#D62626] uppercase tracking-widest mb-4">
              Aanmelden
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Zet de eerste stap
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Meld je aan voor een (proef)training bij OKAcademy. Na jouw aanmelding
              nemen we zo snel mogelijk contact met je op om alles in te plannen.
            </p>
          </div>
        </div>
      </section>

      {/* ── Form ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* USPs sidebar */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Waarom aanmelden bij OKAcademy?
              </h2>
              <ul className="space-y-4 mb-10">
                {[
                  "Vrijblijvende proeftraining beschikbaar",
                  "KNVB-gecertificeerde, ervaren trainers",
                  "Kleine groepen, maximale aandacht",
                  "Trainingen volledig op jouw maat",
                  "Flexibele planningsopties",
                  "Positieve en veilige leeromgeving",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#D62626] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-6 bg-[#0f0f0f] rounded-2xl">
                <p className="text-white font-semibold mb-2">Vragen vooraf?</p>
                <p className="text-gray-400 text-sm mb-4">
                  Neem gerust contact op, we helpen je graag bij het maken van de juiste keuze.
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:+31640727145"
                    className="text-[#D62626] text-sm font-medium hover:text-red-400 transition-colors"
                  >
                    +31 6 40727145
                  </a>
                  <a
                    href="mailto:OKAcademy2026@gmail.com"
                    className="text-[#D62626] text-sm font-medium hover:text-red-400 transition-colors"
                  >
                    OKAcademy2026@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Aanmeldformulier */}
            <div className="lg:col-span-3">
              <div className="bg-gray-50 rounded-2xl p-8 sm:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                      <CheckCircle size={40} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Aanmelding ontvangen!
                    </h3>
                    <p className="text-gray-500 max-w-sm leading-relaxed mb-6">
                      Bedankt voor je aanmelding, {form.naam.split(" ")[0]}! We nemen binnen
                      2 werkdagen contact met je op om alles in te plannen.
                    </p>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 text-[#D62626] font-semibold"
                    >
                      Terug naar home
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Aanmeldformulier</h2>
                    <p className="text-gray-500 text-sm mb-8">
                      Vul je gegevens in en we nemen zo snel mogelijk contact op.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="naam">
                          Naam <span className="text-[#D62626]">*</span>
                        </label>
                        <input
                          id="naam"
                          name="naam"
                          type="text"
                          required
                          value={form.naam}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D62626]/30 focus:border-[#D62626] transition-colors text-sm"
                          placeholder="Voor- en achternaam"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="geboortedatum">
                            Geboortedatum <span className="text-[#D62626]">*</span>
                          </label>
                          <input
                            id="geboortedatum"
                            name="geboortedatum"
                            type="date"
                            required
                            value={form.geboortedatum}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D62626]/30 focus:border-[#D62626] transition-colors text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="trainingsvorm">
                            Trainingsvorm <span className="text-[#D62626]">*</span>
                          </label>
                          <select
                            id="trainingsvorm"
                            name="trainingsvorm"
                            required
                            value={form.trainingsvorm}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D62626]/30 focus:border-[#D62626] transition-colors text-sm"
                          >
                            <option value="">Kies een trainingsvorm</option>
                            <option value="individueel">Individueel (€ 350, 10 sessies)</option>
                            <option value="duo">Duo (€ 250 p.p., 10 sessies)</option>
                            <option value="small-group">Small Group (€ 100 p.p., 5 sessies)</option>
                            <option value="proeftraining">Proeftraining (vrijblijvend)</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="club">
                            Club <span className="text-[#D62626]">*</span>
                          </label>
                          <input
                            id="club"
                            name="club"
                            type="text"
                            required
                            value={form.club}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D62626]/30 focus:border-[#D62626] transition-colors text-sm"
                            placeholder="Naam van je club"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="team">
                            Team <span className="text-[#D62626]">*</span>
                          </label>
                          <input
                            id="team"
                            name="team"
                            type="text"
                            required
                            value={form.team}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D62626]/30 focus:border-[#D62626] transition-colors text-sm"
                            placeholder="bijv. O13-1 of O15-2"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">
                            E-mailadres <span className="text-[#D62626]">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D62626]/30 focus:border-[#D62626] transition-colors text-sm"
                            placeholder="jouw@email.nl"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="telefoon">
                            Telefoonnummer <span className="text-[#D62626]">*</span>
                          </label>
                          <input
                            id="telefoon"
                            name="telefoon"
                            type="tel"
                            required
                            value={form.telefoon}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D62626]/30 focus:border-[#D62626] transition-colors text-sm"
                            placeholder="+31 6 ..."
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="opmerkingen">
                          Opmerkingen / vragen
                        </label>
                        <textarea
                          id="opmerkingen"
                          name="opmerkingen"
                          rows={4}
                          value={form.opmerkingen}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D62626]/30 focus:border-[#D62626] transition-colors text-sm resize-none"
                          placeholder="Eventuele vragen, gewenste tijden of bijzonderheden..."
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
                            <ArrowRight size={18} />
                            Verstuur aanmelding
                          </>
                        )}
                      </button>

                      <p className="text-xs text-gray-400 text-center">
                        Door je aan te melden ga je akkoord met onze aanpak. We gebruiken
                        je gegevens uitsluitend om je aanmelding te verwerken.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
