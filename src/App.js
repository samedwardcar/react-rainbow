import React, { useState } from 'react'
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';

function App() {
  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }
  
  let [colors, setColors] = useState([
    'violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'
  ])
  

  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock key={i} color={color}/>
    )
  })
  
  return (
    <div className="App">
      <div>
        {colorMap}
      </div>
      <div>
        <ColorForm addColor = {addColor}/>
      </div>
    </div>
  )
}

export default App;
