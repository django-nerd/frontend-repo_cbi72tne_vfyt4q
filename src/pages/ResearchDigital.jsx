export default function ResearchDigital() {
  return (
    <article className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-extrabold text-[#0b6b3a]">Research, Production & Digital Transformation</h1>
        <p className="mt-2 text-slate-700">Sehhaty features and impact (24M users, 51M doses administered via platform, 24M COVID test appointment stat), Digital Twin Oct 2024. Local vaccine production goals and MODON 2023 agreements; projection: vaccine imports ≈ $416M by 2028. Vision 2030 priorities.</p>
      </header>

      <section className="mt-6 grid sm:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg bg-white">
          <h2 className="font-semibold text-slate-900">Sehhaty</h2>
          <ul className="mt-2 list-disc pl-6 text-slate-800">
            <li>24,000,000 users</li>
            <li>51,000,000 vaccine doses administered</li>
            <li>24,000,000 COVID test appointments</li>
            <li>Digital Twin (Oct 2024)</li>
          </ul>
        </div>
        <div className="p-4 border rounded-lg bg-white">
          <h2 className="font-semibold text-slate-900">Local production</h2>
          <ul className="mt-2 list-disc pl-6 text-slate-800">
            <li>MODON 2023 agreements</li>
            <li>Projected vaccine imports ≈ $416M by 2028</li>
          </ul>
        </div>
      </section>

      <section id="sources" className="mt-12 text-sm text-slate-600">
        All content and numbers are from the supplied document.
      </section>
    </article>
  )
}
