import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import ContactCard from './components/ContactCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-lg'>
    {/* <Navbar /> */}
    {/* <Hero /> */}
    {/* <Card /> */}
    <div class="contacts">
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </div>
    </div>
  )
}

export default App
