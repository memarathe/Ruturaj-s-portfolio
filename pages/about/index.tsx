const About = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-16 lg:mb-30 lg:scroll-mt-16"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4 text-justify">
        With a Master&apos;s in Computer Science from {" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://luddy.indiana.edu/index.html"
            target="_blank"
            rel="noreferrer"
          >
          Indiana University Bloomington {" "}
          </a>
          and a work experience of 3 years as a software engineer, my journey reflects a deep passion for technology 
          and continuous learning. Proficient in Backend software development, optimizing Database systems 
          and building Machine Learning workflows, I&apos;m ready to join your team and build software that helps the society.
        </p>
        <p className="mb-4 text-justify">
          {" "}
          
        </p>
      </div>

      <div>
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 ">
          Skill Sets
        </h2>
        <ul className="mt-2 flex flex-wrap" aria-label="Technical and Professional Skills">
          <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
              Python & FastAPI
            </div>
          </li>
          <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
              Microservices Architecture
            </div>
          </li>
          <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
              AWS (EC2, S3, Lambda)
            </div>
          </li>
          <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
              SQL & Data Modeling
            </div>
          </li>
          <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
              PostgreSQL & Oracle
            </div>
          </li>
          <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
              PL/SQL & Query Performance Tuning
            </div>
          </li>
          <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
              Project Management
            </div>
          </li>
          <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
              Stakeholder Presentations & Decision Making
            </div>
          </li>
          <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
              Communication Transparency
            </div>
          </li>
          <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
              System Design & Scalability
            </div>
          </li>
          <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
              Machine Learning (XGBoost & Scikit-learn)
            </div>
          </li>
          <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
              Vector Databases (Pinecone/Milvus)
            </div>
          </li>
          <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
              RAG & Generative AI
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
