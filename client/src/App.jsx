import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import SearchBar from './components/SearchBar'
import { CardsContainer } from './components/CardsContainer'
import Footer from './components/Footer'
import { RequestForm } from './components/RequestForm'

function App() {
  const [requestForm, setRequestForm] = useState(false);
  const [cardData, setCardData] = useState([])
  const obj = {
    requestForm, setRequestForm, cardData, setCardData
  }

  return (
    <>
      <Navbar obj={obj} />
      {
        requestForm ? <>
          <RequestForm />
        </> : <>
          <SearchBar obj={obj} />
          <CardsContainer obj={obj} />
        </>
      }

      <Footer />
    </>
  )
}

export default App
