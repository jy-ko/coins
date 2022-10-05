import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stock from "./routes/Stock";
import Stocks from "./routes/Stocks";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Stocks />}/>
        <Route path="/:stockId" element={<Stock />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
