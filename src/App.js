import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Categry from './components/Categry';
import './index.css';
import React from 'react'
import FeatureSectionFruits from './components/FeatureSectionFruits';
import FeatureSectionBreakFast from './components/FeatureSeactionBreakFast';
import BannerSection from './components/BannerSection';
import BlogSection from './components/BlogSection';
import NewsLetter from './components/NewsLetter';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';

const App = () => {
  return (
<main>
  <Navbar/>
  <Hero/>
  <Categry/>
  <FeatureSectionFruits/>
  <FeatureSectionBreakFast/>
  <BannerSection/>
  <BlogSection/>
  <NewsLetter/>
  <FeatureSection/>
  <Footer/>
</main>
  )
}
export default App