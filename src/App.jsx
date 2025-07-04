import { Routes, Route } from "react-router-dom";
import Navigation from "./components/header/Navigation";
import HeroSection from "./sections/hero/HeroSection";
import QuoteSection from "./sections/quote/QuoteSection";
import About from "./sections/about/About";
import CatOne from "./sections/categories/cat_one/CatOne";
import CatTwo from "./sections/categories/cat_two/CatTwo";
import Truth from "./sections/truth/Truth";
import AnimalLove from "./sections/animalLove/animalLove";
import Support from "./sections/support/support";
import Footer from "./components/footer/footer";
import CategoryPage from "./pages/issue/issue";
import ResourcesPage from "./pages/resources/resources";
import AboutUsPage from "./pages/aboutUs/aboutUs";
import PageTransition from "./components/pageTransition/PageTransition";
import StoriesOfHopeSection from "./sections/video/Rescue";

function HomePage() {
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
      <StoriesOfHopeSection />
      <Support />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/resources' element={<ResourcesPage />} />
      <Route path='/viri' element={<ResourcesPage />} />
      <Route path='/about' element={<AboutUsPage />} />
      <Route path='/o-nas' element={<AboutUsPage />} />
      <Route path='/:category' element={<CategoryPage />} />
      <Route path='*' element={<HomePage />} /> {/* Fallback route */}
    </Routes>
  );
}

export default App;
