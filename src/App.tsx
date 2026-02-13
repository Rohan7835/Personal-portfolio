import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import { Container } from "react-bootstrap";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/contact"} element={<Contact />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
