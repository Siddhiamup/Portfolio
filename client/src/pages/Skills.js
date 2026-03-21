
function Skills() {

  const skills = [
    "React.js",
    "Node.js",
    "Express.js",
    "JavaScript",
    "MySQL",
    "Bootstrap",
    "Git",
    "REST APIs"
  ];

  return (

    <section>

      <div className="container">

        <h2 className="section-title">
          Technical Skills
        </h2>

        <div className="row">

          {skills.map((skill, index) => (

            <div className="col-md-3 mb-4" key={index}>

              <div className="card p-4 text-center shadow">

                {skill}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Skills;