import React from 'react'
import Navbar from './component/Navbar'
import Card from './component/Card'
import Footer from './component/Footer'
import Card2 from './component/Card2'

const App = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div >
          <Navbar />
        </div>

        <div className='col-md-6 mt-5'>
          <Card />
        </div>

        <div className='col-md-6 mt-5'>
          <Card2 />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
