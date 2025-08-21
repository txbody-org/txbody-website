import "./App.css";
import Header from "./components/header";
import HomePageMobile from "./pages/home-mobile";
import Home2 from "./pages/home/design2";

function App() {
  
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    return (
      <>
        <div className="relative ">
          <Header />
          <HomePageMobile />
        </div>
      </>
    );
  }
  return (
    <>
      <div className="relative ">
        <Header />
        <Home2 />
      </div>
    </>
  );
}

export default App;
