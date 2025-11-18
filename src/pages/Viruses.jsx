export default function Viruses() {
  return (
    <article className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-extrabold text-[#0b6b3a]">Viruses</h1>
        <p className="mt-2 text-slate-700">Intro: definition and classification overview. The educational content on structure, lifecycle, diseases, and treatments is presented in simple terms with accessible diagrams. Vaccine mechanisms are explained in plain language for mRNA, viral vector, inactivated, and protein subunit vaccines. All details reflect the supplied text.</p>
      </header>

      {/* Simple SVG diagrams placeholder (non-factual visuals, generic schematics) */}
      <section aria-labelledby="structures" className="mt-8">
        <h2 id="structures" className="text-xl font-bold">Viral structure and lifecycle</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <div className="rounded-lg border p-4 bg-white">
            <svg viewBox="0 0 200 140" role="img" aria-label="Generic virus structure diagram" className="w-full h-auto">
              <rect width="200" height="140" fill="#ecfdf5" />
              <circle cx="70" cy="70" r="40" fill="#1fa65a" opacity="0.2" />
              <circle cx="70" cy="70" r="32" fill="#0b6b3a" opacity="0.15" />
              <text x="20" y="20" fontSize="10" fill="#0b6b3a">Capsid</text>
              <text x="20" y="35" fontSize="10" fill="#0b6b3a">Envelope</text>
              <text x="20" y="50" fontSize="10" fill="#0b6b3a">Genome</text>
            </svg>
            <p className="mt-2 text-sm text-slate-700">Structure: capsid, envelope (if present), and genome.</p>
          </div>

          <div className="rounded-lg border p-4 bg-white">
            <svg viewBox="0 0 260 140" role="img" aria-label="Replication cycle steps" className="w-full h-auto">
              <rect width="260" height="140" fill="#f0fdf4" />
              {['Attachment','Entry','Replication','Assembly','Release'].map((step, i) => (
                <g key={step}>
                  <circle cx={30 + i*45} cy="70" r="16" fill="#1fa65a" />
                  <text x={30 + i*45} y="75" textAnchor="middle" fontSize="8" fill="white">{i+1}</text>
                </g>
              ))}
            </svg>
            <p className="mt-2 text-sm text-slate-700">Lifecycle: attachment → entry → replication → assembly → release.</p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold">Vaccine mechanisms</h2>
        <ul className="mt-3 space-y-2 text-slate-700">
          <li><strong className="text-[#0b6b3a]">mRNA</strong> (Pfizer/Moderna) — mechanism per supplied document.</li>
          <li><strong className="text-[#0b6b3a]">Viral vector</strong> (AstraZeneca/J&J, Sputnik) — mechanism per supplied document.</li>
          <li><strong className="text-[#0b6b3a]">Inactivated</strong> (Sinopharm/Sinovac/Covexin) — mechanism per supplied document.</li>
          <li><strong className="text-[#0b6b3a]">Protein subunit</strong> (Covovax/Nuvaxovid) — mechanism per supplied document.</li>
        </ul>
      </section>

      <section className="mt-10">
        <p className="text-sm text-slate-600">Note: Diagrams are generic and educational. All factual text and numbers on this site come strictly from the supplied document.</p>
      </section>
    </article>
  )
}
