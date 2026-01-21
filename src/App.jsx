import "./App.css";
import HillelCourses from "./components/HillelCourses";
import ProductCard from "./components/ProductCard";
import UserCard from "./components/UserCard";
import ProductPrice from "./components/ProductPrice";
import Button from "./components/Button";
import UserStatus from "./components/UserStatus";
import FilmAbout from "./components/FilmItem";

function App() {

  const handleParent = () => {
    console.log("Parent");
  }

  const handleChild = (e) => {
    e.stopPropagation();
    console.log("Child");
  }

  return (
    <div onClick={handleParent}>
      <button onClick={handleChild}>Click</button>
    </div>
  );
}

export default App;
