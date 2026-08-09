(() => {
  const roots = document.querySelectorAll('.child-experience');
  if (!roots.length) return;

  const content = {
    learn: {
      intro: 'Turn a quick question into one that helps you really understand the answer.',
      weak: 'Tell me about volcanoes.',
      better: 'Explain how volcanoes form in simple language for a 12-year-old. Use a real-world example, then ask me three questions to check I understood it.',
      blocks: ['what you want', 'your level', 'an example']
    },
    create: {
      intro: 'Use AI as a creative teammate — you bring the ideas, it helps you stretch them.',
      weak: 'Write me a story.',
      better: 'Help me plan a mystery story set in a floating city. Ask me three questions about my main character first, then suggest three possible problems they could face.',
      blocks: ['your idea', 'useful limits', 'ask me first']
    },
    solve: {
      intro: 'Work through tricky problems step by step without skipping the thinking part.',
      weak: 'What is the answer to this maths problem?',
      better: 'Give me one hint at a time for this maths problem. Do not tell me the final answer unless I ask. After each hint, ask what I think the next step is.',
      blocks: ['ask for hints', 'set a boundary', 'think aloud']
    },
    explore: {
      intro: 'Follow your curiosity, ask sharper questions and discover something you did not expect.',
      weak: 'Tell me something cool about space.',
      better: 'Teach me one surprising thing about space that a 13-year-old could explain to a friend. Use an everyday comparison, then give me one follow-up question to explore.',
      blocks: ['pick a focus', 'make it relatable', 'keep exploring']
    },
    save: {
      intro: 'Use AI to organise your time and break big tasks into smaller, manageable steps.',
      weak: 'Make me a revision plan.',
      better: 'Help me make a 5-day revision plan for three subjects. Ask how much time I have each day first, then split the work into short sessions with breaks and a quick self-test.',
      blocks: ['your deadline', 'your time', 'check progress']
    }
  };

  const parentAudienceButton = (value) => document.querySelector(`.standard-site-shell [data-audience="${value}"]`);
  const parentGoalButton = (value) => document.querySelector(`.standard-site-shell [data-goal="${value}"]`);
  const parentThemeButton = () => document.querySelector('.standard-site-shell #themeToggle');

  roots.forEach((root) => {
    const cards = [...root.querySelectorAll('[data-mission]')];
    const intro = root.querySelector('[data-goal-intro]');
    const weak = root.querySelector('[data-weak-prompt]');
    const better = root.querySelector('[data-better-prompt]');
    const blocks = [root.querySelector('[data-builder-one]'), root.querySelector('[data-builder-two]'), root.querySelector('[data-builder-three]')];
    const remix = root.querySelector('[data-remix]');
    const privacy = root.querySelector('.child-privacy');
    const privacyPopover = root.querySelector('[data-privacy-popover]');
    const quickButtons = [...root.querySelectorAll('[data-quick]')];
    const profileTrigger = root.querySelector('[data-child-profile-trigger]');
    const profilePopover = root.querySelector('[data-child-profile-popover]');
    const childAudienceButtons = [...root.querySelectorAll('[data-child-audience-target]')];
    const childGoalButtons = [...root.querySelectorAll('[data-child-goal-target]')];
    const childThemeToggle = root.querySelector('[data-child-theme-toggle]');

    let preferredGoal = root.dataset.goal || document.documentElement.dataset.goal || 'learn';
    let active = preferredGoal === 'save' ? 'learn' : preferredGoal;

    const syncProfileControls = () => {
      const audience = document.documentElement.dataset.audience || 'school';
      const goal = document.documentElement.dataset.goal || preferredGoal;
      childAudienceButtons.forEach((button) => {
        button.setAttribute('aria-pressed', String(button.dataset.childAudienceTarget === audience));
      });
      childGoalButtons.forEach((button) => {
        button.setAttribute('aria-pressed', String(button.dataset.childGoalTarget === goal));
      });
    };

    const render = (key, options = {}) => {
      const data = content[key] || content.learn;
      active = key;

      cards.forEach((card) => {
        const selected = card.dataset.mission === key;
        card.classList.toggle('is-active', selected);
        card.setAttribute('aria-pressed', String(selected));
      });

      if (intro) intro.textContent = options.keepIntro && content[preferredGoal] ? content[preferredGoal].intro : data.intro;
      if (weak) weak.textContent = data.weak;
      if (better) {
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          better.animate?.([
            { opacity: 0.2, transform: 'translateY(4px)' },
            { opacity: 1, transform: 'translateY(0)' }
          ], { duration: 280, easing: 'ease-out' });
        }
        better.textContent = data.better;
      }
      blocks.forEach((block, i) => { if (block) block.textContent = data.blocks[i]; });
    };

    const applyGoal = (goal) => {
      preferredGoal = content[goal] ? goal : 'learn';
      root.dataset.goal = preferredGoal;

      if (preferredGoal === 'save') {
        if (intro) intro.textContent = content.save.intro;
        render('learn', { keepIntro: true });
      } else {
        render(preferredGoal);
      }

      syncProfileControls();
    };

    cards.forEach((card) => card.addEventListener('click', () => render(card.dataset.mission)));
    applyGoal(preferredGoal);

    const remixVersions = {
      learn: [
        'Explain how volcanoes form as if you were helping me revise. Start with a five-sentence explanation, give me one simple analogy, then quiz me with three questions.',
        'Help me understand volcanoes without doing the thinking for me. Explain the key idea, show one real example, then ask me to explain it back in my own words.'
      ],
      create: [
        'Be my idea coach for a mystery story. Give me three unusual settings, then ask me to choose one before we invent the main character together.',
        'Help me improve my own story idea. Ask what I already have, then suggest two twists and explain why each could make the story more interesting.'
      ],
      solve: [
        'Coach me through this problem. Ask what I have tried first, then give the smallest useful hint. Keep the final answer hidden while I work.',
        'Help me spot where my method went wrong. Do not redo the whole problem; compare my steps and ask one question that helps me find the mistake.'
      ],
      explore: [
        'Choose one weird but true space fact, explain why it happens in simple language, then suggest two related ideas I could investigate next.',
        'Give me a mini five-minute learning challenge about space: one surprising fact, one analogy and one question that makes me think.'
      ]
    };

    let remixIndex = 0;
    remix?.addEventListener('click', () => {
      const versions = remixVersions[active] || remixVersions.learn;
      if (better) better.textContent = versions[remixIndex++ % versions.length];
    });

    quickButtons.forEach((button) => {
      button.addEventListener('click', () => {
        if (!better) return;
        const suffixes = {
          hint: ' Give me a clue first rather than the answer.',
          quiz: ' Finish by testing what I know with three short questions.',
          example: ' Include one clear example I can relate to.'
        };
        const suffix = suffixes[button.dataset.quick];
        if (suffix && !better.textContent.includes(suffix.trim())) better.textContent += suffix;
      });
    });

    let privacyTimer;
    privacy?.addEventListener('click', () => {
      if (!privacyPopover) return;
      privacyPopover.hidden = false;
      clearTimeout(privacyTimer);
      privacyTimer = setTimeout(() => { privacyPopover.hidden = true; }, 6500);
    });

    const closeProfile = () => {
      if (!profilePopover || !profileTrigger) return;
      profilePopover.hidden = true;
      profileTrigger.setAttribute('aria-expanded', 'false');
    };

    profileTrigger?.addEventListener('click', () => {
      if (!profilePopover) return;
      const opening = profilePopover.hidden;
      profilePopover.hidden = !opening;
      profileTrigger.setAttribute('aria-expanded', String(opening));
      if (opening) syncProfileControls();
    });

    childAudienceButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const target = button.dataset.childAudienceTarget;
        const matchingParentButton = parentAudienceButton(target);
        if (matchingParentButton) matchingParentButton.click();
        closeProfile();
      });
    });

    childGoalButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const target = button.dataset.childGoalTarget;
        const matchingParentButton = parentGoalButton(target);
        if (matchingParentButton) matchingParentButton.click();
        applyGoal(target);
        closeProfile();
      });
    });

    childThemeToggle?.addEventListener('click', () => {
      parentThemeButton()?.click();
      closeProfile();
    });

    window.addEventListener('promptendium-personalisation-change', (event) => {
      const nextGoal = event.detail?.goal;
      if (nextGoal && content[nextGoal]) applyGoal(nextGoal);
      syncProfileControls();
    });

    root.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        if (privacyPopover) privacyPopover.hidden = true;
        closeProfile();
      }
    });

    document.addEventListener('click', (event) => {
      if (!profilePopover || profilePopover.hidden || !profileTrigger) return;
      if (profilePopover.contains(event.target) || profileTrigger.contains(event.target)) return;
      closeProfile();
    });

    syncProfileControls();
  });
})();
