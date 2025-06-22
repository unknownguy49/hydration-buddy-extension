const intervalSelect = document.getElementById("interval");
const soundCheckbox = document.getElementById("sound");
const themeToggle = document.getElementById("themeToggle");
const goalCount = document.getElementById("goalCount");
const resetBtn = document.getElementById("resetBtn");

chrome.storage.sync.get(["interval", "sound", "theme", "goal"], (data) => {
  if (intervalSelect) intervalSelect.value = data.interval || 120;
  if (soundCheckbox) soundCheckbox.checked = data.sound || false;
  if (themeToggle) themeToggle.checked = data.theme || false;
  if (goalCount) goalCount.innerText = data.goal || 0;

  if (data.theme) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});

if (intervalSelect) {
  intervalSelect.addEventListener("change", () => {
    const val = parseInt(intervalSelect.value);
    chrome.storage.sync.set({ interval: val });
    chrome.alarms.clearAll(() => {
      chrome.alarms.create("hydrate", { periodInMinutes: val });
    });
  });
}

if (soundCheckbox) {
  soundCheckbox.addEventListener("change", () => {
    chrome.storage.sync.set({ sound: soundCheckbox.checked });
  });
}

if (themeToggle) {
  themeToggle.addEventListener("change", () => {
    const isDark = themeToggle.checked;
    chrome.storage.sync.set({ theme: isDark });
    document.body.className = isDark ? "dark" : "";
  });
}

if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    chrome.storage.sync.set({ goal: 0 });
    if (goalCount) goalCount.innerText = "0";
  });
}
