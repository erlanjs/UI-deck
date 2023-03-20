import "./App.css";
import Header from "./components/header/Header";
import heroImages from "./components/images/hero-image.png";

function App() {
  return (
    <div className="container">
      <Header />
      <img src={heroImages} style={{ width: "400px" }} alt="" />
    </div>
  );
}

export default App;
