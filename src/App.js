import { useState, useEffect } from "react";
import Header from "./components/Header";
import CoinCard from "./components/CoinCard";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className="dark:bg-gray-800 min-h-screen">
      <div className="flex flex-col justify-between  max-w-[1440px] m-auto">
        <Header theme={(theme) => setTheme(theme)} />
        <CoinCard />
        <Footer />
      </div>
    </div>
  );
}

export default App;
