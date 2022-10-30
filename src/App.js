import Header from "./components/Header";
import Disclamier from "./Disclaimer";
import HeroTop from "./components/HeroTop";
import HeroBottom from "./components/HeroBottom";
function App() {
  
  return (
    <div className="App max-w-7xl mx-auto" >
      <div className="modal hidden">

      </div>
      <div className="body">
        <div className="top bg-[#101010]">
          <Disclamier />
          <Header />
          <HeroTop />
          <HeroBottom />
        </div>
      </div>
    </div>
  );
}

export default App;
