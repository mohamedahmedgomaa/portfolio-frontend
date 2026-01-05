<template>
  <section class="page">
    <div class="container wrap">
      <p class="kicker">404</p>
      <h1 class="title">Page not found</h1>
      <p class="sub">
        The page you’re looking for doesn’t exist (or was moved).
      </p>

      <div class="actions">
        <RouterLink to="/" class="btn">Go Home →</RouterLink>
        <RouterLink to="/projects" class="btn ghost">Projects</RouterLink>
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
  display: flex;
  align-items: center;
}

.wrap {
  text-align: center;
  display: grid;
  gap: 10px;
  justify-items: center;
}

.kicker {
  letter-spacing: 0.35em;
  text-transform: uppercase;
  font-size: 12px;
  color: var(--muted);
}

.title {
  font-size: clamp(36px, 4.6vw, 64px);
  font-weight: 900;
  color: var(--text);
  line-height: 1.05;
}

.sub {
  max-width: 60ch;
  font-size: 16px;
  color: var(--muted);
  line-height: 1.8;
}

.actions {
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
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
</style>
