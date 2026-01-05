import "./App.css";
import HillelCourses from "./components/HillelCourses";
import ProductCard from "./components/ProductCard";
import UserCard from "./components/UserCard";
import ProductPrice from "./components/ProductPrice";
import Button from "./components/Button";

const handleSave = () => {
  console.log("Зберегти");
};

const handleConfirm = () => {
  console.log("Підтверджено");
};

const handleDelete = () => {
  console.log("Видалено");
};

const handleShare = () => {
  console.log("Поділитися");
};

function App() {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Демонстрація компонента Button</h1>

      <h2>Базова кнопка</h2>
      <Button onClick={handleSave}>Зберегти</Button>

      <h2>Варіанти стилів</h2>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="outline">Outline</Button>
      </div>

      <h2>Розміри</h2>
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>

      <h2>З іконками</h2>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Button variant="success" size="large" onClick={handleConfirm}>
          ✅ Підтвердити
        </Button>
        <Button variant="danger" size="small" disabled onClick={handleDelete}>
          ❌ Видалити
        </Button>
      </div>

      <h2>На всю ширину</h2>
      <Button variant="outline" fullWidth onClick={handleShare}>
        <span>📤</span>
        <span>Поділитися</span>
      </Button>

      <h2>Неактивні кнопки</h2>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Button variant="primary" disabled>
          Primary Disabled
        </Button>
        <Button variant="success" disabled>
          Success Disabled
        </Button>
        <Button variant="danger" disabled>
          Danger Disabled
        </Button>
      </div>

      <h2>Комбінації</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Button variant="success" size="large" fullWidth>
          💾 Зберегти зміни
        </Button>
        <Button variant="danger" size="medium" fullWidth>
          🗑️ Видалити назавжди
        </Button>
        <Button variant="outline" size="small">
          ⚙️ Налаштування
        </Button>
      </div>
    </div>
  );
}

export default App;
