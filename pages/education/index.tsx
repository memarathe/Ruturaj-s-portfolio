import Image from "next/image";

const Education = () => {
  return (
    <>
      <section
        id="education"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Selected education"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Education
          </h2>
        </div>
        <div>
          <ul className="group/list">
            <li className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                      href="https://luddy.indiana.edu/index.html"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Indiana University Bloomington"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        Indiana University Bloomington
                        <span className="inline-block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </h3>
                  <header aria-label="August 2024 — May 2025">
                    August 2023 - May 2025
                  </header>
                  <header aria-label="August 2023 — May 2025">
                    <b>Master&apos;s in Computer Science (GPA: 3.85)</b>
                  </header>
                  <div className="mt-2 text-sm leading-normal">
                  <ul>
                      <li>
                        - Mastered Software Engineering fundamentals.
                      </li>
                      <li>
                        - Developed skills in Machine Learning and Data analysis.
                      </li>
                      <li>
                        - Acquired knowledge of Cloud computing and AWS.
                      </li>
                      <li>
                        - Gained expertise of Software Development Life Cycle.
                      </li>
                      <li>
                        - Developed proficiency in System design.
                      </li>
                      <li>
                        - Learned about Big data and Distributed computing.
                      </li>
                    </ul>
                  </div>
                </div>
                <Image
                  alt=""
                  loading="lazy"
                  width="200"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  className="rounded transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  style={{ color: "transparent" }}
                  src={"/images/educations/IU.png"}
                />
              </div>
            </li>
            <li className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                      href="https://vtu.ac.in/en/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="VTU"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        Visvesvaraya Technological University
                        <span className="inline-block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </h3>
                  <header aria-label="June 2016 to Aug 2020">
                  June 2016 - Aug 2020
                  </header>
                  <header aria-label="June 2016 to Aug 2020">
                    <b>Bachelor&apos; in Software Engineering (GPA: 8.08)</b>
                  </header>
                  <div className="mt-2 text-sm leading-normal">
                    <ul>
                      <li>
                        - Learnt the fundamentals of Computer Science.
                      </li>
                      <li>
                        - Participated in competitive programming contests.
                      </li>
                      <li>
                        - Mentored first-year students.
                      </li>
                      <li>
                        - Developed problem-solving skills in C, Java, and
                        Python.
                      </li>
                      <li>
                        - Gained understanding of OS, OOP, data structures, and algorithms.
                      </li>
                      <li>
                        - Knowledgeable in digital electronics and web development.
                      </li>
                      <li>
                        - Experienced in DBMS (Database) and version control using Git.
                      </li>
                      <li>
                        - Acquired skills in software testing.
                      </li>
                      <li>
                        - Volunteered to conduct coding competitions and project Exhibitions.
                      </li>
                    </ul>
                  </div>
                </div>
                <Image
                  alt=""
                  loading="lazy"
                  width="200"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  className="rounded transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  style={{ color: "transparent" }}
                  src={"/images/educations/vtu.jpg"}
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Education;
