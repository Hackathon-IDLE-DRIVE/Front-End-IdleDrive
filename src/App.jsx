import "./App.css";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/users/Home";
import { CarList } from "./pages/users/CarList";
import { CarDetail } from "./pages/users/CarDetail";
import Footer from "./components/Footer";
import ContentContainer from "./components/ContentContainer";

function App() {
  return (
    <>
      <Navbar/>
      <ContentContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/booking"
            element={<CarList />}
          />
          <Route path="/motorhome/:id" element={<CarDetail />} />
        </Routes>
      </ContentContainer>
      <Footer/>
    </>
  );
}

export default App;
