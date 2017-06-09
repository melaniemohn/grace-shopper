import React from 'react'
import Navbar from './Navbar'

const App = ({children}) => (

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

export default App
