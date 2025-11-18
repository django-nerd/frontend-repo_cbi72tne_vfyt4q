import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      {/* Hero with Spline DNA animation */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0b6b3a] tracking-tight">Vaccination Plans in Saudi Arabia</h1>
              <p className="mt-4 text-slate-700 text-lg">Educational hub on viruses, vaccines, and the Kingdom’s national immunization program and digital transformation.</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3" aria-label="Key statistics">
                {[
                  { label: '95%+ childhood coverage since mid-1990s' },
                  { label: '51,000,000 COVID-19 doses administered (Sehhaty)' },
                  { label: '24,000,000 Sehhaty users' },
                ].map((s, i) => (
                  <div key={i} className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-900">
                    {s.label}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/viruses" className="px-4 py-2 rounded-md bg-[#0b6b3a] text-white hover:bg-[#1fa65a] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0b6b3a]">Explore Viruses</Link>
                <Link to="/vaccination-plans" className="px-4 py-2 rounded-md border border-[#0b6b3a] text-[#0b6b3a] hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0b6b3a]">Vaccination Plans</Link>
              </div>
            </div>
            <div className="relative h-[320px] md:h-[420px] rounded-xl overflow-hidden border border-slate-200">
              <Spline scene="https://prod.spline.design/mWY-FNsBVpRvZHS5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section aria-labelledby="quick-links" className="py-10 bg-slate-50">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <h2 id="quick-links" className="text-xl font-bold text-slate-900">Quick links</h2>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { to: '/viruses', title: 'Viruses' },
              { to: '/vaccination-plans', title: 'Vaccination Plans' },
              { to: '/covid-19', title: 'COVID-19 Campaign' },
              { to: '/hajj-umrah', title: 'Hajj & Umrah' },
              { to: '/research-digital', title: 'Research & Data' },
            ].map((c) => (
              <Link key={c.to} to={c.to} className="block rounded-lg border border-slate-200 bg-white p-4 hover:border-[#0b6b3a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6b3a]">
                <div className="font-semibold text-slate-900">{c.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mini timeline */}
      <section aria-labelledby="timeline" className="py-12">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <h2 id="timeline" className="text-xl font-bold text-slate-900">Key milestones</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 text-sm">
            {[
              'EPI 1974',
              '1984 policy rollouts',
              'COVID-19 rollout 2020',
              'Digital Twin Oct 2024',
              'Feb 1, 2025 traveler rules',
            ].map((t, i) => (
              <li key={i} className="p-4 border border-slate-200 rounded-lg bg-white">
                <span className="font-semibold text-[#0b6b3a]">{t}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  )
}
