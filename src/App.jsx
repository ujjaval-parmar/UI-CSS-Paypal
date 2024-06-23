import React from 'react'
import Header from './components/Header/Header'
import Services from './components/services/Services'
import Features from './components/features/Features'
import GetStarted from './components/getStarted/GetStarted'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <div className='container'>
    
      <section className='section-1'>
        <Header />
      </section>

      <section className="section-2">
        <Services />
      </section>

      <section className="section-3">
        <Features />
      </section>

      <section className="section-4">
        <GetStarted />
      </section>

      <section className="section-5">
        <Footer />
      </section>

  
    </div>
  )
}

export default App