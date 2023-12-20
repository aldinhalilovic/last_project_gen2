import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SigninPage from "./pages/SigninPage";
import HomePage from "./pages/HomePage";
import ContactusPage from "./pages/ContactusPage";

// https://www.figma.com/file/1nMUPVNaDZKiiyFvV7nY7A/Desktop-sign-up-and-login-pages-by-EditorM-(Community)?type=design&node-id=0-1&mode=design&t=Grf3XIjIXKWfcu5q-0

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
