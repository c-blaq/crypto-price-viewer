import Header from "./components/Header";
import CoinCard from "./components/CoinCard";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen  max-w-[1440px] m-auto">
      <Header />
      <CoinCard />
      <Footer />
    </div>
  );
}

export default App;
