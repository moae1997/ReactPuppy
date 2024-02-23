import './App.css'
import Puppies from './Puppies'
import { useState } from 'react'
import { Puppy } from './Puppy';

function App() {

const [clickedPuppy, setClickedPuppy] = useState(null);

  return (
    <>
      {
        (clickedPuppy)? <Puppy clickedPuppy={clickedPuppy} setClickedPuppy={setClickedPuppy}/> : <Puppies clickedPuppy={clickedPuppy} setClickedPuppy={setClickedPuppy}/>
      }
    </>
  )
}

export default App
