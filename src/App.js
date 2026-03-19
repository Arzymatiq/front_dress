import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import MainRoutes from "./routing/MainRoutes";
import ChatWidget from "./pages/ChatWidget";

const App = () => {
  return (
    <>
      <Navbar />
      <MainRoutes />
      <ChatWidget />
      <Footer />
    </>
  );
};

export default App;
