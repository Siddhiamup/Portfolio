
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
            src="client\public\images\IMG-20250120-WA0053.jpg"
            alt="profile"
            className="img-fluid rounded-circle"
            width="200"
          />

        </div>

        {/* Description */}
        <div className="col-md-8">

          <p>
  I am a Full Stack Developer with a strong foundation in both frontend and backend development. I have hands-on experience in building real-world applications using technologies like React.js, Node.js, Express.js, Java, and Spring Boot.
</p>

<p>
  I have developed multiple projects including a Vehicle Service Management System, an AI-powered ChatGPT clone, and a real-time Weather Application. These projects have strengthened my understanding of REST APIs, database management, and scalable application architecture.
</p>

<p>
  As a BBA-CA graduate, I bring a combination of technical and analytical skills. I am a quick learner, highly adaptable, and passionate about solving real-world problems through technology.
</p>

        </div>

      </div>

    </div>

  );

}

export default About;