import  Nav  from "./Homecomponents/Nav";
import Faq from "./Homecomponents/Faq";
import First from "./Homecomponents/First";

import Second from "./Homecomponents/Second";
import Third from "./Homecomponents/Third";
import Why from "./Homecomponents/Why";
import Footer from "./Homecomponents/Footer";
import  { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  const {scollTo} = useParams() // Extract the scrollTo ID from the route

  useEffect(() => {
    const targetElement = document.getElementById(scollTo);

    if (targetElement) {
      const scrollTarget = targetElement.offsetTop - 100; // Calculate the scroll position 100px above the target
      window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
  
    }

  }, );
  useEffect(() => {
    navigate('/');
  }, []);
  return (
    <>  <Nav />
    <div className="home">
    
      <First />
      <Second />
      <Third />
      <Why />
      <Faq />
      <Footer />
    </div></>
  );
};

export default Home;
