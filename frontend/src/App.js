import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Container} from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import  {NotFound}  from "./screens/NotFound";

const App= ()=> {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen/>} exact/>
            <Route path="/product/:id" element={<ProductScreen/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
