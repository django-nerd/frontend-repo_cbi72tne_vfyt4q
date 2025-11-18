import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50" role="contentinfo">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 py-8 grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <h3 className="text-slate-900 font-semibold">About</h3>
          <p className="mt-2 text-slate-600">Educational reference on viruses and Saudi Arabia’s national immunization program, based solely on the supplied document.</p>
        </div>
        <div>
          <h3 className="text-slate-900 font-semibold">Downloads</h3>
          <ul className="mt-2 space-y-1">
            <li><a className="text-[#0b6b3a] hover:underline" href="/assets/data/stats.csv" download>Stats CSV</a></li>
            <li><a className="text-[#0b6b3a] hover:underline" href="/assets/summary.pdf" download>Site Summary PDF</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-slate-900 font-semibold">More</h3>
          <ul className="mt-2 space-y-1">
            <li><Link to="/accessibility" className="text-[#0b6b3a] hover:underline">Accessibility</Link></li>
            <li><a className="text-[#0b6b3a] hover:underline" href="#sources">Sources & Notes</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 pb-6">© {new Date().getFullYear()} Vaccination Plans in Saudi Arabia</div>
    </footer>
  )
}
