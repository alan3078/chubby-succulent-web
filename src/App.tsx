import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Divider from '@mui/material/Divider';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Divider variant="middle" />
        <Header />
      </div>
    </div>
  );
}

export default App;
