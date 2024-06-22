// Hook Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components Imports
import Header from "./components/Header";
import Nav from "./components/nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./styles/index.css";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
