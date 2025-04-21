import Header from '../components/header/Header'
import Slider from '../components/slider/Slider'
import Details from '../components/details/Details'
import News from '../components/news/News'
import Gallery from '../components/gallery/Gallery'
import TeamSlider from '../components/teamSlider/TeamSlider'
import Footer from '../components/footer/Footer'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';




const HomePage = () => {
    useEffect(() => {
        AOS.init({ duration: 700, once: false, mirror: true });
    
        AOS.refresh();
    
      }, []);
    
      return (
        <>
          <Header/>
          <Slider/>
          <div data-aos="fade-up"><Details /></div>
          <div data-aos="fade-up"><News /></div>
          <div data-aos="fade-up"><Gallery /></div>
          <div data-aos="fade-up"><TeamSlider /></div>
          <Footer/>
        </>
      )
}
 
export default HomePage;