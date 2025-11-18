export default function CovidCampaign() {
  return (
    <article className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-extrabold text-[#0b6b3a]">COVID-19 Campaign</h1>
        <p className="mt-2 text-slate-700">Timeline and milestones, approved vaccines, uptake stats, and infection-rate reductions based strictly on the supplied text.</p>
      </header>

      <section className="mt-6">
        <h2 className="text-xl font-bold">Timeline</h2>
        <ul className="mt-2 list-disc pl-6 text-slate-800">
          <li>Start Dec 17, 2020</li>
          <li>Initial Pfizer delivery Dec 2020</li>
          <li>1st million in &gt;2 months; 2nd million in 10 days; 3rd in 7 days</li>
          <li>Expansion to 122 sites by Feb 28, 2021</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-bold">Approved vaccines (platform)</h2>
        <ul className="mt-2 grid sm:grid-cols-2 gap-2 text-slate-800">
          <li>Pfizer-BioNTech — mRNA</li>
          <li>Moderna — mRNA</li>
          <li>Oxford/AstraZeneca — viral vector</li>
          <li>Janssen — viral vector</li>
          <li>Sputnik V — viral vector</li>
          <li>Sinopharm — inactivated</li>
          <li>Sinovac — inactivated</li>
          <li>Covexin — inactivated</li>
          <li>Covovax — protein subunit</li>
          <li>Nuvaxovid — protein subunit</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-bold">Uptake stats</h2>
        <ul className="mt-2 list-disc pl-6 text-slate-800">
          <li>Pfizer first-dose share 83.46%</li>
          <li>Second dose 78.1%</li>
          <li>Third dose 39.28%</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold">Infection-rate reductions</h2>
        <p className="text-slate-700">Comparative examples based on supplied values.</p>
        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg bg-white">
            <h3 className="font-semibold text-slate-900">Pfizer</h3>
            <p className="text-sm text-slate-700">43.18% → 8.33% after 3rd dose</p>
          </div>
          <div className="p-4 border rounded-lg bg-white">
            <h3 className="font-semibold text-slate-900">AstraZeneca</h3>
            <p className="text-sm text-slate-700">12.88% → 0.76% after three doses</p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold">Cumulative doses</h2>
        <p className="text-slate-700">Sehhaty: 51,000,000 vaccine doses administered. Monthly rollout curve shown as approximate — based on supplied milestones.</p>
        <div id="chart-cumulative" className="mt-4 h-64 rounded-lg border bg-white flex items-center justify-center text-slate-500">Interactive chart placeholder</div>
      </section>

      <section id="sources" className="mt-12 text-sm text-slate-600">
        All content and numbers are from the supplied document.
      </section>
    </article>
  )
}
