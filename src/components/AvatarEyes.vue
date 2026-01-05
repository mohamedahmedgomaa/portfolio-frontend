<template>
  <div class="wrap">
    <div class="card">
      <div class="head">
        <div class="hair"></div>

        <div class="face">
          <div class="brow browL"></div>
          <div class="brow browR"></div>

          <div class="eye eyeL">
            <span class="pupil" :style="pupilStyle"></span>
          </div>

          <div class="eye eyeR">
            <span class="pupil" :style="pupilStyle"></span>
          </div>

          <div class="nose"></div>
          <div class="mouth"></div>
        </div>
      </div>

      <div class="shirt"></div>
      <div class="hint">Move your mouse 👀</div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'

const dx = ref(0)
const dy = ref(0)

const MAX_MOVE = 10 // 👈 مدى الحركة (كبره لو عايز)

const clamp = (v, n) => Math.max(-n, Math.min(n, v))

const pupilStyle = computed(() => ({
  transform: `translate(${dx.value}px, ${dy.value}px)`,
}))

const onMove = (e) => {
  const cx = window.innerWidth / 2
  const cy = window.innerHeight / 2

  const x = e.clientX - cx
  const y = e.clientY - cy

  dx.value = clamp(x / 60, MAX_MOVE)
  dy.value = clamp(y / 60, MAX_MOVE)
}

onMounted(() => {
  window.addEventListener('mousemove', onMove)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMove)
})
</script>

<style scoped>
.wrap {
  border-radius: 28px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(20, 30, 50, 0.10);
}

.card {
  border-radius: 22px;
  background: var(--panel);
  border: 1px solid rgba(20, 30, 50, 0.12);
  padding: 18px;
  position: relative;
}

.head {
  width: 240px;
  height: 240px;
  margin: 0 auto;
  position: relative;
}

.hair {
  position: absolute;
  top: 22px;
  left: 30px;
  right: 30px;
  height: 55px;
  background: rgba(109, 40, 217, 0.22);
  border-radius: 32px 32px 18px 18px;
  border: 2px solid rgba(109, 40, 217, 0.35);
}

.face {
  position: absolute;
  top: 60px;
  left: 25px;
  right: 25px;
  bottom: 20px;
  background: #ffffff;
  border-radius: 34px;
  border: 2px solid rgba(109, 40, 217, 0.30);
}

.brow {
  position: absolute;
  top: 36px;
  width: 58px;
  height: 8px;
  border-radius: 99px;
  background: rgba(109, 40, 217, 0.75);
}
.browL { left: 30px; transform: rotate(-6deg); }
.browR { right: 30px; transform: rotate(6deg); }

.eye {
  position: absolute;
  top: 64px;
  width: 60px;
  height: 40px;
  background: #fff;
  border-radius: 18px;
  border: 2px solid rgba(20, 30, 50, 0.14);
  display: grid;
  place-items: center;
  overflow: hidden;
}
.eyeL { left: 28px; }
.eyeR { right: 28px; }

.pupil {
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background: var(--accent);
  box-shadow: 0 0 0 6px rgba(109, 40, 217, 0.14);
  transition: transform 80ms linear;
}

.nose {
  position: absolute;
  top: 104px;
  left: 50%;
  width: 16px;
  height: 22px;
  transform: translateX(-50%);
  border-radius: 12px;
  background: rgba(20, 30, 50, 0.08);
}

.mouth {
  position: absolute;
  top: 140px;
  left: 50%;
  width: 64px;
  height: 18px;
  transform: translateX(-50%);
  border-bottom: 3px solid rgba(109, 40, 217, 0.55);
  border-radius: 0 0 99px 99px;
}

.shirt {
  width: 260px;
  height: 96px;
  margin: 12px auto 0;
  border-radius: 26px;
  background: rgba(16, 185, 129, 0.18);
  border: 2px solid rgba(16, 185, 129, 0.28);
}

.hint {
  position: absolute;
  right: 14px;
  bottom: 12px;
  font-size: 12px;
  color: var(--muted);
}
</style>
