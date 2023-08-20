import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import PhoneDetaisl from "./components/PhoneDetaisl";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phones/:id" element={<PhoneDetaisl />} />
      </Routes>
    </div>
  );
}

export default App;
