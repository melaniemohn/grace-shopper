import React from 'react'
import Navbar from './Navbar'
import { Glyphicon, Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap'

const App = ({children}) => {

  return (
    <div className="App">
      <Navbar />
      <div>
        <h1> bits & bytes </h1>
      </div>
      <div id="body">
        {children}
      </div>
    </div>
  )
}

export default App
