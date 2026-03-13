// nav.js — injects sidebar + topbar HTML
function injectNav(pageTitle) {
  const navHTML = `
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-logo">
      <div class="logo-mark"><span>L</span> LifeOS</div>
      <div class="logo-sub">Personal Operating System</div>
    </div>
    <div class="sidebar-user">
      <div class="user-name" id="sidebar-user-name">Loading...</div>
      <div class="user-streak" id="sidebar-streak">🔥 0 day streak</div>
    </div>
    <nav class="sidebar-nav">
      <div class="nav-section-label">Overview</div>
      <a class="nav-item" href="index.html"><span class="nav-icon">🏠</span> Dashboard</a>

      <div class="nav-section-label">Fitness</div>
      <a class="nav-item" href="fitness.html"><span class="nav-icon">📊</span> Body Stats</a>
      <a class="nav-item" href="workout.html"><span class="nav-icon">🏋️</span> Workouts</a>
      <a class="nav-item" href="nutrition.html"><span class="nav-icon">🥗</span> Nutrition</a>

      <div class="nav-section-label">Mind & Life</div>
      <a class="nav-item" href="journal.html"><span class="nav-icon">📓</span> Journal</a>
      <a class="nav-item" href="review.html"><span class="nav-icon">✅</span> Daily Review</a>
      <a class="nav-item" href="learning.html"><span class="nav-icon">📚</span> Learning</a>

      <div class="nav-section-label">Settings</div>
      <a class="nav-item" href="settings.html"><span class="nav-icon">⚙️</span> Profile & Settings</a>
    </nav>
    <div class="sidebar-footer">
      <div class="date-display" id="sidebar-date"></div>
      <div style="margin-top:4px;font-size:11px;color:var(--text3)">LifeOS v1.0</div>
    </div>
  </aside>
  <div id="sidebar-overlay" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:99;backdrop-filter:blur(2px)"></div>
  <button class="sidebar-toggle" id="sidebar-toggle">☰</button>
  <div id="toast-container"></div>
  `;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = navHTML;
  document.body.insertBefore(wrapper, document.body.firstChild);

  // Overlay stays hidden until sidebar opens on mobile
  const overlay = document.getElementById('sidebar-overlay');
  if (overlay) overlay.style.display = 'none';
}
