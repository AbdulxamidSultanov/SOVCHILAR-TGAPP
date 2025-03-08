import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Home from "./components/Home";

function App() {
  return (
    <div className="container max-h-[100dvh]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
