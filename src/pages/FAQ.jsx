export default function FAQ() {
  return (
    <article className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-extrabold text-[#0b6b3a]">FAQ & Vaccine Hesitancy</h1>
        <p className="mt-2 text-slate-700">Hesitancy range and example study outcomes, with mitigation strategies quoted from the supplied text.</p>
      </header>

      <section className="mt-6">
        <h2 className="text-xl font-bold">Hesitancy</h2>
        <p className="text-slate-800">Reported range: 3.1%–72.2%.</p>
        <ul className="mt-2 list-disc pl-6 text-slate-800">
          <li>Riyadh parental hesitancy example</li>
          <li>Adult influenza uptake: 18.67%</li>
          <li>Adult pneumococcal uptake: 0.26%</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-bold">Mitigation strategies</h2>
        <ul className="mt-2 list-disc pl-6 text-slate-800">
          <li>Communication</li>
          <li>Training</li>
          <li>Community engagement</li>
        </ul>
      </section>

      <section id="sources" className="mt-12 text-sm text-slate-600">
        All content and numbers are from the supplied document.
      </section>
    </article>
  )
}
