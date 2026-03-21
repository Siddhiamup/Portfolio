
function ProjectCard({ title, description, tech, github, live, image }) {

  return (

    <div className="card shadow h-100">

      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
      />

      <div className="card-body">

        {/* Title */}
        <h4>{title}</h4>

        {/* Description */}
        <p>{description}</p>

        {/* Tech Stack */}
        <p className="text-info">{tech}</p>

        {/* Buttons */}
        <div className="mt-3">

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light me-2"
          >
            View Code
          </a>

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          )}

        </div>

      </div>

    </div>

  );
}

export default ProjectCard;