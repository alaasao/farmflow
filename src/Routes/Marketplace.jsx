import First from "./Marketcomponents/First";
import Filter from "./Marketcomponents/Filter";
import Products from "./Marketcomponents/Products";

import { useState } from "react";
import Context from "./Context";
import  Nav  from "./Homecomponents/Nav";
import Footer from "./Homecomponents/Footer";
const Marketplace = () => {
  const [clickedType, setClickedType] = useState(1);

  return (
    <Context.Provider value={{ clickedType, setClickedType }}>
      <Nav />
      <First />
      <Filter />
      <Products />
      <Footer />
    </Context.Provider>
  );
};

export default Marketplace;
