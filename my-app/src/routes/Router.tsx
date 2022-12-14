import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Chart } from "./Chart";
import { Coin } from "./Coin";
import { Coins } from "./Coins";
import { Price } from "./Price";

interface IRouterProps {}

export function Router({}: IRouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId" element={<Coin/>}>
          <Route path="price" element={<Price />} />
          <Route path="chart" element={<Chart/>} />
        </Route>
        <Route path="/" element={<Coins/>} />
      </Routes>
    </BrowserRouter>
  );
}
