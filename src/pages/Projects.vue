<template>
  <section class="page">
    <div class="container">
      <div class="projectsTop">
        <div>
          <p class="kicker">PORTFOLIO</p>
          <h1 class="title">Projects</h1>
          <p class="sub">
            Selected work focused on <b>scalable backend systems</b>, clean architecture, and full-stack delivery.
          </p>
        </div>

        <div class="projectsActions">
          <input
              v-model.trim="q"
              class="search"
              placeholder="Search (title, stack, role)..."
              aria-label="Search projects"
          />
          <button v-if="q" class="clearBtn" @click="q = ''">Clear</button>
        </div>
      </div>

      <div class="filters">
        <button class="chip" :class="{ active: selectedTech.size === 0 }" @click="selectedTech.clear()">
          All
        </button>

        <button
            v-for="t in techOptions"
            :key="t"
            class="chip"
            :class="{ active: selectedTech.has(t) }"
            @click="toggleTech(t)"
        >
          {{ t }}
        </button>
      </div>

      <div class="cardsGrid">
        <article v-for="p in filtered" :key="p.slug" class="card">
          <div class="cardTop">
            <div class="left">
              <p class="cardKicker">{{ p.period }}</p>
              <h3 class="cardTitle">{{ p.title }}</h3>
              <p class="cardSub">{{ p.subtitle }}</p>
            </div>

            <RouterLink class="details" :to="`/projects/${p.slug}`">Details →</RouterLink>
          </div>

          <div class="meta">
            <div class="metaItem">
              <p class="metaLabel">Role</p>
              <p class="metaValue">{{ p.role }}</p>
            </div>

            <div class="metaItem">
              <p class="metaLabel">Focus</p>
              <p class="metaValue">{{ mainFocus(p) }}</p>
            </div>
          </div>

          <div class="stack">
            <span v-for="s in p.stack" :key="s" class="tag">{{ s }}</span>
          </div>

          <div class="links">
            <a v-if="p.links?.live" class="linkBtn" :href="p.links.live" target="_blank" rel="noreferrer">
              Live
            </a>

            <a
                v-if="p.links?.github"
                class="linkBtn ghostLink"
                :href="p.links.github"
                target="_blank"
                rel="noreferrer"
            >
              GitHub
            </a>

            <span v-if="!p.links?.live && !p.links?.github" class="muted">Links will be added</span>
          </div>
        </article>
      </div>

      <div v-if="filtered.length === 0" class="empty">
        No projects match your search/filters.
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { projects } from '../data/projects'

const q = ref('')
const selectedTech = reactive(new Set())

const techOptions = computed(() => {
  const set = new Set()
  projects.forEach(p => (p.stack || []).forEach(s => set.add(s)))
  return Array.from(set)
})

const toggleTech = (t) => {
  selectedTech.has(t) ? selectedTech.delete(t) : selectedTech.add(t)
}

const filtered = computed(() => {
  const query = q.value.toLowerCase()

  return projects.filter(p => {
    const hay = [
      p.title,
      p.subtitle,
      p.role,
      p.period,
      ...(p.stack || []),
      ...(p.highlights || []),
    ].join(' ').toLowerCase()

    const matchesQuery = !query || hay.includes(query)
    const matchesTech = selectedTech.size === 0 || (p.stack || []).some(s => selectedTech.has(s))

    return matchesQuery && matchesTech
  })
})

const mainFocus = (p) => {
  if (p.stack?.includes('SignalR')) return 'Real-time'
  if (p.stack?.some(x => String(x).toLowerCase().includes('auth') || String(x).toLowerCase().includes('jwt')))
    return 'Authentication'
  if (p.stack?.includes('Filtering')) return 'Search & Filters'
  return 'Backend APIs'
}
</script>

<style scoped>
.page {
  min-height: calc(100vh - var(--header-h));
  padding: 28px 0 22px;
}

.projectsTop {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 18px;
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
  font-size: clamp(54px, 6.2vw, 92px);
  font-weight: 900;
  line-height: 0.95;
  color: var(--text);
}

