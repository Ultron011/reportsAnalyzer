import Header from './components/sections/Header.jsx'
import Hero from './components/sections/Hero.jsx'
import SampleAnalysis from './components/sections/SampleAnalysis.jsx'
import HowItWorks from './components/sections/HowItWorks.jsx'
import Trust from './components/sections/Trust.jsx'
import Dequalify from './components/sections/Dequalify.jsx'
import FinalAction from './components/sections/FinalAction.jsx'
import Footer from './components/sections/Footer.jsx'

function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main">
        <Hero />
        <SampleAnalysis />
        <HowItWorks />
        <Trust />
        <Dequalify />
        <FinalAction />
      </main>
      <Footer />
    </>
  )
}

export default App
