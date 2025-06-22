const intervalSelect = document.getElementById('interval');
const soundCheckbox = document.getElementById('sound');
const themeToggle = document.getElementById('themeToggle');
const goalCount = document.getElementById('goalCount');
const resetBtn = document.getElementById('resetBtn');

chrome.storage.sync.get(['interval', 'sound', 'theme', 'goal'], (data) => {
  intervalSelect.value = data.interval || 120;
  soundCheckbox.checked = data.sound || false;
  themeToggle.checked = data.theme || false;
  goalCount.innerText = data.goal || 0;

  if (data.theme) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});

intervalSelect.addEventListener('change', () => {
  const val = parseInt(intervalSelect.value);
  chrome.storage.sync.set({ interval: val });
  chrome.alarms.clearAll(() => {
    chrome.alarms.create('hydrate', { periodInMinutes: val });
  });
});

soundCheckbox.addEventListener('change', () => {
  chrome.storage.sync.set({ sound: soundCheckbox.checked });
});

themeToggle.addEventListener('change', () => {
  const isDark = themeToggle.checked;
  chrome.storage.sync.set({ theme: isDark });
  document.body.className = isDark ? 'dark' : '';
});

resetBtn.addEventListener('click', () => {
  chrome.storage.sync.set({ goal: 0 });
  goalCount.innerText = '0';
});
