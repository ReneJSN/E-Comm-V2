import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Books from "./pages/Books";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<Books/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
