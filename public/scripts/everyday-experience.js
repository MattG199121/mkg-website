(() => {
  const VALID_GOALS = ['learn', 'save', 'create', 'explore'];

  const content = {
    learn: {
      label: 'Learn',
      eyebrow: 'No jargon required',
      title: 'Understand it without the complicated bits.',
      intro: 'Tell us what is confusing. We’ll help you ask AI for a clear explanation in ordinary language.',
      question: 'What would you like to make clearer?',
      noteTitle: 'Good to know',
      note: 'You can write prompts in normal English. AI has enough confusing terminology already.',
      tasks: [
        {
          title: 'Explain this simply',
          subtitle: 'Plain English, please',
          rough: 'I keep hearing about interest rates but I do not really understand them.',
          details: ['me, a complete beginner', 'explain interest rates', 'simple + patient', 'use an everyday example'],
          prompt: 'Explain interest rates to me as a complete beginner. Use plain English, avoid financial jargon and give one everyday example showing how a change in interest rates could affect someone with savings or a mortgage.',
          why: 'We told AI your starting level, asked for plain language and requested an example you can relate to.'
        },
        {
          title: 'What does this mean?',
          subtitle: 'Translate the confusing bit',
          rough: 'What does “cloud storage” actually mean?',
          details: ['someone non-technical', 'explain one term', 'clear + brief', 'compare it with something familiar'],
          prompt: 'Explain what “cloud storage” means to someone who is not technical. Keep it brief, avoid jargon and compare it with a familiar everyday idea so it is easy to picture.',
          why: 'We asked AI to match the explanation to you instead of assuming technical knowledge.'
        },
        {
          title: 'Teach me step by step',
          subtitle: 'One piece at a time',
          rough: 'I want to understand how pensions work but it all seems complicated.',
          details: ['an adult starting from scratch', 'teach the basics', 'calm + step-by-step', 'pause after each part'],
          prompt: 'Teach me the basics of how pensions work as if I am starting from scratch. Break it into short steps, explain any unavoidable terms in plain English and pause after each section with one quick question to check I am following.',
          why: 'We turned a big topic into manageable steps and asked AI to check that the explanation is landing.'
        },
        {
          title: 'Give me an example',
          subtitle: 'Make the idea concrete',
          rough: 'I understand the definition of inflation but not what it looks like in real life.',
          details: ['someone learning the basics', 'show inflation in practice', 'everyday + concrete', 'use a simple household example'],
          prompt: 'Show me what inflation looks like in real life using a simple household example. Use easy numbers, explain what changes over time and finish with a two-sentence summary of the main idea.',
          why: 'Examples often make an abstract explanation much easier to understand and remember.'
        }
      ]
    },

    save: {
      label: 'Save time',
      eyebrow: 'Everyday AI, made useful',
      title: 'Less admin. More time for everything else.',
      intro: 'Start with the job you want off your plate. Promptendium turns the rough thought into something AI can actually work with.',
      question: 'What would you rather not spend the next hour doing?',
      noteTitle: 'Quick tip',
      note: 'The more AI knows what you are trying to achieve, the less it has to guess.',
      tasks: [
        {
          title: 'Email I don’t want to write',
          subtitle: 'Polite, clear and done',
          rough: 'Need to email someone about being late with something.',
          details: ['project contact', 'write an email', 'polite + clear', 'confirm the new delivery date'],
          prompt: 'Write a polite professional email explaining that my project will be two days late. Keep it concise, take responsibility, apologise briefly and confirm the new delivery date.',
          why: 'This tells AI what to write, how it should sound and what the message needs to include.'
        },
        {
          title: 'Messy notes',
          subtitle: 'Find the useful bits',
          rough: 'These meeting notes are all over the place and I just need the actions.',
          details: ['me after a meeting', 'organise notes', 'clear + scannable', 'owners and next steps'],
          prompt: 'Turn my meeting notes into a short action list. Group related points together, remove repetition and show each action with the owner and next step where that information is available. Put anything unclear in a short “Needs checking” section.',
          why: 'We told AI what matters and what to do when the notes do not contain enough information.'
        },
        {
          title: 'Plan my week',
          subtitle: 'Turn tasks into order',
          rough: 'I have too much to do this week and do not know what to start with.',
          details: ['me with a busy week', 'make a realistic plan', 'practical + calm', 'priorities and spare time'],
          prompt: 'Help me turn my task list into a realistic plan for this week. Put urgent or time-sensitive tasks first, group similar jobs where useful and leave some spare time for things that overrun. Show the result day by day in a simple list.',
          why: 'We asked for a useful shape to the answer instead of simply asking AI to “organise this”.'
        },
        {
          title: 'Help me reply',
          subtitle: 'Get unstuck quickly',
          rough: 'I need to reply to a customer who is unhappy but I do not want to sound defensive.',
          details: ['an unhappy customer', 'draft a reply', 'calm + helpful', 'acknowledge the problem'],
          prompt: 'Draft a concise reply to an unhappy customer. Acknowledge their frustration without sounding defensive, explain that I am looking into the issue and make the next step clear. Keep the tone calm, human and professional.',
          why: 'We gave AI the audience, tone and purpose, so it has far less to guess.'
        }
      ]
    },

    create: {
      label: 'Create',
      eyebrow: 'A rough idea is enough',
      title: 'Got half an idea? That’s a perfectly good start.',
      intro: 'You bring the thought. We’ll help turn it into a clear request for writing, ideas, plans and creative work.',
      question: 'What are you trying to make?',
      noteTitle: 'Don’t overthink it',
      note: '“I need something for…” is often enough to get started. Prompt engineering sounds far more dramatic than it is.',
      tasks: [
        {
          title: 'Got half an idea',
          subtitle: 'Turn it into a starting point',
          rough: 'I want to do a small dinner for friends but make it feel a bit special.',
          details: ['six friends', 'plan a dinner idea', 'warm + relaxed', 'simple to prepare'],
          prompt: 'Help me plan a relaxed but special dinner for six friends. Suggest a simple theme, an easy three-part menu and two small touches that make the evening feel thoughtful without creating lots of extra work.',
          why: 'We turned the feeling you want into practical details AI can build around.'
        },
        {
          title: 'Make this sound better',
          subtitle: 'Keep your meaning, improve the words',
          rough: 'I wrote a description for my small business but it sounds boring.',
          details: ['potential customers', 'rewrite a description', 'friendly + confident', 'keep it natural'],
          prompt: 'Rewrite my small-business description so it sounds friendly, confident and clear. Keep the original meaning, avoid exaggerated sales language and make it sound like a real person wrote it. Give me one polished version and one shorter alternative.',
          why: 'We explained what “better” means instead of leaving AI to make that decision for you.'
        },
        {
          title: 'Plan a presentation',
          subtitle: 'Start with a clear shape',
          rough: 'I need a short presentation about our new service and do not know how to structure it.',
          details: ['potential customers', 'plan a presentation', 'clear + persuasive', 'six slides maximum'],
          prompt: 'Create a simple six-slide structure for a presentation introducing our new service to potential customers. For each slide, give me the main message, 2–3 supporting points and a suggestion for one useful visual. Keep the language clear and non-technical.',
          why: 'We gave AI the audience, length and format, which turns a vague request into something much easier to use.'
        },
        {
          title: 'Name something',
          subtitle: 'Ideas with a reason behind them',
          rough: 'I need a name for a neighbourhood gardening group.',
          details: ['local residents', 'suggest names', 'friendly + memorable', 'not too corporate'],
          prompt: 'Suggest 12 names for a friendly neighbourhood gardening group. Make them easy to say, welcoming and not too corporate. Mix straightforward names with a few more playful options, and add one short reason beside each name.',
          why: 'We gave AI a feel to aim for and a simple way to present the ideas.'
        }
      ]
    },

    explore: {
      label: 'Explore',
      eyebrow: 'Useful things you can try',
      title: 'Find out what AI is actually good for.',
      intro: 'Skip the technical tour. Try practical examples that show where AI can genuinely make everyday life easier.',
      question: 'Where shall we start?',
      noteTitle: 'No exam at the end',
      note: 'Try something, change it, ask a follow-up. That is usually more useful than learning a pile of AI terminology first.',
      tasks: [
        {
          title: 'Show me something useful',
          subtitle: 'A practical everyday win',
          rough: 'Show me one useful thing I could get AI to help with today.',
          details: ['an everyday user', 'suggest one useful task', 'practical + simple', 'include a prompt to try'],
          prompt: 'Suggest one genuinely useful everyday task I could use AI for today. Choose something that could save time or reduce hassle, explain it in two sentences and give me a ready-to-use example prompt. Avoid technical AI features.',
          why: 'We asked for something practical and immediately testable instead of a broad list of AI capabilities.'
        },
        {
          title: 'What can AI help with?',
          subtitle: 'Start with real-life examples',
          rough: 'I know AI can write things, but what else is actually useful?',
          details: ['someone fairly new to AI', 'show useful possibilities', 'plain + realistic', 'use everyday examples'],
          prompt: 'Give me eight practical examples of ways an ordinary person can use AI beyond simply writing text. Focus on everyday tasks, planning, understanding information and generating ideas. Keep each example to one sentence and avoid technical terminology.',
          why: 'We narrowed the question to practical uses that match what you actually want to discover.'
        },
        {
          title: 'Give me something to try',
          subtitle: 'A five-minute experiment',
          rough: 'Give me an easy AI thing I can try in five minutes.',
          details: ['a curious beginner', 'give a tiny experiment', 'friendly + quick', 'five minutes maximum'],
          prompt: 'Give me one useful AI experiment I can try in five minutes with information I already have, such as a list, email, plan or set of notes. Explain what to paste in, give me the prompt to use and tell me what a good result should look like.',
          why: 'We gave the experiment a time limit and asked for clear steps, so it is easy to actually try.'
        },
        {
          title: 'Surprise me',
          subtitle: 'Something you may not have tried',
          rough: 'Surprise me with a clever but normal use for AI.',
          details: ['an everyday user', 'suggest an unexpected use', 'useful + not gimmicky', 'explain when it helps'],
          prompt: 'Show me one slightly unexpected but genuinely practical use for AI in everyday life. Avoid gimmicks. Explain the situation where it helps, why it is useful and give me a ready-to-use prompt I could try.',
          why: 'We asked AI to optimise for usefulness, not novelty for novelty’s sake.'
        }
      ]
    }
  };

  const normalise = (value) => String(value || '').trim().replace(/\s+/g, ' ').toLowerCase();

  const fallbackPrompt = (roughThought) => {
    const cleaned = String(roughThought || '').trim();
    return `Help me with this: “${cleaned}” Give me a clear, practical result in plain English. If an important detail is missing, ask me one short question before you continue. Keep the answer focused on what I am actually trying to get done.`;
  };

  const init = (root) => {
    if (root.dataset.everydayInitialised === 'true') return;
    root.dataset.everydayInitialised = 'true';

    const queryGoal = (() => {
      try {
        const value = new URLSearchParams(window.location.search).get('goal');
        return VALID_GOALS.includes(value) ? value : null;
      } catch {
        return null;
      }
    })();

    let goal = queryGoal || root.dataset.goal || 'save';
    if (!VALID_GOALS.includes(goal)) goal = 'save';
    let taskIndex = 0;

    const translator = root.querySelector('.everyday-translator');
    const roughInput = root.querySelector('[data-rough-input]');
    const buildButton = root.querySelector('[data-build-button]');
    const copyButton = root.querySelector('[data-copy-button]');
    const copyLabel = root.querySelector('[data-copy-label]');
    const taskButtons = [...root.querySelectorAll('[data-task-index]')];

    const fields = {
      goalLabel: root.querySelector('[data-goal-label]'),
      eyebrow: root.querySelector('[data-eyebrow]'),
      title: root.querySelector('[data-title]'),
      intro: root.querySelector('[data-intro]'),
      question: root.querySelector('[data-question]'),
      noteTitle: root.querySelector('[data-note-title]'),
      note: root.querySelector('[data-note]'),
      who: root.querySelector('[data-detail-who]'),
      job: root.querySelector('[data-detail-job]'),
      tone: root.querySelector('[data-detail-tone]'),
      important: root.querySelector('[data-detail-important]'),
      ready: root.querySelector('[data-ready-prompt]'),
      why: root.querySelector('[data-why]')
    };

    const animateBuild = () => {
      if (!translator) return;
      translator.classList.remove('is-building');
      void translator.offsetWidth;
      translator.classList.add('is-building');
      window.setTimeout(() => translator.classList.remove('is-building'), 850);
    };

    const renderTask = (index, shouldAnimate = false) => {
      const goalData = content[goal];
      const task = goalData.tasks[index] || goalData.tasks[0];
      taskIndex = Math.max(0, Math.min(index, goalData.tasks.length - 1));

      taskButtons.forEach((button, buttonIndex) => {
        const isActive = buttonIndex === taskIndex;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
      });

      roughInput.value = task.rough;
      roughInput.removeAttribute('aria-invalid');
      fields.who.textContent = task.details[0];
      fields.job.textContent = task.details[1];
      fields.tone.textContent = task.details[2];
      fields.important.textContent = task.details[3];
      fields.ready.textContent = task.prompt;
      fields.why.textContent = task.why;
      copyLabel.textContent = 'Copy prompt';

      if (shouldAnimate) animateBuild();
    };

    const renderGoal = (nextGoal, shouldAnimate = false) => {
      if (!VALID_GOALS.includes(nextGoal)) return;
      goal = nextGoal;
      root.dataset.goal = nextGoal;
      const goalData = content[nextGoal];

      fields.goalLabel.textContent = goalData.label;
      fields.eyebrow.textContent = goalData.eyebrow;
      fields.title.textContent = goalData.title;
      fields.intro.textContent = goalData.intro;
      fields.question.textContent = goalData.question;
      fields.noteTitle.textContent = goalData.noteTitle;
      fields.note.textContent = goalData.note;

      taskButtons.forEach((button, index) => {
        const task = goalData.tasks[index];
        if (!task) return;
        const title = button.querySelector('[data-choice-title]');
        const subtitle = button.querySelector('[data-choice-subtitle]');
        if (title) title.textContent = task.title;
        if (subtitle) subtitle.textContent = task.subtitle;
      });

      renderTask(0, shouldAnimate);
    };

    taskButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const index = Number(button.dataset.taskIndex || 0);
        renderTask(index, true);
      });
    });

    roughInput.addEventListener('input', () => {
      roughInput.removeAttribute('aria-invalid');
      copyLabel.textContent = 'Copy prompt';
    });

    buildButton.addEventListener('click', () => {
      const rough = roughInput.value.trim();
      if (!rough) {
        roughInput.setAttribute('aria-invalid', 'true');
        roughInput.focus();
        return;
      }

      const task = content[goal].tasks[taskIndex];
      const isOriginalExample = normalise(rough) === normalise(task.rough);

      if (isOriginalExample) {
        fields.who.textContent = task.details[0];
        fields.job.textContent = task.details[1];
        fields.tone.textContent = task.details[2];
        fields.important.textContent = task.details[3];
        fields.ready.textContent = task.prompt;
        fields.why.textContent = task.why;
      } else {
        const shortJob = rough.length > 42 ? `${rough.slice(0, 39).trim()}…` : rough;
        fields.who.textContent = 'you + the right audience';
        fields.job.textContent = shortJob;
        fields.tone.textContent = 'clear + practical';
        fields.important.textContent = 'ask if a key detail is missing';
        fields.ready.textContent = fallbackPrompt(rough);
        fields.why.textContent = 'We kept your original thought, made the result clearer and told AI what to do if it needs one important detail from you.';
      }

      copyLabel.textContent = 'Copy prompt';
      animateBuild();
    });

    copyButton.addEventListener('click', async () => {
      const text = fields.ready.textContent.trim();
      let copied = false;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
          copied = true;
        }
      } catch {
        copied = false;
      }

      if (!copied) {
        const helper = document.createElement('textarea');
        helper.value = text;
        helper.setAttribute('readonly', '');
        helper.style.position = 'fixed';
        helper.style.opacity = '0';
        document.body.appendChild(helper);
        helper.select();
        try {
          copied = document.execCommand('copy');
        } catch {
          copied = false;
        }
        helper.remove();
      }

      copyLabel.textContent = copied ? 'Copied' : 'Select & copy';
      if (!copied) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(fields.ready);
        selection.removeAllRanges();
        selection.addRange(range);
      }

      window.setTimeout(() => {
        copyLabel.textContent = 'Copy prompt';
      }, 1800);
    });

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type !== 'attributes' || mutation.attributeName !== 'data-goal') continue;
        const requestedGoal = root.dataset.goal;
        if (VALID_GOALS.includes(requestedGoal) && requestedGoal !== goal) {
          renderGoal(requestedGoal, true);
        }
      }
    });

    observer.observe(root, { attributes: true, attributeFilter: ['data-goal'] });

    renderGoal(goal, false);
    requestAnimationFrame(() => root.classList.add('is-ready'));
  };

  const start = () => {
    document.querySelectorAll('[data-everyday-experience]').forEach(init);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
