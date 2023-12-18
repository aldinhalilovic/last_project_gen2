import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SigninPage from "./pages/SigninPage";
import HomePage from "./pages/HomePage";
import ContactusPage from "./pages/ContactusPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<ContactusPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
