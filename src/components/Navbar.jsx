import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const navClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0b6b3a] focus-visible:ring-offset-white ${
      isActive ? 'text-white bg-[#0b6b3a]' : 'text-slate-700 hover:text-[#0b6b3a] hover:bg-emerald-50'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <nav aria-label="Primary" className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-[#0b6b3a] font-semibold">
            <img src="/favicon.svg" alt="Site logo" className="h-6 w-6" />
            <span>Vaccination Plans in Saudi Arabia</span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            <NavLink to="/viruses" className={navClasses}>Viruses</NavLink>
            <NavLink to="/vaccination-plans" className={navClasses}>Vaccination Plans</NavLink>
            <NavLink to="/covid-19" className={navClasses}>COVID-19</NavLink>
            <NavLink to="/hajj-umrah" className={navClasses}>Hajj & Umrah</NavLink>
            <NavLink to="/research-digital" className={navClasses}>Research & Data</NavLink>
            <NavLink to="/data-visuals" className={navClasses}>Data & Visuals</NavLink>
            <NavLink to="/faq" className={navClasses}>FAQ</NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}
