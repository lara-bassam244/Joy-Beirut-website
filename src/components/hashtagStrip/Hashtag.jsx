import "./Hashtag.css";


export default function Hashtag({
  tags,
  duration = 25,
  repeat = 2,
}) {
  const repeated = Array.from({length:repeat}, () => tags).flat();

  return (
    <section className="hashtag-strip">
      <div className="hashtag-track"
      style={{animationDuration: `${duration}s`}}
      >
        {repeated.map((tag, index) => (
           <span className="hashtag-item" key={index}>
            {tag}
          </span>
        
        ))}
      </div>
    </section>
  );
}
