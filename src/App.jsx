import './App.css'
import HillelCourses from './components/HillelCourses'
import ProductCard from './components/ProductCard'

function App() {
  return (
    <main>
      <h1>Каталог товарів</h1>

      <ProductCard />
      <ProductCard />
      <ProductCard />
      
      <footer>© 2024 Hillel IT School</footer>
    </main>
  )
}

export default App
