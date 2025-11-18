import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Viruses from './pages/Viruses'
import VaccinationPlans from './pages/VaccinationPlans'
import CovidCampaign from './pages/CovidCampaign'
import HajjUmrah from './pages/HajjUmrah'
import ResearchDigital from './pages/ResearchDigital'
import DataVisuals from './pages/DataVisuals'
import FAQ from './pages/FAQ'
import Accessibility from './pages/Accessibility'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viruses" element={<Viruses />} />
          <Route path="/vaccination-plans" element={<VaccinationPlans />} />
          <Route path="/covid-19" element={<CovidCampaign />} />
          <Route path="/hajj-umrah" element={<HajjUmrah />} />
          <Route path="/research-digital" element={<ResearchDigital />} />
          <Route path="/data-visuals" element={<DataVisuals />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/accessibility" element={<Accessibility />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
