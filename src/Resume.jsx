export default function Resume() {
  return (
    <>
      <Heading
        firstName="Gianni"
        lastName="Esposito"
<<<<<<< HEAD
        position="Web developer">
        <h4><em>Self-taught enthusiastic and passionate web and frontend developer</em>.</h4>
=======
        position="Web developer"
      >
        <h4><em>Self-taught fullstack creative, enthusiastic and passionate web and frontend developer</em>.</h4>
>>>>>>> adb013e5099259bd43bc68265df52bfdfbe2bc81
        <Contacts 
          email="gianniesp@outlook.com"
          tel="+39 328 9452130"
          linkedin="https://www.linkedin.com/in/g4esp/"
          github="https://github.com/g4esp/"
        />
      </Heading>
      <hr />
      <Skills />
      <hr />
      <Experience />
      <hr />
      <Education />
    </>
  )
}

const Heading = ({firstName, lastName, position, children}) => (
  <>
    <h1>{firstName} {lastName} <span>// {position}</span></h1>
    {children}
  </>
)

const Contacts = ({email, tel, linkedin, github}) => (
  <ul className="contacts">
    <li><a href={`mailto:${email}`}>{email}</a></li>
    <li><a href={`tel:${tel.split(' ').join('')}`}>{tel}</a></li>
    <li><a href={linkedin}>Linkedin</a></li>
    <li><a href={github}>GitHub</a></li>
  </ul>
)

const Skills = () => {
<<<<<<< HEAD
  const langs = ["HTML", "CSS", "🤟🏻 JavaScript"]
  const tools = ["Wordpress,", "PHP,", "WP Rest API,", "React,", "Nextjs,", "Node,", "MongoDB,", "MySQL,", "GraphQL,", "Tailwind,", "Bootstrap,", "GitHub,", "Netlify,", "Figma,", "Notion,", "..."]
=======
  const langs = ["HTML,", "CSS,", "🤟🏻 JavaScript"]
  const tools = ["Wordpress,", "PHP,", "WP Rest API,", "React,", "Nextjs,", "Node,", "MongoDB,", "MySQL,", "GraphQL,", "SCSS,", "Tailwind,", "Bootstrap,", "GitHub,", "Netlify,", "Figma,", "Notion,", "..."]
>>>>>>> adb013e5099259bd43bc68265df52bfdfbe2bc81
  return (
    <>
    <h2>SKILLS <span>// Tech and tools I use in every day work</span></h2>
    <ul className="langs">
<<<<<<< HEAD
      <li><h4>[{langs.join(', ')}]</h4></li>
    </ul>
    <ul className="tools">
      [{tools.map((tool,i) => (<li key={i}>{tool}</li>))}]
=======
    [{langs.map((lang,i) => (<li key={i}><h4>{lang}</h4></li>))}]
    </ul>
    <ul className="tools">
     [{tools.map((tool,i) => (<li key={i}>{tool}</li>))}]
>>>>>>> adb013e5099259bd43bc68265df52bfdfbe2bc81
    </ul>
    </>
  )
}

const Experience = () => {
  const lastJobs = [
    {
      position: "Web developer",
      company: "Think2it",
      dates: "Jan 2015 - Present",
      role: "Detail-oriented Wordpress developer skilled in the creation of custom themes, decoupled WP-based SPAs - through the WP Rest API. UI/UX designer and developer."
    },
    {
      position: "Web designer",
      company: "Freelance",
      dates: "Jan 2010 - Dec 2014",
      role: "Web designer, Wordpress themes developer."
    }
  ]
  return (
    <>
      <h2>EXPERIENCE <span>// Work recent history</span></h2>
      {lastJobs.map(({position, company, dates, role}, i) => (
        <div key={i} className="exp">
          <h4>{position} <span>// {dates}</span></h4>
          <h5>{company}</h5>
          <p>{role}</p>
        </div>
      ))}
    </>
  )
}

const Education = () => (
    <>
      <h2>EDUCATION <span>// Educational history</span></h2>
      <div className="edu">
        <h4>Bachelor's degree in Communication Sciences</h4>
        <h4>Secondary School Diploma in Computer Science</h4>
      </div>
    </>
)
