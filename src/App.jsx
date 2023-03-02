import './App.css'
import Billing from './Components/billing/Billing'
import Business from './Components/business/Business'
import CardDeal from './Components/cardDeal/CardDeal'
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
        {/* <QuoteCards/> */}
      </div>
    </div>
  )
}

export default App
