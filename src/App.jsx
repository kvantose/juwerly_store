import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";

import { useState } from "react";
import "./App.css";
import About from "./components/About/About.jsx";
import MiniCatalog from "./components/MiniCatalog/MiniCatalog.jsx";
import BannerSell from "./components/BannerSell/BannerSell.jsx";
import Advantage from "./components/Advantage/Advantage.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <Main open={open} />
      <div className="app__container">
        <About />
        <MiniCatalog props="Откройте для себя новые шедевры" />
        <BannerSell />
        <MiniCatalog props="Индивидуальные решения" />
        <Advantage />
        <MiniCatalog props="Больше украшений в каталоге" />
      </div>
      <Footer />
    </>
  );
}

export default App;
