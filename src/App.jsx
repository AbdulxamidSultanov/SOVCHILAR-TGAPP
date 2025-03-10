import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import HomePage from "./components/HomePage";

import DescFirst from "./components/WelcomePage/DescFirst";
import DescSecond from "./components/WelcomePage/DescSecond";
import DescThird from "./components/WelcomePage/DescThird";
import SecondAuth from "./components/Auth/SecondAuth";

function App() {
  return (
    <div className="container max-h-[100dvh]">
      <Routes>
        <Route path="/" element={<DescFirst />} />
        <Route path="/second" element={<DescSecond />} />
        <Route path="/auth/second" element={<SecondAuth />} />
        <Route path="/third" element={<DescThird />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/form" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
