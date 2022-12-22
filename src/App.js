import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cemiyyet from "./pages/Cemiyyet";
import Home from "./pages/Home";
import Idman from "./pages/Idman";
import Iqtisadiyyat from "./pages/Iqtisadiyyat";
import Kriminal from "./pages/Kriminal";
import Medeniyyet from "./pages/Medeniyyet";
import Muharibe from "./pages/Muharibe";
import Siyaset from "./pages/Siyaset";
import SouBiznes from "./pages/SouBiznes";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/siyaset" element={<Siyaset/>} />
        <Route path="/iqtisadiyyat" element={<Iqtisadiyyat />} />
        <Route path="/cemiyyet" element={<Cemiyyet />} />
        <Route path="/sou-biznes" element={<SouBiznes />} />
        <Route path="/muharibe" element={<Muharibe />} />
        <Route path="/idman" element={<Idman />} />
        <Route path="/kriminal" element={<Kriminal />} />
        <Route path="/medeniyyet" element={<Medeniyyet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
