import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Faq from "./components/FAQ";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Working from "./components/Working";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Working />
      <Faq />
      <Pricing />
      <Footer />
    </>
  );
};

export default App;
