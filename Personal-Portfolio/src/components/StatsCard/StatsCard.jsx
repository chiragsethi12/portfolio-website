import { useEffect, useRef } from "react";
import "./StatsCard.css";

const StatsCard = ({ value, title, description }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className="stats-card fade-card">
      <h2>{value}</h2>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default StatsCard;
