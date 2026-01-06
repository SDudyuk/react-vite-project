import "./FilmItem.css";

export default function FilmItem({index, data}) {
  const { id, title, year, rate} = data;
  return (
    <li key={id} className="film-item">
      <strong>#{index}</strong>{" "}
      <span className="film-title">{title}</span>{" "}
      <span className="film-year">{year}</span> - ⭐ {rate}
    </li>
  );
}