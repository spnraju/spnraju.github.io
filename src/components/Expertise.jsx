// src/components/Expertise.jsx
export default function Expertise() {
  const experiences = [
    {
      title: "QUALITY FOCUS",
      text: "With over 13 years of experience across enterprise products, I drive end‑to‑end quality strategy across Mobile Apps, Web, UI components, APIs, and data layers. I focus on reliability, observability, and fast feedback loops so teams can ship with confidence."
    },
    {
      title: "AUTOMATION ARCHITECTURE",
      text: "I design and evolve test automation platforms with a strong emphasis on scalability, code quality, and reuse. I turn fragmented test efforts into cohesive, standards‑driven frameworks that are easy to use, extend and maintain."
    },
    {
      title: "CI/CD",
      text: "I integrate automated quality checks deeply into Azure DevOps and Jenkins, building CI/CD workflows that run fast, stable test suites on every change. I collaborate closely with engineering and DevOps to enforce quality gates, reduce flaky tests, and keep pipelines both reliable and developer‑friendly."
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
