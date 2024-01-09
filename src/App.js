import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Components/Home";
import { Route, Routes, Navigate, Router } from "react-router-dom";
import UserManagement from "./Components/UserManagement";
import Gameandnumbers from "./Components/Gameandnumbers";
import Newgame from "./Components/Newgame";
import WalletManagement from "./Components/WalletManagement";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Routes>
        <Route path="/" element={<Navigate replace to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/UserManagement" element={<UserManagement />} />
        <Route path="/Gameandnumbers" element={<Gameandnumbers />} />
        <Route path="/Newgame" element={<Newgame />} />
        <Route path="/WalletManagement" element={<WalletManagement />} />
      </Routes>
    </div>
  );
}

export default App;
