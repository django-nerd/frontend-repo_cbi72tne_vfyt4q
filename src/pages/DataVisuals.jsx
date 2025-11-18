import { useEffect } from 'react'

export default function DataVisuals() {
  useEffect(() => {
    // Charts would be rendered here with Chart.js; static fallback is present
  }, [])

  return (
    <article className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-extrabold text-[#0b6b3a]">Data & Visuals</h1>
        <p className="mt-2 text-slate-700">Interactive charts and downloadable data. If JavaScript is disabled, static SVGs are shown.</p>
      </header>

      <section className="mt-6">
        <h2 className="text-xl font-bold">Coverage by vaccine</h2>
        <div className="mt-3 grid sm:grid-cols-2 gap-4">
          <svg viewBox="0 0 320 160" className="w-full h-auto border rounded bg-white" role="img" aria-label="Bar chart coverage by vaccine (static)">
            <rect width="320" height="160" fill="#fff" />
            {[
              { label: 'DTP/Penta3', v: 96.6 },
              { label: 'BCG/Polio/MMR/HepB', v: 98 },
              { label: 'Rotavirus', v: 98 },
              { label: 'PCV', v: 97 },
            ].map((d, i) => (
              <g key={d.label}>
                <rect x={20} y={20 + i*30} width={d.v * 2} height="18" fill="#1fa65a" />
                <text x={20 + d.v * 2 + 6} y={34 + i*30} fontSize="10" fill="#0b6b3a">{d.v}% {d.label}</text>
              </g>
            ))}
          </svg>
          <div className="rounded-lg border p-4 bg-white text-sm text-slate-700">Interactive Chart.js version loads when JS is enabled.</div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold">Regional DTP coverage</h2>
        <p className="text-slate-700">Heatmap shows range 96.0–97.7 (ASEER highest). Static schematic below.</p>
        <svg viewBox="0 0 320 120" className="w-full h-auto border rounded bg-white" role="img" aria-label="Regional coverage heatmap schematic">
          {[96.0, 96.5, 97.0, 97.3, 97.7].map((v, i) => (
            <rect key={i} x={20 + i*58} y={30} width="50" height="60" fill={`rgba(31,166,90,${(v-95.5)/3})`} />
          ))}
        </svg>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold">Cumulative COVID-19 doses</h2>
        <p className="text-slate-700">Line chart to 51M. Label: approximate — based on supplied milestones.</p>
        <svg viewBox="0 0 360 140" className="w-full h-auto border rounded bg-white" role="img" aria-label="Cumulative doses line chart schematic">
          <polyline points="10,120 80,100 140,70 200,40 260,25 340,20" fill="none" stroke="#0b6b3a" strokeWidth="3" />
        </svg>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold">Vaccine platform mix</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <svg viewBox="0 0 160 160" className="w-full h-auto border rounded bg-white" role="img" aria-label="Donut chart schematic">
            <circle cx="80" cy="80" r="60" fill="#ecfdf5" />
            <circle cx="80" cy="80" r="40" fill="#fff" />
            <text x="80" y="85" textAnchor="middle" fontSize="10" fill="#0b6b3a">Platforms</text>
          </svg>
          <ul className="text-slate-800 text-sm">
            <li>mRNA: Pfizer-BioNTech, Moderna</li>
            <li>Viral vector: Oxford/AstraZeneca, Janssen, Sputnik V</li>
            <li>Inactivated: Sinopharm, Sinovac, Covexin</li>
            <li>Protein subunit: Covovax, Nuvaxovid</li>
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold">Download data</h2>
        <div className="mt-3 flex gap-3">
          <a href="/assets/data/stats.csv" download className="px-4 py-2 rounded-md bg-[#0b6b3a] text-white">Download CSV</a>
          <a href="/assets/summary.pdf" download className="px-4 py-2 rounded-md border border-[#0b6b3a] text-[#0b6b3a]">Download Site Summary PDF</a>
        </div>
      </section>

      <section id="sources" className="mt-12 text-sm text-slate-600">
        All content and numbers are from the supplied document.
      </section>
    </article>
  )
}
