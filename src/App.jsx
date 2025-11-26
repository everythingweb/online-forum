import './App.css'
import Navbar1 from './components/Navbar1'
import CommunitySection from './components/CommunitySection'
import ImageDisplayCard from './components/ImageDisplayCard'
import FeatureShowcase from './components/FeatureShowcase'
import TestimonialCard from './components/TestimonialCard'
import LatestPostsFeed from './components/LatestPostsFeed'
import ProductivityFooter from './components/ProductivityFooter'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SocialProofSection from './components/TestimonialCard'

const App = () => {
  return (
    <BrowserRouter basename="/online-forum">
      <Routes>
        {/* Route for the main landing page */}
        <Route path="/" element={
          <main className="relative min-h-screen overflow-x-hidden bg-white text-gray-800 font-sans">
            <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
            <div className="overflow-hidden">
              <Navbar1 />
              <CommunitySection />
              <ImageDisplayCard />
              <LatestPostsFeed />
              <FeatureShowcase />
              <SocialProofSection />
              <ProductivityFooter />
            </div>
          </main>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App
