
function ProjectCard({ title, description, tech, github, live, image }) {

  return (

    <div className="card project-card shadow h-100">

      {/* Image */}
      <div className="image-container">
        <img src={image} alt={title} />
      </div>

      <div className="card-body">

        <h4>{title}</h4>

        <p className="text-muted">{description}</p>

        <p className="text-info">{tech}</p>

        <div className="mt-3">

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light me-2"
          >
            Code
          </a>

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Live
            </a>
          )}

        </div>

      </div>

    </div>

  );
}

export default ProjectCard;