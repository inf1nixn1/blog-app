import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Users";
import Detail from "./components/pages/home/Detail";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
