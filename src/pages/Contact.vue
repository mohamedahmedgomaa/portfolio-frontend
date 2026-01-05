<template>
  <section class="wrap">
    <!-- Header -->
    <div class="top">
      <div>
        <p class="kicker">CONTACT</p>
        <h1 class="title">Let’s work together</h1>
        <p class="sub">
          Send me a message and I’ll get back to you. (Frontend-only for now — we’ll connect it later.)
        </p>
      </div>

      <div class="topActions">
        <RouterLink class="btn ghost" to="/projects">Projects</RouterLink>
        <RouterLink class="btn ghost" to="/about">About</RouterLink>
      </div>
    </div>

    <!-- Grid -->
    <div class="grid">
      <!-- Form -->
      <div class="card">
        <form class="form" @submit.prevent="submit">
          <div class="row2">
            <div>
              <label class="label">Name</label>
              <input v-model.trim="form.name" class="input" placeholder="Your name" />
              <p v-if="errors.name" class="error">{{ errors.name }}</p>
            </div>

            <div>
              <label class="label">Email</label>
              <input v-model.trim="form.email" class="input" placeholder="you@example.com" />
              <p v-if="errors.email" class="error">{{ errors.email }}</p>
            </div>
          </div>

          <div>
            <label class="label">Subject</label>
            <input v-model.trim="form.subject" class="input" placeholder="Hiring / Freelance / Question..." />
            <p v-if="errors.subject" class="error">{{ errors.subject }}</p>
          </div>

          <div>
            <label class="label">Message</label>
            <textarea
                v-model.trim="form.message"
                class="input textarea"
                rows="7"
                placeholder="Write your message..."
            />
            <p v-if="errors.message" class="error">{{ errors.message }}</p>
          </div>

          <div class="actions">
            <button class="btn" type="submit" :disabled="loading">
              {{ loading ? 'Sending...' : 'Send Message' }}
            </button>

            <button class="btn ghost" type="button" @click="resetAll" :disabled="loading">
              Reset
            </button>
          </div>

          <div v-if="status" class="status" :class="{ ok: status.ok, bad: !status.ok }">
            <p class="statusTitle">{{ status.ok ? 'Message sent' : 'Something went wrong' }}</p>
            <p class="statusText">{{ status.text }}</p>
          </div>
        </form>
      </div>

      <!-- Info -->
      <div class="side">
        <div class="card">
          <h2 class="h2">Contact Info</h2>

          <div class="infoList">
            <div class="infoItem">
              <p class="infoLabel">Name</p>
              <p class="infoValue">Mohamed Gomaa</p>
            </div>

            <div class="infoItem">
              <p class="infoLabel">Role</p>
              <p class="infoValue">Senior Full Stack Developer</p>
            </div>

            <div class="infoItem">
              <p class="infoLabel">Location</p>
              <p class="infoValue">Riyadh, Saudi Arabia</p>
            </div>

            <!-- ضع ايميلك الحقيقي هنا -->
            <div class="infoItem">
              <p class="infoLabel">Email</p>
              <p class="infoValue">mohamedgomaa15897@gmail.com</p>
            </div>
          </div>
        </div>

        <div class="card">
          <h2 class="h2">Availability</h2>
          <p class="p">
            Open to full-time roles and project-based work. I can help with backend architecture, APIs, performance
            optimization, and full-stack delivery.
          </p>

          <div class="chips">
            <span class="chip">Laravel</span>
            <span class="chip">ASP.NET Core</span>
            <span class="chip">SQL</span>
            <span class="chip">JWT</span>
            <span class="chip">Angular</span>
            <span class="chip">Vue</span>
          </div>
        </div>

        <div class="card subtle">
          <p class="subtleText">
            Next step (later): connect this form to <b>Laravel</b> via <b>POST /api/contact</b>.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const loading = ref(false)
const status = ref(null)

const resetErrors = () => {
  errors.name = ''
  errors.email = ''
  errors.subject = ''
  errors.message = ''
}

