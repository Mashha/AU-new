import { useState } from "react";
import Navigation from "./components/header/navigation";
import HeroSection from "./sections/hero/HeroSection";
import QuoteSection from "./sections/quote/QuoteSection";
import About from "./sections/about/About";
import CatOne from "./sections/categories/cat_one/CatOne";
import CatTwo from "./sections/categories/cat_two/CatTwo";
import Truth from "./sections/truth/Truth";

// import Footer from './components/Footer';

function App() {
  return (
    <div className='min-h-screen'>
      <Navigation />
      <HeroSection />
      <QuoteSection />
      <About />
      <CatOne />
      <CatTwo />
      <Truth />
      {/*
      <Footer /> */}
    </div>
  );
}

export default App;
