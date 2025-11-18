export default function VaccinationPlans() {
  return (
    <article className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-extrabold text-[#0b6b3a]">National Immunization Program</h1>
        <p className="mt-2 text-slate-700">Overview and history (EPI since 1974, 1984 policy, MOH oversight) and coverage statistics as provided. Schedule below is printable and downloadable.</p>
      </header>

      <section className="mt-6" aria-labelledby="coverage">
        <h2 id="coverage" className="text-xl font-bold">Coverage (from supplied text)</h2>
        <ul className="mt-2 grid sm:grid-cols-2 gap-2 text-slate-800">
          <li>• DTP/Penta3: 96.6% (children &lt;1)</li>
          <li>• BCG, Polio, MMR, Hepatitis B: 98% (2023)</li>
          <li>• Rotavirus: 98%</li>
          <li>• Pneumococcal (PCV): 97%</li>
          <li>• Nationwide childhood coverage: ~96% (2023–2028 projected stability)</li>
          <li>• Regional DTP range: 96.0% to 97.7% (ASEER highest)</li>
        </ul>
      </section>

      <section className="mt-8" aria-labelledby="schedule">
        <h2 id="schedule" className="text-xl font-bold">Childhood immunization schedule</h2>
        <div className="mt-3 overflow-x-auto print:overflow-visible">
          <table className="min-w-full border border-slate-200 text-sm bg-white">
            <thead className="bg-emerald-50 text-slate-900">
              <tr>
                <th className="p-2 border">Age</th>
                <th className="p-2 border">Vaccines</th>
              </tr>
            </thead>
            <tbody>
              {/* Replace rows with exact schedule from supplied content if needed */}
              <tr><td className="p-2 border">Birth</td><td className="p-2 border">As provided in the supplied text</td></tr>
              <tr><td className="p-2 border">2 months</td><td className="p-2 border">As provided in the supplied text</td></tr>
              <tr><td className="p-2 border">4 months</td><td className="p-2 border">As provided in the supplied text</td></tr>
              <tr><td className="p-2 border">6 months</td><td className="p-2 border">As provided in the supplied text</td></tr>
              <tr><td className="p-2 border">12 months</td><td className="p-2 border">As provided in the supplied text</td></tr>
              <tr><td className="p-2 border">18 months</td><td className="p-2 border">As provided in the supplied text</td></tr>
              <tr><td className="p-2 border">4–6 years</td><td className="p-2 border">As provided in the supplied text</td></tr>
              <tr><td className="p-2 border">11–12 years</td><td className="p-2 border">As provided in the supplied text</td></tr>
              <tr><td className="p-2 border">16–18 years</td><td className="p-2 border">As provided in the supplied text</td></tr>
            </tbody>
          </table>
        </div>
        <div className="mt-3 flex gap-3">
          <a href="/assets/data/schedule.csv" download className="px-4 py-2 rounded-md bg-[#0b6b3a] text-white">Download CSV</a>
          <button onClick={() => window.print()} className="px-4 py-2 rounded-md border border-[#0b6b3a] text-[#0b6b3a]">Print</button>
          <a href="/assets/schedule.pdf" download className="px-4 py-2 rounded-md border border-[#0b6b3a] text-[#0b6b3a]">Download PDF</a>
        </div>
      </section>

      <section className="mt-8" aria-labelledby="adult">
        <h2 id="adult" className="text-xl font-bold">Adult & senior recommendations</h2>
        <ul className="mt-2 list-disc pl-6 text-slate-800">
          <li>Influenza annual</li>
          <li>Td/Tdap boosters</li>
          <li>Shingles ≥50</li>
          <li>Pneumococcal ≥65</li>
          <li>RSV ≥60</li>
          <li>Special populations: healthcare workers, pilgrims, chronic conditions</li>
        </ul>
      </section>

      <section id="sources" className="mt-12 text-sm text-slate-600">
        All content and numbers are from the supplied document.
      </section>
    </article>
  )
}
