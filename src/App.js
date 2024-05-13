// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

function App() {
  let heroData = [
    {text1:"Dive Into", text2:"what you love"},
    {text1:"Indulge", text2:"your passions"},
    {text1:"Give In to", text2:"your passions"},
  ]
  const [heroCount, setheroCount] = useState(0);
  const [playStatus, setplayStatus] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setheroCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000);
  
    return () => clearInterval(intervalId);
  }, []); 
  

  return (
    <div> 
      <Background playStatus={playStatus} heroCount = {heroCount}  />
      <Navbar />
      <Hero 
        heroData ={heroData[heroCount]}
        heroCount = {heroCount}
        setheroCount= {setheroCount}
        setplayStatus = {setplayStatus}
        playStatus = {playStatus}
      />
    </div>
  );
}

export default App;
