import React from 'react';
import HeroSection from './components/HeroSection';
import Hero2 from './components/Hero2';
import Hero3 from './components/Hero3';
import Hero3Bottom from './components/Hero3Bottom';
import Hero4 from './components/Hero4';
import Hero4Bottom from './components/Hero4Bottom';
import Hero5 from './components/Hero5';
import Team from './components/Team';
import TeamBottom from './components/TeamBottom';
import Feedback from './components/Feedback';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <HeroSection />
      <Hero2 />
      <Hero3/>
      <Hero3Bottom />
      <Hero4 />
      <Hero4Bottom />
      <Hero5 />
      <Team />
      <TeamBottom />
      <Feedback />
      <ContactForm />
      <Footer />
      
      <main className="container mx-auto px-4 py-12">
        {/* Add more sections here */}
      </main>
    </div>
  );
}

export default App;
