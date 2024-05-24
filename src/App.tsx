import About from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Organic from "./components/organic";
import InOrganic from "./components/inOrganic";
import Physical from "./components/physical";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/organics" element={<Organic />} />
          <Route path="/" element={<Home />} />
          <Route path="/inorganics" element={<InOrganic/>} />
          <Route path="/physical" element={<Physical/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

function Home() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-1/2">
        <Header />
        <About />
      </div>
    </div>
  );
}
