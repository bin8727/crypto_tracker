import { Routes, Route } from "react-router";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

const Router = () => {
  return(
      <Routes>
        <Route path='/' element={<Coins />} />
        <Route path='/:coinId/*' element={<Coin />} />
      </Routes>
  );
};

export default Router;