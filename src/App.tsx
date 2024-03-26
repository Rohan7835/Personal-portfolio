import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/contact"} element={<Contact />}></Route>
          <Route path={"/about"} element={<About />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
