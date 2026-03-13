# 🏠 LifeOS — Personal Operating System

A complete personal tracking website for fitness, health, journaling, learning, and daily reviews. Runs 100% in your browser — no backend, no accounts, all data stored locally.

## 📋 Features

| Page | What It Does |
|------|-------------|
| **Dashboard** | Overview of all stats, streaks, habit tracker, heatmap |
| **Body Stats** | Weight & measurement tracking with charts, BMI, body fat estimate |
| **Workouts** | Log sessions, track exercises/sets/reps, weekly plan, muscle group breakdown |
| **Nutrition** | Meal logging, macro tracking, calorie trends |
| **Journal** | Private diary with mood tracking, categories, tags, search |
| **Daily Review** | End-of-day habit check, score sliders, reflection prompts |
| **Learning** | Books/courses tracker, session logging, hours by category |
| **Settings** | Profile setup, calorie calculator, data export/import |

---

## 🚀 Deploy to GitHub Pages (5 minutes)

### Step 1 — Create a GitHub repository
1. Go to [github.com](https://github.com) and sign in
2. Click **"New repository"**
3. Name it `lifeos` (or anything you like)
4. Set it to **Public**
5. Click **"Create repository"**

### Step 2 — Upload the files
Upload ALL of these files into the repository:
```
index.html
fitness.html
workout.html
journal.html
review.html
learning.html
nutrition.html
settings.html
style.css
app.js
nav.js
README.md
```

**Option A — GitHub web interface:**
1. Open your new repository
2. Click **"uploading an existing file"**
3. Drag all files at once
4. Click **"Commit changes"**

**Option B — Git command line:**
```bash
git clone https://github.com/YOUR_USERNAME/lifeos.git
# Copy all files into the cloned folder
cd lifeos
git add .
git commit -m "Initial LifeOS setup"
git push
```

### Step 3 — Enable GitHub Pages
1. Go to your repository **Settings**
2. Scroll down to **"Pages"** in the left sidebar
3. Under **Source**, select **"Deploy from a branch"**
4. Choose **main** branch and **/ (root)** folder
5. Click **Save**

### Step 4 — Access your website
Your site will be live at:
```
https://YOUR_USERNAME.github.io/lifeos/
```
(Takes 1–2 minutes to deploy after first push)

---

## 💾 Your Data

- All data is stored in your **browser's localStorage**
- Data is **private** — nothing is sent to any server
- Use **Settings → Export Data** to download a backup JSON file
- Use **Settings → Import Data** to restore from backup
- If you clear browser data, your LifeOS data will be lost — **export regularly**

---

## 🎯 First Steps After Setup

1. Go to **Settings** and fill in your profile (name, height, start weight, target weight)
2. Log your **current measurements** in Body Stats
3. Complete your first **Daily Review**
4. Log your first **workout**
5. Make it a habit to open LifeOS every evening for your daily review

---

## 📱 Mobile Access

The site is mobile-responsive. On mobile:
- The sidebar is hidden — tap the **☰** button (bottom-left) to open it
- All features work on mobile browsers
- Add to home screen for an app-like experience:
  - **iOS Safari:** Share → Add to Home Screen
  - **Android Chrome:** Menu → Add to Home Screen

---

## 🔧 Customization

All files are plain HTML/CSS/JavaScript — no frameworks, no build tools.

- **Change colors:** Edit CSS variables at the top of `style.css`
- **Add habits:** Edit the `HABITS` array in `review.html` and `index.html`
- **Change workout plan:** Edit the `WEEKLY_PLAN` array in `workout.html`
- **Add meal presets:** Edit the food options in `nutrition.html`

---

*Built with vanilla HTML, CSS, and JavaScript. Designed to be simple, fast, and yours.*
