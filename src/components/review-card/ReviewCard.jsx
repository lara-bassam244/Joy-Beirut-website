import "./reviewcard.css";

export default function ReviewCard({ name, text, variant = "normal" }) {
  return (
    <div className={`review-card ${variant === "featured" ? "featured" : ""}`}>
      <h4 className="review-name">{name}</h4>
      <p className="review-text">{text}</p>
    </div>
  );
}
