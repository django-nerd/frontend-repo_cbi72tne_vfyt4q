export default function HajjUmrah() {
  return (
    <article className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-extrabold text-[#0b6b3a]">Hajj & Umrah</h1>
        <p className="mt-2 text-slate-700">Mandatory and recommended vaccines and travel rules as stated in the supplied policy language and dates.</p>
      </header>

      <section className="mt-6">
        <h2 className="text-xl font-bold">Mandatory</h2>
        <ul className="mt-2 list-disc pl-6 text-slate-800">
          <li>Meningococcal ACYW135 for travelers ≥2 years — administered ≥10 days before arrival; certificates valid 3 yrs (polysaccharide) or 5 yrs (conjugate preferred).</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-bold">Polio rules</h2>
        <ul className="mt-2 list-disc pl-6 text-slate-800">
          <li>For travelers from polio-reporting countries: IPV issued 4 weeks–12 months before arrival; OPV 4 weeks–6 months; Feb 1–9 transit exception rules; OPV at ports-of-entry for eligible pilgrims.</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-bold">Yellow fever</h2>
        <ul className="mt-2 list-disc pl-6 text-slate-800">
          <li>Certificate rules for travelers from endemic countries and specified transit rules.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold">Pilgrim checklist</h2>
        <div className="mt-3 p-4 border rounded-lg bg-white print:border-none print:shadow-none">
          <ul className="list-disc pl-6 text-slate-800">
            <li>Passport and vaccine certificates</li>
            <li>Proof of Meningococcal vaccination</li>
            <li>Polio vaccination documentation if applicable</li>
            <li>Yellow fever certificate if applicable</li>
            <li>Personal medications and health essentials</li>
          </ul>
        </div>
        <div className="mt-3 flex gap-3">
          <button onClick={() => window.print()} className="px-4 py-2 rounded-md bg-[#0b6b3a] text-white">Print checklist</button>
          <a href="/assets/checklist.pdf" download className="px-4 py-2 rounded-md border border-[#0b6b3a] text-[#0b6b3a]">Download PDF</a>
        </div>
      </section>

      <section id="sources" className="mt-12 text-sm text-slate-600">
        All content and numbers are from the supplied document.
      </section>
    </article>
  )
}
