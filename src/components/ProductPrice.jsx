function ProductPrice({ price, discount }) {
  const discountedPrice = price - (price * discount) / 100;
  return (
    <div>
      <p>Ціна: {price} грн</p>
      <p>Знижка: {discount}%</p>
      <p>Ціна зі знижкою: {discountedPrice} грн</p>
    </div>
  );
}

export default ProductPrice;
