// src/components/Expertise.jsx
export default function Expertise() {
  const experiences = [
    {
      title: "QUALITY FOCUS",
      text: "With over 13 years of tech experience, I optimize product Quality across GUIs, UI Components, APIs, and Databases."
    },
    {
      title: "AUTOMATION ARCHITECTURE",
      text: "Deep mastery of Node.js-driven engines including WebDriverIO, NightwatchJS, and CucumberJS over the last 5 years."
    },
    {
      title: "AGILE CI/CD",
      text: "Hands-on orchestration of automated deployment and test pipelines inside Azure DevOps and Jenkins ecosystems."
    }
  ];

  return (
    <section>
      <h2>What I do</h2>
      <div className="skills-grid">
        {experiences.map((item, index) => (
          <div key={index} className="skill-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
