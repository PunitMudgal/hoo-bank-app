import './App.css'
import Billing from './Components/billing/Billing'
import Brand from './Components/brand/Brand'
import Business from './Components/business/Business'
import CardDeal from './Components/cardDeal/CardDeal'
import CTA from './Components/cta/CTA'
import Footer from './Components/footer/Footer'
import Home from './Components/home/Home'
import Navbar from './Components/navbar/Navbar'
import QuoteCards from './Components/quoteCards/QuoteCards'
import Stats from './Components/stats/Stats'
import Testimonials from './Components/testimonials/Testimonials'

function App() {

  return (
    <div className="">
      <div className=''>
    <Navbar/>
      </div>
      <div className=''>
        <Home/>
      </div>
      <div>
        <Stats/>
        <Business/>
        <Billing/>
        <CardDeal/>
        <Testimonials/>
        <Brand/>
        <CTA/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
