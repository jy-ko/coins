import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Stocks from "./routes/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Stocks />}/>
        <Route path="/:stockId/*" element={<Detail />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
