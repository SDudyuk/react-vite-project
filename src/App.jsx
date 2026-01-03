import "./App.css";
import HillelCourses from "./components/HillelCourses";
import ProductCard from "./components/ProductCard";
import UserCard from "./components/UserCard";
import ProductPrice from "./components/ProductPrice";
import Button from "./components/Button";

const handleClick = () => {
  alert("onClick");
};

function App() {
  return (
    <div>
      <UserCard name="Іван" age={25} email="ivan@mail.com" />
      <ProductPrice price={1000} discount={10} />
      <Button onClick={handleClick} text="Натисни мене" disabled={false} />
    </div>
  );
}

export default App;
