import { useState } from 'react'
import ModelViewer from './components/MainPage'

function App() {

  return (
    <>
    <ModelViewer 
        modelPath="/models/toothless-dragon.glb"  
        background="studio" // or "sky" or "none"
      />
    </>
  )
}

export default App
