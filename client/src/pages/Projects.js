import ProjectCard from "../components/ProjectCard";

function Projects() {

  const projects = [

    {
      title: "Vehicle Management System",
      description: "Full stack vehicle service booking platform.",
      tech: "React | Node | Express",
      github: "https://github.com/Siddhiamup/vehicle-service-frontend",
      live: "https://vehicle-service-frontend.vercel.app",
      image: "/client/public/images/VehicleServicePortal.png"
    },

    {
      title: "SIGMAGPT",
      description: "AI-powered chatbot using OpenAI API.",
      tech: "React | OpenAI",
      github: "https://github.com/Siddhiamup/SIGMAGPT",
      image: "/client/public/images/SIGMAGPT.png"
    },

    {
      title: "WeatherWise",
      description: "Real-time weather application.",
      tech: "JavaScript | API",
      github: "https://github.com/Siddhiamup/WeatherWise",
      image: "/client/public/images/WeatherWise.png"
    },

    {
      title: "AgriDisha",
      description: "Agriculture management system.",
      tech: "PHP | MySQL",
      github: "https://github.com/Siddhiamup/AgriDisha",
      image: "/client/public/images/AsmallWorld.png"
    },

    {
      title: "ApnaSathi",
      description: "Companion finding platform.",
      tech: "HTML | CSS | JS",
      github: "https://github.com/Siddhiamup/ApnaSathi",
      image: "/client/public/images/ApnaSathi.jpeg"
    }

  ];

  return (

    <section className="container mt-5">

      <h2 className="section-title">My Projects</h2>

      <div className="row">

        {projects.map((project, index) => (

          <div className="col-md-6 mb-4" key={index}>
            <ProjectCard {...project} />
          </div>

        ))}

      </div>

    </section>

  );
}

export default Projects;