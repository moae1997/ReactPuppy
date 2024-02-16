import './App.css'
import Puppies from './Puppies'
import Search from './Search'
import AddPup from './AddPup'
import { useState } from 'react'

function App() {

  const [Pups, setPups] = useState([]);

  return (
    <>
      <AddPup Pups={Pups} setPups={setPups}/>
      <Puppies Pups={Pups} setPups={setPups}/>
    </>
  )
}

export default App
