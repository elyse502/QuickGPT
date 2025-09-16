import ChatBox from "./components/ChatBox";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Credits from "./pages/Credits";
import Community from "./pages/Community";
import { assets } from "./assets/assets";
import { useState } from "react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {!isMenuOpen && (
        <img
          onClick={() => setIsMenuOpen(true)}
          src={assets.menu_icon}
          alt="menu"
          className="absolute top-3 left-3 w-8 h-8 cursor-pointer md:hidden not-dark:invert"
        />
      )}
      <div className="dark:bg-gradient-to-b from-[#242124] to-[#000000] dark:text-white">
        <div className="flex h-screen w-screen">
          <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <Routes>
            <Route path="/" element={<ChatBox />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
