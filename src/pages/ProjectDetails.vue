<template>
  <section v-if="project" class="page">
    <div class="container">
      <div class="top">
        <div>
          <p class="kicker">CASE STUDY</p>
          <h1 class="title">{{ project.title }}</h1>
          <p class="sub">{{ project.subtitle }}</p>
        </div>

        <div class="topActions">
          <RouterLink class="backBtn" to="/projects">← Back</RouterLink>

          <a v-if="project.links?.live" class="actionBtn" :href="project.links.live" target="_blank" rel="noreferrer">
            Live
          </a>

          <a
              v-if="project.links?.github"
              class="actionBtn ghost"
              :href="project.links.github"
              target="_blank"
              rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      <div class="summary">
        <div class="box">
          <p class="label">Role</p>
          <p class="value">{{ project.role }}</p>
        </div>

        <div class="box">
          <p class="label">Period</p>
          <p class="value">{{ project.period }}</p>
        </div>

        <div class="box">
          <p class="label">Focus</p>
          <p class="value">{{ focus }}</p>
        </div>
      </div>

      <div class="card">
        <h2 class="h2">Tech Stack</h2>
        <div class="tags">
          <span v-for="s in project.stack" :key="s" class="tag">{{ s }}</span>
        </div>
      </div>

      <div class="twoCols">
        <div class="card">
          <h2 class="h2">What I built</h2>
          <ul class="list">
            <li v-for="h in project.highlights" :key="h">{{ h }}</li>
          </ul>
        </div>

        <div class="card">
          <h2 class="h2">Impact</h2>
          <ul class="list">
            <li v-for="i in project.impact" :key="i">{{ i }}</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <h2 class="h2">Notes</h2>
        <p class="p">
          This case study is presented in a minimal format for clarity.
          Next, we can add more details like architecture diagram, modules breakdown, and screenshots.
        </p>
      </div>

      <div class="bottom">
        <RouterLink class="backBtn" to="/projects">← Back to Projects</RouterLink>
      </div>
    </div>
  </section>

  <section v-else class="page">
    <div class="container notFound">
      <p class="nfTitle">Project not found</p>
      <p class="nfSub">The project you’re looking for doesn’t exist (or the slug is wrong).</p>
      <RouterLink class="backBtn" to="/projects">← Back to Projects</RouterLink>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { projects } from '../data/projects'

const route = useRoute()

const project = computed(() => {
  const slug = String(route.params.slug || '')
  return projects.find(p => p.slug === slug) || null
})

const focus = computed(() => {
  if (!project.value) return ''
  const s = project.value.stack || []
  if (s.includes('SignalR')) return 'Real-time'
  if (s.includes('Filtering')) return 'Search & Filters'
  if (s.includes('JWT') || s.includes('Passport') || s.includes('Auth')) return 'Authentication'
  return 'Backend APIs'
})
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
  line-height: 1.03;
  color: var(--text);
}

.sub {
  margin-top: 12px;
  max-width: 70ch;
  font-size: 16px;
  color: var(--muted);
  line-height: 1.7;
}

.topActions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.backBtn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 14px;
  background: var(--panel);
  border: 1px solid rgba(20, 30, 50, 0.12);
  color: var(--text);
  font-size: 13px;
  font-weight: 900;
  text-decoration: none;
  transition: transform 150ms ease, border-color 200ms ease;
}
.backBtn:hover {
  transform: translateY(-1px);
  border-color: rgba(109, 40, 217, 0.28);
}

.actionBtn {
  display: inline-flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 14px;
  background: var(--accent);
  color: #fff;
  font-size: 13px;
  font-weight: 900;
  text-decoration: none;
  box-shadow: 0 12px 26px rgba(109, 40, 217, 0.16);
  transition: transform 150ms ease, opacity 150ms ease;
}
.actionBtn:hover { transform: translateY(-1px); opacity: 0.95; }
.actionBtn.ghost {
  background: var(--panel);
  border: 1px solid rgba(20, 30, 50, 0.12);
  color: var(--text);
  box-shadow: none;
}

.summary {
  margin-top: 16px;
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
@media (max-width: 760px) { .summary { grid-template-columns: 1fr; } }

.box {
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

.card {
  margin-top: 14px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.60);
  border: 1px solid rgba(20, 30, 50, 0.12);
  padding: 16px;
}

.h2 {
  font-size: 14px;
  font-weight: 900;
  color: var(--text);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.tags {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  font-size: 12px;
  font-weight: 900;
  color: var(--text);
  padding: 8px 10px;
  border-radius: 999px;
  background: rgba(109, 40, 217, 0.10);
  border: 1px solid rgba(109, 40, 217, 0.18);
}

.twoCols {
  margin-top: 14px;
  display: grid;
  gap: 14px;
}
@media (min-width: 900px) { .twoCols { grid-template-columns: 1fr 1fr; } }

.list {
  margin-top: 12px;
  padding-left: 18px;
  color: var(--text);
  font-size: 13px;
  font-weight: 700;
  line-height: 1.7;
}
.list li { margin: 6px 0; }

.p {
  margin-top: 10px;
  font-size: 13px;
  color: var(--muted);
  line-height: 1.7;
  font-weight: 700;
}

.bottom { margin-top: 16px; }

.notFound { padding: 10px 0; }
.nfTitle { font-size: 20px; font-weight: 900; color: var(--text); }
.nfSub { margin-top: 6px; font-size: 13px; color: var(--muted); font-weight: 700; line-height: 1.6; }
</style>
