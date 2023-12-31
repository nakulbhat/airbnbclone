import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-lg">
      <Navbar />
      <Hero />
      <Card
        title="Life lessons with Katie Zaferes"
        price={136}
        image="image.png"
        country="USA"
        reviewnumber={6}
      />
      <Card
        title="Life lessons with Katie Zaferes"
        price={136}
        image="airbnblogo.png"
        country="USA"
        reviewnumber={6}
      />
    </div>
  );
}

export default App;
