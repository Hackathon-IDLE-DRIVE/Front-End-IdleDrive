import "./App.css";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/users/Home";
import { CarList } from "./pages/users/CarList";
import { CarDetail } from "./pages/users/CarDetail";
import { CarCheckout } from "./pages/users/CarCheckout"
import Footer from "./components/Footer";
import ContentContainer from "./components/ContentContainer";
import Login from "./pages/users/Login";

function App() {
  return (
    <>
      <Navbar/>
      <ContentContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/car-list/*"
            element={<CarList />}
          />
          <Route path="/motorhome/:id/*" element={<CarDetail />} />
          <Route path="/motorhome/:id/checkout/*" element={<CarCheckout />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </ContentContainer>
      <Footer/>
    </>
  );
}

export default App;
