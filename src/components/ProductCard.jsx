function UserProfile() {
  const userName = "Олена";
  const userAge = 25;
  
  return (
    <div>
      <h1>Профіль користувача</h1>
      <img src="avatar.jpg" alt="Аватар" className="avatar" />
      <p>Ім'я: {userName}</p>
      <p>Вік: {userAge}</p>
      {/* Це коментар */}
      <input type="text" placeholder="Введіть текст" />
      <br />
    </div>
  );
}

export default function ProductCard() {
  return (
    <div className="product-card">
      <h3>Ноутбук 'DreamBook Pro'</h3>
      <p>
        Ціна: <strong>35 000 грн</strong>
      </p>
      <button>Додати в кошик</button>
    </div>
  )
}