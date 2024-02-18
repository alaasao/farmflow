import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Routes/Home";
import Marketplace from "./Routes/Marketplace";

import Signin from "./Routes/Signin";
import Signup from "./Routes/Signup";
import Product from "./Routes/Product";
import Experts from "./Routes/Experts";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {
  const routes = [
    {
      name: "Home",
      link: "/:scollTo?",
      component: Home,
    },
    {
      name: "market",
      link: "/market",
      component: Marketplace,
    },
    {
      name: "Sign In",
      link: "/signin",
      component: Signin,
    },
    {
      name: "Sign Up",
      link: "/signup",
      component: Signup,
    },
    {
      name: "Product",
      link: "/product/:productId",
      component: Product,
    },
    {
      name: "Expert",
      link: "/expert",
      component: Experts,
    },
  ];

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          {routes.map((route, index) => (
            <Route
              path={route.link}
              element={<route.component />}
              key={index}
            />
          ))}
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
