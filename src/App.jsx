import { useState } from "react";
import Navigation from "./components/header/navigation";
import HeroSection from "./sections/hero/HeroSection";
import QuoteSection from "./sections/quote/QuoteSection";
import About from "./sections/about/About";
import CatOne from "./sections/categories/cat_one/CatOne";
import CatTwo from "./sections/categories/cat_two/CatTwo";
import Truth from "./sections/truth/Truth";
import AnimalLove from "./sections/animalLove/animalLove";
import Support from "./sections/support/support";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className='min-h-screen'>
      <Navigation />
      <HeroSection />
      <QuoteSection />
      <About />
      <CatOne />
      <AnimalLove />
      <CatTwo />
      <Truth />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
