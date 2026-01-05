import "./App.css";
import HillelCourses from "./components/HillelCourses";
import ProductCard from "./components/ProductCard";
import UserCard from "./components/UserCard";
import ProductPrice from "./components/ProductPrice";
import Button from "./components/Button";
import UserStatus from "./components/UserStatus";

function App() {
  return (
    <div>

      <UserStatus 
        isLoggedIn={false}
        username="Олена"
        role="user"
        isOnline={true}
      />

      <UserStatus 
        isLoggedIn={true}
        username="Олена"
        role="admin"
        isOnline={true}
      />

      <UserStatus 
        isLoggedIn={true}
        username="Іван"
        role="user"
        isOnline={false}
      />

    </div>
  );
}

export default App;
