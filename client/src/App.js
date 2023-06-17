import logo from "./logo.svg";
import "./App.css";
import AboutUs from "./components/AboutUs";
import styles from "./styles/Home.module.css";
import Hero from "./components/Hero";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";

import HomePage from "./pages/homePage";
import { Link } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import BookApartment from "./components/BookApartment";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Apartment1 from "./pages/apartment1";
import Impressum from "./pages/impressum";
import Admin from "./pages/admin";
import AdminLogin from "./pages/adminLogin";
import Register from "./pages/register";

import PrivateRoute from "./components/PrivateRoute";

import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <Router>
      <Navbar />
      {/* give access to the Authprovider functions to the child components */}
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/apartment1" element={<Apartment1 />} />
            <Route exact path="/impressum" element={<Impressum />} />
            <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <Admin />
                </PrivateRoute>
              }
            />
            <Route exact path="/admin/login" element={<AdminLogin />} />
            <Route exact path="/register" element={<Register />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
