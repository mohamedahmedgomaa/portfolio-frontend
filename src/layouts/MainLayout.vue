<template>
  <div class="app" :style="cssVars">
    <div class="bgLayer"></div>

    <!-- Header -->
    <header class="header">
      <div class="container headerInner">
        <RouterLink to="/" class="brand">
          <div class="logo">
            <span class="logoMark"></span>
          </div>

          <div class="brandText">
            <p class="brandName">Mohamed Gomaa</p>
            <p class="brandRole">Senior Full Stack Developer</p>
          </div>
        </RouterLink>

        <nav class="nav">
          <RouterLink class="navLink" to="/projects">Projects</RouterLink>
          <RouterLink class="navLink" to="/about">About</RouterLink>
          <RouterLink class="navLink" to="/contact">Contact</RouterLink>
        </nav>

        <div class="rightBox">
          <div class="profileBadge" title="Mohamed Gomaa">
            <img :src="profileImg" alt="profile" class="profileImg" />
          </div>

          <RouterLink to="/contact" class="hireBtn">
            Hire Me
            <span class="hireDot"></span>
          </RouterLink>
        </div>
      </div>
    </header>

    <!-- ✅ Page (full width) -->
    <main class="main">
      <transition name="page" mode="out-in">
        <RouterView />
      </transition>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footerLine"></div>
        <div class="footerText">
          © {{ new Date().getFullYear() }} Mohamed Gomaa — Portfolio (Vue)
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink, RouterView } from 'vue-router'
import profileImg from '../assets/profile.png'

const route = useRoute()

const cssVars = computed(() => {
  const t = route.meta?.theme || {}
  return {
    '--bg': t.bg || '#F4F8FF',
    '--panel': t.panel || '#FFFFFF',
    '--text': t.text || '#0B1220',
    '--muted': t.muted || '#46556B',
    '--accent': t.accent || '#6D28D9',
    '--accent2': t.accent2 || '#22C55E',
    '--header-h': '86px',
  }
})
</script>

<style scoped>
.app {
  min-height: 100vh;
  color: var(--text);
  position: relative;
  overflow-x: hidden;
}

.bgLayer {
  position: fixed;
  inset: 0;
  z-index: -1;
  background:
      radial-gradient(900px 520px at 12% 8%, rgba(109, 40, 217, 0.12), transparent 60%),
      radial-gradient(900px 520px at 88% 12%, rgba(34, 197, 94, 0.10), transparent 55%),
      linear-gradient(180deg, rgba(244, 248, 255, 0.9), var(--bg));
}

/* ✅ keep container here for header/footer */
.container {
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
}

.header {
  position: sticky;
  top: 0;
  backdrop-filter: blur(10px);
  background: rgba(244, 248, 255, 0.65);
  border-bottom: 1px solid rgba(20, 30, 50, 0.10);
  z-index: 50;
}

.headerInner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: inherit;
}

.logo {
  width: 44px;
  height: 44px;
  border-radius: 16px;
  background: var(--panel);
  border: 1px solid rgba(20, 30, 50, 0.12);
  display: grid;
  place-items: center;
}
.logoMark {
  width: 18px;
  height: 18px;
  border: 3px solid var(--accent);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: rotate(45deg);
  border-radius: 6px;
}

.brandText { display: none; }
@media (min-width: 640px) { .brandText { display: block; } }

.brandName { font-size: 14px; font-weight: 900; line-height: 1.1; }
.brandRole { font-size: 12px; color: var(--muted); line-height: 1.1; }

.nav {
  display: none;
  align-items: center;
  gap: 24px;
  font-size: 14px;
}
@media (min-width: 768px) { .nav { display: flex; } }

.navLink {
  color: var(--muted);
  position: relative;
  padding: 6px 2px;
  transition: color 200ms ease;
  text-decoration: none;
}
.navLink:hover { color: var(--text); }

.router-link-active.navLink { color: var(--text); }
.router-link-active.navLink::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 100%;
  height: 2px;
  background: var(--accent);
  border-radius: 2px;
}

.rightBox {
  display: flex;
  align-items: center;
  gap: 10px;
}

.profileBadge {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: var(--panel);
  border: 1px solid rgba(20, 30, 50, 0.12);
  overflow: hidden;
  box-shadow: 0 10px 22px rgba(10, 20, 35, 0.08);
}
.profileImg { width: 100%; height: 100%; object-fit: cover; }

.hireBtn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 14px;
  background: var(--panel);
  border: 1px solid rgba(20, 30, 50, 0.12);
  color: var(--text);
  font-size: 13px;
  font-weight: 800;
  text-decoration: none;
  transition: transform 150ms ease, border-color 200ms ease;
}
.hireBtn:hover {
  transform: translateY(-1px);
  border-color: rgba(109, 40, 217, 0.30);
}
.hireDot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: var(--accent);
  box-shadow: 0 0 0 4px rgba(109, 40, 217, 0.16);
}

/* ✅ main is now full width – pages control container */
.main {
  padding: 0 0 60px;
}

.footer { padding: 10px 0 36px; }
.footerLine { height: 1px; background: rgba(20, 30, 50, 0.12); }
.footerText { padding-top: 14px; font-size: 12px; color: var(--muted); }

.page-enter-active, .page-leave-active {
  transition: opacity 220ms ease, transform 220ms ease;
}
.page-enter-from, .page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
