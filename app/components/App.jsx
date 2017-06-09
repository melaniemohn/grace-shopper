import React from 'react'

// eventually, pull in navbar component here

const App = ({children}) => (

  <div className="App">
    <div>
      <h1> bits & bytes </h1>
    </div>
    <div id="body">
      {children}
    </div>
  </div>
)

export default App
