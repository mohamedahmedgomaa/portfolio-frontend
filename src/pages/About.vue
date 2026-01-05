<template>
  <section class="page">
    <div class="container">
      <div class="top">
        <div>
          <p class="kicker">ABOUT</p>
          <h1 class="title">Mohamed Gomaa</h1>
          <p class="sub">
            Senior Full Stack Developer (Laravel & ASP.NET Core) with <b>6+ years</b> building
            <b>scalable</b>, <b>secure</b>, and <b>high-performance</b> web applications and RESTful APIs.
            Experienced with authentication systems (JWT / Passport) and frontend frameworks (Angular, Vue, Livewire).
          </p>
        </div>

        <div class="topActions">
          <RouterLink class="btn" to="/contact">Contact</RouterLink>
          <RouterLink class="btn ghost" to="/projects">Projects</RouterLink>
        </div>
      </div>

      <div class="facts">
        <div class="fact">
          <p class="label">Location</p>
          <p class="value">Riyadh, Saudi Arabia</p>
        </div>
        <div class="fact">
          <p class="label">Primary Stack</p>
          <p class="value">Laravel • ASP.NET Core • SQL</p>
        </div>
        <div class="fact">
          <p class="label">Frontend</p>
          <p class="value">Angular • Vue • Livewire</p>
        </div>
        <div class="fact">
          <p class="label">Security</p>
          <p class="value">JWT • Passport</p>
        </div>
      </div>

      <div class="section">
        <div class="sectionHead">
          <h2 class="h2">Professional Experience</h2>
          <p class="hint">Timeline of roles and core responsibilities.</p>
        </div>

        <ol class="timeline">
          <li class="tItem">
            <div class="dot"></div>
            <div class="tBody">
              <div class="tTop">
                <p class="tTitle">Backend Developer — Munjz Property Management Services</p>
                <p class="tMeta">Riyadh, Saudi Arabia • Jan 2023 – Dec 2025</p>
              </div>
              <ul class="list">
                <li>Developed scalable backend APIs using Laravel.</li>
                <li>Integrated business logic for orders, invoices, wallets, and packages.</li>
                <li>Applied repository pattern to improve maintainability.</li>
                <li>Collaborated with QA, product, frontend, and mobile teams.</li>
              </ul>
            </div>
          </li>

          <li class="tItem">
            <div class="dot"></div>
            <div class="tBody">
              <div class="tTop">
                <p class="tTitle">Full Stack Developer — Al-Atraf Company</p>
                <p class="tMeta">Egypt • Jan 2021 – Dec 2022</p>
              </div>
              <ul class="list">
                <li>Developed e-commerce platform using Laravel.</li>
                <li>Implemented Livewire components for dynamic interfaces.</li>
                <li>Built AJAX-based CRUD data management system.</li>
                <li>Collaborated with mobile teams using GitLab.</li>
              </ul>
            </div>
          </li>

          <li class="tItem">
            <div class="dot"></div>
            <div class="tBody">
              <div class="tTop">
                <p class="tTitle">Full Stack Developer — Sinbad</p>
                <p class="tMeta">Egypt • Jan 2020 – Dec 2020</p>
              </div>
              <ul class="list">
                <li>Built RESTful APIs supporting mobile applications.</li>
                <li>Implemented JWT authentication for secure access.</li>
                <li>Optimized API performance and improved response times.</li>
                <li>Refactored codebase to improve structure and readability.</li>
              </ul>
            </div>
          </li>

          <li class="tItem">
            <div class="dot"></div>
            <div class="tBody">
              <div class="tTop">
                <p class="tTitle">Junior Full Stack Developer — Ipda3 Tech Company</p>
                <p class="tMeta">Egypt • Aug 2019 – Dec 2019</p>
              </div>
              <ul class="list">
                <li>Learned professional web development best practices.</li>
                <li>Enhanced admin panels and role management.</li>
                <li>Implemented authentication and authorization systems.</li>
              </ul>
            </div>
          </li>
        </ol>
      </div>

      <div class="section">
        <div class="sectionHead">
          <h2 class="h2">.NET & Angular Projects</h2>
          <p class="hint">Highlighted recent full-stack work.</p>
        </div>

        <div class="cards2">
          <div class="card">
            <p class="cardKicker">2025</p>
            <h3 class="cardTitle">ChatApp — Full Stack Web Application</h3>
            <p class="cardSub">
              Built with ASP.NET Core 9.0 and Angular 20. Implemented JWT authentication and SignalR real-time chat,
              plus user profiles, photo gallery, likes, matching, and filtering. Deployed to Microsoft Azure.
            </p>
            <div class="tags">
              <span class="tag">ASP.NET Core 9</span>
              <span class="tag">Angular 20</span>
              <span class="tag">SignalR</span>
              <span class="tag">JWT</span>
              <span class="tag">Azure</span>
            </div>
          </div>

          <div class="card">
            <p class="cardKicker">2025</p>
            <h3 class="cardTitle">Full-Stack App — Udemy Course Project</h3>
            <p class="cardSub">
              Built from scratch using ASP.NET Core and Angular. Implemented SignalR chat and real-time updates,
              responsive UI using Tailwind CSS and DaisyUI, and deployed to Azure.
            </p>
            <div class="tags">
              <span class="tag">ASP.NET Core</span>
              <span class="tag">Angular</span>
              <span class="tag">SignalR</span>
              <span class="tag">Tailwind</span>
              <span class="tag">Azure</span>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="sectionHead">
          <h2 class="h2">Technical Skills</h2>
          <p class="hint">Core competencies across backend, frontend, and tooling.</p>
        </div>

        <div class="skills">
          <div class="skillBox">
            <p class="label">Backend</p>
            <p class="value">Laravel, ASP.NET Core, PHP, C#, REST APIs, Integrations</p>
          </div>
          <div class="skillBox">
            <p class="label">Security</p>
            <p class="value">JWT Authentication, Passport, Authorization</p>
          </div>
          <div class="skillBox">
            <p class="label">Databases</p>
            <p class="value">MySQL, SQLite, Data modeling, Query optimization</p>
          </div>
          <div class="skillBox">
            <p class="label">Frontend</p>
            <p class="value">Angular, Vue.js, Livewire, Tailwind CSS</p>
          </div>
          <div class="skillBox">
            <p class="label">Tools</p>
            <p class="value">Git, GitLab, Collaboration with QA/Product/Mobile teams</p>
          </div>
          <div class="skillBox">
            <p class="label">Mindset</p>
            <p class="value">Clean code, refactoring, performance, maintainability</p>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="sectionHead">
          <h2 class="h2">Education & Courses</h2>
          <p class="hint">Academic background and ongoing learning.</p>
        </div>

        <div class="cards2">
          <div class="card">
            <h3 class="cardTitle">Bachelor of Computer Science</h3>
            <p class="cardSub">Misr Academy for Engineering & Technology, Egypt — 2019</p>
          </div>

          <div class="card">
            <h3 class="cardTitle">Courses</h3>
            <ul class="list">
              <li>Build an App with ASP.NET Core & Angular — Udemy</li>
              <li>HTML, CSS, JavaScript, Bootstrap — Elzero Web School</li>
              <li>jQuery & Advanced JavaScript — Elzero Web School</li>
              <li>PHP, OOP, Laravel Framework — PHP Anonymous</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="sectionHead">
          <h2 class="h2">Languages</h2>
          <p class="hint">Communication readiness.</p>
        </div>

        <div class="facts facts2">
          <div class="fact">
            <p class="label">Arabic</p>
            <p class="value">Native</p>
          </div>
          <div class="fact">
            <p class="label">English</p>
            <p class="value">Fluent</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.page {
  min-height: calc(100vh - var(--header-h));
  padding: 28px 0 22px;
}

