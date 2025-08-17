import "./App.css";
import Header from "./components/header";
import HomePageMobile from "./pages/home-mobile";
import Home2 from "./pages/home/design2";

function App() {
  // This is a simple responsive app that renders different components based on the screen size.
  // It uses a mobile-first approach, so the mobile version is rendered by default.
  // The desktop version is rendered when the screen width is greater than 768px.

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
