import React from 'react'

const App = ({children}) => (

  <div className="App">
    <div>
      <h1> bits & bytes </h1>
      <h2><small>eat it</small></h2>
    </div>
    <div id="body">
      {children}
    </div>
  </div>
)

export default App
