// import { FaGithub, FaLinkedin } from "react-icons/fa";

// function Hero() {

//   return (

//     <section className="hero-section text-center text-light">

//       <div className="container">

//         {/* Developer Name */}
//         <h1 className="display-4 fw-bold">
//           Hi, I'm <span className="text-info">Siddhi</span>
//         </h1>

//         {/* Role */}
//         <h3 className="mt-3">
//           Full Stack Developer
//         </h3>

//         {/* Short description */}
//         <p className="mt-3">
//           I build scalable web applications using React, Node.js, and modern technologies.
//         </p>

//         {/* Social Links */}
//         <div className="mt-4">

//           <a href="https://github.com" className="btn btn-outline-light me-3">
//             <FaGithub /> GitHub
//           </a>

//           <a href="https://linkedin.com" className="btn btn-info">
//             <FaLinkedin /> LinkedIn
//           </a>

//         </div>

//       </div>

//     </section>

//   );
// }

// export default Hero;

import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {

  return (

    <section className="text-center">

      <div className="container">

        {/* Developer Name */}
        <h1 className="display-4 fw-bold">
          Hi, I'm <span className="text-info">Siddhi</span>
        </h1>
        <p>
  Open to Software Developer roles | Immediate Joiner
</p>

        {/* Title */}
        <h3 className="mt-3">
          Full Stack Developer
        </h3>

        {/* Description */}
       <p className="mt-3">
  Motivated Full Stack Developer with hands-on experience in building scalable web applications using React.js, Node.js, and Java-based technologies. Strong in problem-solving, REST APIs, and modern UI development, with a passion for creating impactful software solutions.
</p>

        {/* Social Links */}
        <div className="mt-4">

          <a
            href="https://github.com/Siddhiamup"
            className="btn btn-dark me-3"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="www.linkedin.com/in/siddhi-amup-272245225"
            className="btn btn-primary"
          >
            <FaLinkedin /> LinkedIn
          </a>

        </div>

      </div>

    </section>

  );
}

export default Hero;