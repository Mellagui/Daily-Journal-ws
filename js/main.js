// ==========================================================================
// Daily Journal - Marketing Landing Page Scripts
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeIconSun = document.getElementById('theme-icon-sun');
    const themeIconMoon = document.getElementById('theme-icon-moon');

    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('journal_site_theme', theme);

        if (theme === 'light') {
            themeIconSun.classList.remove('hidden');
            themeIconMoon.classList.add('hidden');
        } else {
            themeIconSun.classList.add('hidden');
            themeIconMoon.classList.remove('hidden');
        }
    };

    const savedTheme = localStorage.getItem('journal_site_theme') || 'dark';
    applyTheme(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(nextTheme);
        });
    }

    // 2. Interactive Journal Demo Simulation
    const demoTextarea = document.getElementById('demo-textarea');
    const demoWordCount = document.getElementById('demo-word-count');
    const demoCharCount = document.getElementById('demo-char-count');
    const demoDateHeading = document.getElementById('demo-date-heading');

    // Auto-populate actual current date heading
    if (demoDateHeading) {
        const today = new Date();
        const formattedDate = today.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        }).toUpperCase();
        demoDateHeading.textContent = `TODAY • ${formattedDate}`;
    }

    const updateDemoStats = () => {
        if (!demoTextarea) return;
        const text = demoTextarea.value || '';
        const trimmed = text.trim();
        const words = trimmed ? trimmed.split(/\s+/).length : 0;
        const chars = text.length;

        if (demoWordCount) demoWordCount.textContent = `${words} word${words === 1 ? '' : 's'}`;
        if (demoCharCount) demoCharCount.textContent = `${chars} char${chars === 1 ? '' : 's'}`;
    };

    if (demoTextarea) {
        demoTextarea.addEventListener('input', updateDemoStats);
        updateDemoStats();
    }
});
