# 🌐 Daily Journal - Official Product Landing Website

<div align="center">

### The official marketing showcase, live interactive demo, and documentation portal for the [Simple Daily Journal](https://github.com/Mellagui/Daily-Journal-Extension) Chrome Extension.

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Deploy-success.svg?style=flat-square&color=22c55e)](https://mellagui.github.io/Daily-Journal-ex-Website/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero%20(Pure%20HTML%2FCSS%2FJS)-orange.svg?style=flat-square)](#technology-stack)
[![Theme: Light & Dark](https://img.shields.io/badge/Theme-Synchronized%20Light%20%26%20Dark-purple.svg?style=flat-square)](#key-features)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)

</div>

---

## 📖 Overview

This repository contains the high-converting, modern landing page for **Simple Daily Journal**. It features an interactive in-browser simulation of the extension, dark/light theme switching, full feature showcases, comprehensive FAQ accordion, and an offline-first Privacy Policy page.

---

## ✨ Key Features

- 💻 **Live Interactive Extension Simulation**: Visitors can test typing, live word/character counts, and interface animations right inside a simulated browser window without installing anything first.
- 🌓 **Synchronized Theme Switcher**: Full Light & Dark glassmorphic design system matching the extension aesthetic, persisted via `localStorage`.
- 📱 **Mobile & Responsive First**: Fluid responsive typography and layouts designed with CSS Grid and Flexbox.
- 🛡️ **Dedicated Privacy Policy Page**: Transparent declaration of the offline-first architecture, zero telemetry, and Chrome permission justifications.
- 🚀 **Blazing Fast & Zero Bloat**: Pure Vanilla HTML5, CSS3, and JavaScript — 0 heavy libraries or build steps.

---

## 📁 Repository Structure

```text
Daily-Journal-ex-Website/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md          # Bug report template
│   │   ├── feature_request.md     # Feature/design proposal template
│   │   └── config.yml             # Issue template config
│   ├── workflows/
│   │   └── deploy.yml             # GitHub Pages continuous deployment workflow
│   └── pull_request_template.md   # Pull request template
├── css/
│   └── style.css                  # Glassmorphic CSS design system & responsive rules
├── js/
│   └── main.js                    # Theme switcher & interactive demo logic
├── .gitignore                     # Git ignore rules
├── CONTRIBUTING.md                # Contribution guidelines
├── index.html                     # Main landing page with live interactive demo
├── LICENSE                        # MIT License
├── privacy.html                   # Dedicated privacy policy page
├── README.md                      # Project documentation
└── SECURITY.md                    # Security policy
```

---

## 🛠️ Local Development

You can run this site locally using any simple HTTP server:

```bash
# 1. Clone this repository
git clone https://github.com/Mellagui/Daily-Journal-ex-Website.git
cd Daily-Journal-ex-Website

# 2. Run with Python 3
python -m http.server 3000

# Or with Node.js npx
npx serve .
```

Open `http://localhost:3000` in your web browser.

---

## 🚀 GitHub Pages Deployment

This repository includes a GitHub Actions workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) that automatically deploys the landing page to GitHub Pages on every push to the `main` branch.

To enable GitHub Pages in your repository settings:
1. Go to **Settings** > **Pages** on GitHub.
2. Under **Build and deployment** > **Source**, choose **GitHub Actions**.

---

## 🔗 Related Repositories

- 📔 **Extension Core**: [Simple Daily Journal Extension](https://github.com/Mellagui/Daily-Journal-Extension)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <sub>Crafted with ❤️ by <a href="https://github.com/Mellagui">AmineBuilds</a> • Reflect & Grow ☕✨</sub>
</div>
