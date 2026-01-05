<template>
  <section class="hero">
    <div class="grid">
      <!-- Left -->
      <div class="left">
        <p class="kicker">HI, MY NAME IS</p>

        <h1 class="title">Mohamed Gomaa.</h1>

        <p class="sub">
          <span class="strong">Senior Full Stack Developer</span> specializing in
          <span class="strong">Laravel</span> and <span class="strong">ASP.NET Core</span>,
          building <span class="strong">scalable</span>, <span class="strong">secure</span>, and
          <span class="strong">high-performance</span> web applications.
        </p>

        <div class="badges">
          <span class="badge">6+ Years Experience</span>
          <span class="badge">REST APIs</span>
          <span class="badge">JWT / Passport</span>
          <span class="badge">Angular • Vue • Livewire</span>
          <span class="badge">Azure • SignalR</span>
        </div>

        <div class="actions">
          <RouterLink to="/projects" class="btnPrimary">View Projects</RouterLink>
          <RouterLink to="/contact" class="btnGhost">Hire Me</RouterLink>
        </div>

        <div class="metaRow">
          <div class="metaItem">
            <p class="metaLabel">Location</p>
            <p class="metaValue">Riyadh, Saudi Arabia</p>
          </div>

          <div class="metaItem">
            <p class="metaLabel">Core Stack</p>
            <p class="metaValue">Laravel • ASP.NET Core • SQL</p>
          </div>

          <div class="metaItem">
            <p class="metaLabel">Strength</p>
            <p class="metaValue">Architecture • Optimization • Clean Code</p>
          </div>
        </div>

        <div class="proof">
          <div class="proofCard">
            <p class="proofTitle">Latest .NET Project</p>
            <p class="proofText">
              ChatApp (ASP.NET Core 9 + Angular 20) with JWT + SignalR real-time features, deployed to Azure.
            </p>
          </div>

          <div class="proofCard">
            <p class="proofTitle">Laravel Experience</p>
            <p class="proofText">
              Scalable backend APIs, business logic modules, repository pattern, and integrations (orders/invoices/wallets).
            </p>
          </div>
        </div>

        <div class="scrollHint">
          <div class="line"></div>
          <p>SCROLL</p>
        </div>
      </div>

      <!-- Right -->
      <div class="right">
        <AvatarEyes />
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import AvatarEyes from '../components/AvatarEyes.vue'
</script>

<style scoped>
.hero {
  min-height: calc(100vh - 86px); /* header تقريبًا */
  display: flex;
  align-items: center;
}

.grid {
  width: 100%;
  display: grid;
  gap: 44px;
  align-items: center;
}
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: 1.25fr 0.9fr;
  }
}

.kicker {
  letter-spacing: 0.35em;
  text-transform: uppercase;
  font-size: 12px;
  color: var(--muted);
  margin-bottom: 10px;
}

.title {
  font-size: clamp(54px, 6.2vw, 92px);
  line-height: 0.92;
  font-weight: 900;
  color: var(--text);
}

.sub {
  max-width: 62ch;
  font-size: 18px;
  color: var(--muted);
  margin-top: 14px;
}

.strong {
  color: var(--text);
  font-weight: 900;
}

.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
  max-width: 720px;
}

.badge {
  font-size: 12px;
  font-weight: 800;
  color: var(--text);
  background: var(--panel);
  border: 1px solid rgba(20, 30, 50, 0.12);
  padding: 8px 12px;
  border-radius: 999px;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 18px;
}

.btnPrimary {
  border-radius: 16px;
  padding: 12px 18px;
  background: var(--accent);
  color: white;
  font-weight: 900;
  font-size: 13px;
  box-shadow: 0 12px 30px rgba(109, 40, 217, 0.22);
  transition: transform 150ms ease, opacity 150ms ease;
}
.btnPrimary:hover { transform: translateY(-1px); opacity: 0.95; }

.btnGhost {
  border-radius: 16px;
  padding: 12px 18px;
  background: var(--panel);
  border: 1px solid rgba(20, 30, 50, 0.12);
  color: var(--text);
  font-weight: 900;
  font-size: 13px;
  transition: transform 150ms ease, border-color 200ms ease;
}
.btnGhost:hover {
  transform: translateY(-1px);
  border-color: rgba(109, 40, 217, 0.35);
}

.metaRow {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  padding-top: 18px;
  max-width: 820px;
}
@media (max-width: 740px) {
  .metaRow { grid-template-columns: 1fr; }
}

.metaItem {
  border-radius: 18px;
  background: var(--panel);
  border: 1px solid rgba(20, 30, 50, 0.10);
  padding: 14px;
}

.metaLabel {
  font-size: 11px;
  color: var(--muted);
}

.metaValue {
  margin-top: 2px;
  font-size: 13px;
  font-weight: 900;
  color: var(--text);
}

.proof {
  display: grid;
  gap: 12px;
  margin-top: 18px;
  max-width: 820px;
}
@media (min-width: 740px) {
  .proof { grid-template-columns: 1fr 1fr; }
}

.proofCard {
  border-radius: 18px;
  background: rgba(255,255,255,0.55);
  border: 1px solid rgba(20, 30, 50, 0.10);
  padding: 14px;
}

.proofTitle {
  font-size: 12px;
  color: var(--muted);
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.proofText {
  margin-top: 6px;
  font-size: 13px;
  color: var(--text);
  font-weight: 700;
  line-height: 1.5;
}

.scrollHint {
  margin-top: 34px;
  display: flex;
  align-items: center;
  gap: 14px;
  color: var(--muted);
  font-size: 12px;
  letter-spacing: 0.35em;
}

.line {
  width: 60px;
  height: 1px;
  background: rgba(20, 30, 50, 0.18);
}

.right {
  display: flex;
  justify-content: center;
}
@media (min-width: 1024px) {
  .right { justify-content: flex-end; }
}
</style>
