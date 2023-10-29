import "./App.css";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/users/Home";
import { CarList } from "./pages/users/CarList";
import { CarDetail } from "./pages/users/CarDetail";
import { CarCheckout } from "./pages/users/CarCheckout"
import { Tracking } from "./pages/users/Tracking";
import Footer from "./components/Footer";
import ContentContainer from "./components/ContentContainer";
import Login from "./pages/users/Login";
import UserRegister from "./pages/register/userRegister";
import BackOfficeRegister from "./pages/register/BackOfficeRegister";
import { CarRentalList } from "./pages/car_rental/CarRentalList";
import { Dashboard } from "./pages/car_rental/Dashboard";

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
          <Route path="/tracking/:id" element={<Tracking />} />
          <Route path="/login" element={<Login/>}/>
          <Route path='/register/user' element={<UserRegister/>}/>
          <Route path='/register/backoffice' element={<BackOfficeRegister/>}/>
          <Route path="/mycar" element={<CarRentalList/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </ContentContainer>
      <Footer/>
    </>
  );
}

export default App;
