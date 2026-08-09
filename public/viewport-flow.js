(() => {
  const selectors = [
    'main > section:not(.search-wrap):not(.page)',
    'main .article > .prompt-shell',
    'main .article > section.section'
  ];

  const screens = [...new Set(selectors.flatMap((selector) => [...document.querySelectorAll(selector)]))]
    .sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));

  screens.forEach((screen, index) => {
    screen.classList.add('viewport-screen');

    if (!screen.id) {
      screen.id = `screen-${index + 1}`;
    }
  });

  screens.forEach((screen, index) => {
    const next = screens[index + 1];
    if (!next) return;
    if (screen.querySelector(':scope > .viewport-next')) return;

    const link = document.createElement('a');
    link.className = 'viewport-next';
    link.href = `#${next.id}`;
    link.setAttribute('aria-label', 'Continue to the next section');
    link.textContent = 'Continue ↓';
    screen.appendChild(link);
  });
})();
