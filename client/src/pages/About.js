
function About() {

  return (

    <div className="container mt-5">

      {/* Section Title */}
      <h2 className="text-center mb-4">
        About Me
      </h2>

      <div className="row">

        {/* Profile Image */}
        <div className="col-md-4 text-center">

          <img
            src="/profile.jpg"
            alt="profile"
            className="img-fluid rounded-circle"
            width="200"
          />

        </div>

        {/* Description */}
        <div className="col-md-8">

          <p>
            I am a Full Stack Developer with strong experience in
            React.js, Node.js, and modern web technologies.
          </p>

          <p>
            I enjoy building scalable applications and solving
            real-world problems through technology.
          </p>

          <p>
            My goal is to grow as a developer and contribute to
            innovative software products.
          </p>

        </div>

      </div>

    </div>

  );

}

export default About;