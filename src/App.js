import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Popular from "./Pages/Popular/Popular";
import Series from "./Pages/Series/Series";
import Movies from "./Pages/Movies/Movies";
import Search from "./Pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="app">
    <Container>
      <Routes>
        <Route path='/' element={<Popular/>}  />
        <Route path='/TV' element={<Series/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/search' element={<Search/>} />
      </Routes>
    </Container>
    </div>
      
    <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
