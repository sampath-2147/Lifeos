// ══════════════════════════════════════════════════
//  LifeOS — Core App JS
// ══════════════════════════════════════════════════

const APP = {
  version: '1.0.0',
  name: 'LifeOS',

  // ── Storage helpers ──────────────────────────────
  get(key, fallback = null) {
    try {
      const v = localStorage.getItem('lifeos_' + key);
      return v ? JSON.parse(v) : fallback;
    } catch { return fallback; }
  },

  set(key, value) {
    try {
      localStorage.setItem('lifeos_' + key, JSON.stringify(value));
      return true;
    } catch { return false; }
  },

  push(key, item) {
    const arr = this.get(key, []);
    item.id = item.id || Date.now().toString();
    arr.unshift(item);
    this.set(key, arr);
    return item;
  },

  remove(key, id) {
    const arr = this.get(key, []);
    const filtered = arr.filter(i => i.id !== id);
    this.set(key, filtered);
  },

  update(key, id, updates) {
    const arr = this.get(key, []);
    const idx = arr.findIndex(i => i.id === id);
    if (idx !== -1) { arr[idx] = { ...arr[idx], ...updates }; this.set(key, arr); }
  },

  // ── Date helpers ─────────────────────────────────
  today() {
    return new Date().toISOString().split('T')[0];
  },

  formatDate(dateStr, style = 'medium') {
    if (!dateStr) return '';
    const d = new Date(dateStr + 'T00:00:00');
    if (style === 'short') return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
    if (style === 'long') return d.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    if (style === 'time') return new Date(dateStr).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  },

  daysAgo(dateStr) {
    const diff = Math.floor((Date.now() - new Date(dateStr)) / 86400000);
    if (diff === 0) return 'Today';
    if (diff === 1) return 'Yesterday';
    return `${diff}d ago`;
  },

  now() { return new Date().toISOString(); },

  // ── User / profile ────────────────────────────────
  getProfile() {
    return this.get('profile', {
      name: 'My Name',
      startWeight: 85,
      targetWeight: 72,
      height: 172,
      goal: 'Fat Loss',
      startDate: this.today()
    });
  },

  // ── Streak calculator ─────────────────────────────
  getStreak() {
    const reviews = this.get('reviews', []);
    if (!reviews.length) return 0;
    const dates = [...new Set(reviews.map(r => r.date))].sort().reverse();
    let streak = 0;
    let check = new Date();
    for (let i = 0; i < dates.length; i++) {
      const d = new Date(dates[i] + 'T00:00:00');
      const diff = Math.floor((check - d) / 86400000);
      if (diff <= 1) { streak++; check = d; }
      else break;
    }
    return streak;
  },

  // ── Toast ─────────────────────────────────────────
  toast(msg, type = 'success') {
    const tc = document.getElementById('toast-container');
    if (!tc) return;
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    el.innerHTML = `<span class="toast-icon">${type === 'success' ? '✓' : '✕'}</span><span>${msg}</span>`;
    tc.appendChild(el);
    setTimeout(() => el.style.opacity = '0', 2800);
    setTimeout(() => el.remove(), 3200);
  },

  // ── Modal helpers ─────────────────────────────────
  openModal(id) {
    const m = document.getElementById(id);
    if (m) m.classList.add('open');
  },
  closeModal(id) {
    const m = document.getElementById(id);
    if (m) m.classList.remove('open');
  },

  // ── Active nav ────────────────────────────────────
  setActiveNav() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-item').forEach(el => {
      el.classList.toggle('active', el.getAttribute('href') === path);
    });
  },

  // ── Sidebar ───────────────────────────────────────
  initSidebar() {
    const toggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (toggle && sidebar) {
      toggle.addEventListener('click', () => {
        const isOpen = sidebar.classList.toggle('open');
        if (overlay) overlay.style.display = isOpen ? 'block' : 'none';
      });
    }
    if (overlay) {
      overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.style.display = 'none';
      });
    }
  },

  // ── User info in sidebar ──────────────────────────
  renderSidebarUser() {
    const profile = this.getProfile();
    const streak = this.getStreak();
    const nameEl = document.getElementById('sidebar-user-name');
    const streakEl = document.getElementById('sidebar-streak');
    const dateEl = document.getElementById('sidebar-date');
    if (nameEl) nameEl.textContent = profile.name;
    if (streakEl) streakEl.textContent = `🔥 ${streak} day streak`;
    if (dateEl) dateEl.textContent = new Date().toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
  },

  // ── Init ──────────────────────────────────────────
  init() {
    this.setActiveNav();
    this.initSidebar();
    this.renderSidebarUser();
  }
};

document.addEventListener('DOMContentLoaded', () => APP.init());

// ── Chart defaults ────────────────────────────────
function setChartDefaults() {
  if (typeof Chart === 'undefined') return;
  Chart.defaults.color = '#71717a';
  Chart.defaults.borderColor = '#2a2a2a';
  Chart.defaults.font.family = "'DM Sans', sans-serif";
}

// ── Confirm delete ────────────────────────────────
function confirmDelete(msg = 'Delete this entry?') {
  return confirm(msg);
}
