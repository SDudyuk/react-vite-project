import "./App.css";
import HillelCourses from "./components/HillelCourses";
import ProductCard from "./components/ProductCard";
import UserCard from "./components/UserCard";
import ProductPrice from "./components/ProductPrice";
import Button from "./components/Button";
import UserStatus from "./components/UserStatus";
import FilmAbout from "./components/FilmItem";

function App() {
  const topFilms = [
    { id: 101, title: 'Втеча з Шоушенка', year: 1994, rating: 9.3 },
    { id: 102, title: 'Хрещений батько', year: 1972, rating: 9.2 },
    { id: 103, title: 'Темний лицар', year: 2008, rating: 9.1 },
    { id: 104, title: '12 розгніваних чоловіків', year: 1957, rating: 8.9 },
    { id: 105, title: 'Список Шиндлера', year: 1993, rating: 9.0 },
  ];

  return (
    <div className="app-container">
      <h1 className="app-title">Топ 5 фільмів</h1>

      <ul className="film-list">
        {topFilms.map((film, index) => (
          <FilmAbout index={index + 1} data={film} />
        ) )}
      </ul>
    </div>
  );
}

export default App;
