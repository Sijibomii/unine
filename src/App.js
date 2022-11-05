import Header from "./components/Header";
import Disclamier from "./Disclaimer";
import HeroTop from "./components/HeroTop";
import HeroBottom from "./components/HeroBottom";
import Info from "./components/Info";
import Card from "./components/Card";
import Payment from "./components/Payment";
import Testi from "./components/Testi";
import Download from "./components/Download";
function App() {
  
  return (
    <div className="App max-w-7xl mx-auto" >
      <div className="modal hidden">

      </div>
      <div className="body">
        <div className="top bg-[#101010] pb-10">
          <Disclamier />
          <Header />
          <HeroTop />
          <HeroBottom />
        </div>
        <Info />
        <Card />
        <Payment />
        <Testi />
        <Download />
      </div>
    </div>
  );
}

export default App;
