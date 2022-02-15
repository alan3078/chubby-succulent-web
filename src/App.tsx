import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import ContentContainer from "./components/content-container/ContentContainer";
import AnimationBar from "./components/animation-bar/AnimationBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <AnimationBar />
        <ContentContainer />
        <Footer />
      </div>
    </div>
  );
}

export default App;
