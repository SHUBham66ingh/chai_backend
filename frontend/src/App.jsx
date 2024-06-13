import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[jokes, setJokes] = useState([])
  return (
    <>
      <h1>Chai aur full stack</h1>
      <p>JOKES : {jokes.length}</p>

      {
        jokes.map((jokes , index)=>{
         <div key={jokes.id}>
          <h3>{jokes.title}</h3>
          <p>{jokes.content}</p>
         </div>         
      } ) 
    }
    </>
  )
}

export default App
