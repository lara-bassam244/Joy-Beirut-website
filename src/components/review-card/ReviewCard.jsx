import "./reviewcard.css";

export default function ReviewCard({ name, text, variant }) {
  return (
    <div className={`review-card ${variant}`}>
      <h4 className="review-name">{name}</h4>
      <p className="review-text">{text}</p>
    </div>
  );
}
