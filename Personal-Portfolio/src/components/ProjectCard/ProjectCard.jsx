import "./ProjectCard.css";

const ProjectCard = ({ image, title, description, demo, details }) => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 18;
    const rotateY = (x - centerX) / 18;

    card.style.transform = `
      perspective(800px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-12px)
      scale(1.03)
    `;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `
      perspective(800px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0)
      scale(1)
    `;
  };

  return (
    <div
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-image">
        <img src={image} alt={title} />
      </div>

      <div className="project-body">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="project-actions">
          <a href={demo} target="_blank" rel="noreferrer" className="demo">
            Live Demo ↗
          </a>
          <a href={details} className="details">
            Details →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