const resetAll = () => {
  resetErrors()
  status.value = null
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

const validate = () => {
  resetErrors()
  let ok = true

  if (!form.name || form.name.length < 2) {
    errors.name = 'Name must be at least 2 characters.'
    ok = false
  }

  if (!form.email || !isEmail(form.email)) {
    errors.email = 'Please enter a valid email.'
    ok = false
  }

  if (!form.subject || form.subject.length < 3) {
    errors.subject = 'Subject must be at least 3 characters.'
    ok = false
  }

  if (!form.message || form.message.length < 10) {
    errors.message = 'Message must be at least 10 characters.'
    ok = false
  }

  return ok
}

const submit = async () => {
  status.value = null
  if (!validate()) return

  loading.value = true
  try {
    // Frontend-only mock request
    await new Promise((r) => setTimeout(r, 700))

    status.value = {
      ok: true,
      text: 'Thanks! Your message is ready. Later we will send it to the backend.',
    }

    // reset form
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  } catch (e) {
    status.value = {
      ok: false,
      text: 'Please try again.',
    }
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.wrap {
  padding-top: 8px;
  padding-bottom: 10px;
}

/* top */
.top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.kicker {
  letter-spacing: 0.35em;
  text-transform: uppercase;
  font-size: 12px;
  color: var(--muted);
}

.title {
  margin-top: 8px;
  font-size: 44px;
  font-weight: 900;
  line-height: 1.05;
  color: var(--text);
}

.sub {
  margin-top: 10px;
  max-width: 78ch;
  font-size: 14px;
  color: var(--muted);
  line-height: 1.8;
}

.topActions {
  display: flex;
  gap: 10px;
  align-items: center;
}

/* layout */
.grid {
  margin-top: 16px;
  display: grid;
  gap: 12px;
}
@media (min-width: 980px) {
  .grid { grid-template-columns: 1.25fr 0.75fr; }
}

.side {
  display: grid;
  gap: 12px;
}

.card {
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.60);
  border: 1px solid rgba(20, 30, 50, 0.12);
  padding: 16px;
}

.card.subtle {
  background: rgba(255, 255, 255, 0.45);
}

.h2 {
  font-size: 14px;
  font-weight: 900;
  color: var(--text);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.p {
  margin-top: 10px;
  font-size: 13px;
  color: var(--muted);
  line-height: 1.7;
  font-weight: 700;
}

.form {
  display: grid;
  gap: 12px;
}

.row2 {
  display: grid;
  gap: 12px;
}
@media (min-width: 720px) {
  .row2 { grid-template-columns: 1fr 1fr; }
}

.label {
  font-size: 12px;
  font-weight: 900;
  color: var(--text);
  margin-bottom: 6px;
  display: block;
}

.input {
  width: 100%;
  border-radius: 16px;
  padding: 12px 14px;
  font-size: 13px;
  background: var(--panel);
  border: 1px solid rgba(20, 30, 50, 0.12);
  outline: none;
}
.input:focus {
  border-color: rgba(109, 40, 217, 0.30);
}

.textarea {
  resize: none;
  line-height: 1.7;
}

.error {
  margin-top: 6px;
  font-size: 12px;
  font-weight: 800;
  color: #b91c1c;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  margin-top: 6px;
}

/* buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 12px;
  border-radius: 14px;
  background: var(--accent);
  color: #fff;
  font-size: 13px;
  font-weight: 900;
  text-decoration: none;
  border: none;
  cursor: pointer;
  box-shadow: 0 12px 26px rgba(109, 40, 217, 0.14);
  transition: transform 150ms ease, opacity 150ms ease;
}
.btn:hover { transform: translateY(-1px); opacity: 0.95; }
.btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

.btn.ghost {
  background: var(--panel);
  color: var(--text);
  border: 1px solid rgba(20, 30, 50, 0.12);
  box-shadow: none;
}

/* status */
.status {
  margin-top: 6px;
  border-radius: 18px;
  padding: 14px;
  border: 1px solid rgba(20, 30, 50, 0.12);
  background: rgba(255, 255, 255, 0.65);
}
.status.ok {
  border-color: rgba(16, 185, 129, 0.28);
}
.status.bad {
  border-color: rgba(185, 28, 28, 0.28);
}

.statusTitle {
  font-weight: 900;
  color: var(--text);
  font-size: 13px;
}
.statusText {
  margin-top: 6px;
  font-weight: 700;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.6;
}

/* info */
.infoList {
  margin-top: 12px;
  display: grid;
  gap: 10px;
}

.infoItem {
  border-radius: 18px;
  background: var(--panel);
  border: 1px solid rgba(20, 30, 50, 0.10);
  padding: 12px;
}

.infoLabel {
  font-size: 11px;
  color: var(--muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 900;
}
.infoValue {
  margin-top: 4px;
  font-size: 13px;
  font-weight: 900;
  color: var(--text);
}

.chips {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  font-size: 12px;
  font-weight: 900;
  color: var(--text);
  padding: 8px 10px;
  border-radius: 999px;
  background: rgba(109, 40, 217, 0.10);
  border: 1px solid rgba(109, 40, 217, 0.18);
}

.subtleText {
  font-size: 13px;
  color: var(--muted);
  font-weight: 800;
  line-height: 1.7;
}
</style>