.top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  padding-top: 10px;
}

.kicker {
  letter-spacing: 0.35em;
  text-transform: uppercase;
  font-size: 12px;
  color: var(--muted);
}

.title {
  margin-top: 8px;
  font-size: clamp(36px, 4.6vw, 64px);
  font-weight: 900;
  line-height: 1.05;
  color: var(--text);
}

.sub {
  margin-top: 12px;
  max-width: 78ch;
  font-size: 16px;
  color: var(--muted);
  line-height: 1.8;
}

.topActions {
  display: flex;
  gap: 10px;
  align-items: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 14px;
  background: var(--accent);
  color: #fff;
  font-size: 13px;
  font-weight: 900;
  text-decoration: none;
  box-shadow: 0 12px 26px rgba(109, 40, 217, 0.14);
  transition: transform 150ms ease, opacity 150ms ease;
}
.btn:hover { transform: translateY(-1px); opacity: 0.95; }
.btn.ghost {
  background: var(--panel);
  color: var(--text);
  border: 1px solid rgba(20, 30, 50, 0.12);
  box-shadow: none;
}

.facts {
  margin-top: 16px;
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
@media (max-width: 900px) { .facts { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .facts { grid-template-columns: 1fr; } }

.facts2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
@media (max-width: 560px) { .facts2 { grid-template-columns: 1fr; } }

.fact {
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.60);
  border: 1px solid rgba(20, 30, 50, 0.12);
  padding: 14px;
}

.label {
  font-size: 11px;
  color: var(--muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 900;
}

.value {
  margin-top: 4px;
  font-size: 13px;
  font-weight: 900;
  color: var(--text);
}

.section { margin-top: 18px; }

.sectionHead {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.h2 {
  font-size: 14px;
  font-weight: 900;
  color: var(--text);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hint { font-size: 12px; color: var(--muted); font-weight: 700; }

.timeline {
  margin-top: 12px;
  list-style: none;
  padding: 0;
  display: grid;
  gap: 12px;
}

.tItem {
  display: grid;
  grid-template-columns: 14px 1fr;
  gap: 12px;
  align-items: flex-start;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: var(--accent);
  margin-top: 18px;
  box-shadow: 0 0 0 4px rgba(109, 40, 217, 0.14);
}

.tBody {
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.60);
  border: 1px solid rgba(20, 30, 50, 0.12);
  padding: 16px;
}

.tTop {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
}

.tTitle { font-size: 15px; font-weight: 900; color: var(--text); }
.tMeta { font-size: 12px; color: var(--muted); font-weight: 800; }

.list {
  margin-top: 10px;
  padding-left: 18px;
  color: var(--text);
  font-size: 13px;
  font-weight: 700;
  line-height: 1.7;
}
.list li { margin: 6px 0; }

.cards2 { margin-top: 12px; display: grid; gap: 12px; }
@media (min-width: 900px) { .cards2 { grid-template-columns: 1fr 1fr; } }

.card {
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.60);
  border: 1px solid rgba(20, 30, 50, 0.12);
  padding: 16px;
}

.cardKicker {
  font-size: 12px;
  color: var(--muted);
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.cardTitle { margin-top: 6px; font-size: 16px; font-weight: 900; color: var(--text); }

.cardSub {
  margin-top: 8px;
  font-size: 13px;
  color: var(--muted);
  line-height: 1.7;
  font-weight: 700;
}

.tags { margin-top: 12px; display: flex; flex-wrap: wrap; gap: 8px; }
.tag {
  font-size: 12px;
  font-weight: 900;
  color: var(--text);
  padding: 8px 10px;
  border-radius: 999px;
  background: rgba(109, 40, 217, 0.10);
  border: 1px solid rgba(109, 40, 217, 0.18);
}

.skills { margin-top: 12px; display: grid; gap: 12px; }
@media (min-width: 900px) { .skills { grid-template-columns: 1fr 1fr 1fr; } }

.skillBox {
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.60);
  border: 1px solid rgba(20, 30, 50, 0.12);
  padding: 14px;
}
</style>
