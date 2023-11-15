import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import experiences from "./experiences.js";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="flex gap-0 overflow-x-auto">
        {experiences.map((experience) => {
          return (
            <Card
              title={experience.title}
              price={experience.price}
              image={experience.coverImg}
              country={experience.location}
              reviewnumber={experience.stats.reviewCount}
              rating={experience.stats.rating}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
