import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/LoginAndNavbar/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import MainRoutes from "./Pages/MainRoutes";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
