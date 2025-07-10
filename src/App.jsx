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
import StoriesOfHopeSection from "./sections/video/Rescue";
import NotFound from "./pages/404/404";
import useScrollToTopOnReroute from "./components/utils/useScrollToTopOnReroute";

function HomePage() {
  return (
    <div className="min-h-screen">
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
  useScrollToTopOnReroute();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/meat" element={<CategoryPage category="meat" />} />
      <Route path="/dairy" element={<CategoryPage category="dairy" />} />
      <Route path="/fish" element={<CategoryPage category="fish" />} />
      <Route path="/eggs" element={<CategoryPage category="eggs" />} />

      <Route path="/o-nas" element={<AboutUsPage />} />
      <Route path="/viri" element={<ResourcesPage />} />
      <Route path="/meso" element={<CategoryPage category="meat" />} />
      <Route path="/mleko" element={<CategoryPage category="dairy" />} />
      <Route path="/ribe" element={<CategoryPage category="fish" />} />
      <Route path="/jajca" element={<CategoryPage category="eggs" />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