.sub {
  margin-top: 14px;
  max-width: 62ch;
  font-size: 18px;
  color: var(--muted);
  line-height: 1.7;
}

.projectsActions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.search {
  width: min(420px, 86vw);
  border-radius: 16px;
  padding: 12px 14px;
  font-size: 13px;
  background: var(--panel);
  border: 1px solid rgba(20, 30, 50, 0.12);
  outline: none;
}
.search:focus { border-color: rgba(109, 40, 217, 0.30); }

.clearBtn {
  border-radius: 14px;
  padding: 10px 12px;
  font-size: 13px;
  font-weight: 800;
  background: var(--panel);
  border: 1px solid rgba(20, 30, 50, 0.12);
  color: var(--text);
  cursor: pointer;
}

.filters {
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.chip {
  border-radius: 999px;
  padding: 9px 12px;
  font-size: 12px;
  font-weight: 900;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(20, 30, 50, 0.12);
  color: var(--text);
  cursor: pointer;
  transition: transform 150ms ease, border-color 200ms ease;
}
.chip:hover { transform: translateY(-1px); }
.chip.active {
  border-color: rgba(109, 40, 217, 0.35);
  box-shadow: 0 10px 22px rgba(109, 40, 217, 0.10);
}

.cardsGrid {
  margin-top: 18px;
  display: grid;
  gap: 14px;
}
@media (min-width: 860px) { .cardsGrid { grid-template-columns: 1fr 1fr; } }

.card {
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.60);
  border: 1px solid rgba(20, 30, 50, 0.12);
  padding: 16px;
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}
.card:hover {
  transform: translateY(-2px);
  border-color: rgba(109, 40, 217, 0.22);
  box-shadow: 0 18px 40px rgba(10, 20, 35, 0.10);
}

.cardTop {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.cardKicker {
  font-size: 12px;
  font-weight: 900;
  color: var(--muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.cardTitle {
  margin-top: 6px;
  font-size: 18px;
  font-weight: 900;
  color: var(--text);
}

.cardSub {
  margin-top: 6px;
  font-size: 13px;
  color: var(--muted);
  line-height: 1.5;
  max-width: 54ch;
}

.details {
  font-size: 13px;
  font-weight: 900;
  color: var(--text);
  text-decoration: none;
  padding: 8px 10px;
  border-radius: 14px;
  background: var(--panel);
  border: 1px solid rgba(20, 30, 50, 0.10);
  transition: transform 150ms ease;
  white-space: nowrap;
}
.details:hover { transform: translateY(-1px); }

.meta {
  margin-top: 12px;
  display: grid;
  gap: 10px;
}
@media (min-width: 560px) { .meta { grid-template-columns: 1fr 1fr; } }

.metaItem {
  border-radius: 16px;
  background: var(--panel);
  border: 1px solid rgba(20, 30, 50, 0.10);
  padding: 12px;
}

.metaLabel { font-size: 11px; color: var(--muted); }
.metaValue { margin-top: 3px; font-size: 13px; font-weight: 900; color: var(--text); }

.stack {
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

.links {
  margin-top: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.linkBtn {
  font-size: 12px;
  font-weight: 900;
  color: #fff;
  background: var(--accent);
  padding: 9px 12px;
  border-radius: 14px;
  text-decoration: none;
  box-shadow: 0 12px 26px rgba(109, 40, 217, 0.18);
  transition: transform 150ms ease, opacity 150ms ease;
}
.linkBtn:hover { transform: translateY(-1px); opacity: 0.95; }

.ghostLink {
  background: var(--panel);
  color: var(--text);
  border: 1px solid rgba(20, 30, 50, 0.12);
  box-shadow: none;
}

.muted { font-size: 12px; color: var(--muted); font-weight: 700; }

.empty {
  margin-top: 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(20, 30, 50, 0.12);
  padding: 14px;
  color: var(--muted);
  font-size: 13px;
  font-weight: 800;
}
</style>
