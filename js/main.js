// ==========================================================================
// Daily Journal - Marketing Landing Page Scripts
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle (Light mode by default)
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeIconSun = document.getElementById('theme-icon-sun');
    const themeIconMoon = document.getElementById('theme-icon-moon');

    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('journal_site_theme', theme);

        if (theme === 'light') {
            if (themeIconSun) themeIconSun.classList.add('hidden');
            if (themeIconMoon) themeIconMoon.classList.remove('hidden');
        } else {
            if (themeIconSun) themeIconSun.classList.remove('hidden');
            if (themeIconMoon) themeIconMoon.classList.add('hidden');
        }
    };

    const savedTheme = localStorage.getItem('journal_site_theme') || 'light';
    applyTheme(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(nextTheme);
        });
    }

    // 2. Interactive Journal Demo Simulation
    const demoTextarea = document.getElementById('demo-textarea');
    const demoWordCount = document.getElementById('demo-word-count');
    const demoCharCount = document.getElementById('demo-char-count');
    const demoDateHeading = document.getElementById('demo-date-heading');
    const mockupFrame = document.querySelector('.mockup-frame');

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

    // 3. Trigger Shake Animation for Interactive Element
    const triggerDemoAttention = () => {
        if (mockupFrame) {
            mockupFrame.classList.remove('shake-attention');
            // Force DOM reflow to restart CSS animation
            void mockupFrame.offsetWidth;
            mockupFrame.classList.add('shake-attention');

            setTimeout(() => {
                if (demoTextarea) {
                    demoTextarea.focus();
                    // Place cursor at end of text
                    const length = demoTextarea.value.length;
                    demoTextarea.setSelectionRange(length, length);
                }
            }, 300);

            setTimeout(() => {
                mockupFrame.classList.remove('shake-attention');
            }, 900);
        }
    };

    // 4. Precision Smooth Scroll Navigation Handler (Top = 0 + Navbar Height)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();

                const header = document.querySelector('.site-header');
                const headerHeight = header ? header.offsetHeight : 0;

                // Position the top of the target section exactly below the navigation bar
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: Math.max(0, targetPosition),
                    left: 0,
                    behavior: 'smooth'
                });

                // Trigger shake animation if interactive demo is clicked
                if (targetId === '#interactive-demo') {
                    triggerDemoAttention();
                }

                if (history.pushState) {
                    history.pushState(null, null, targetId);
                }
            }
        });
    });
});

