const hydrationTips = [
  "Your brain is 75% water—hydrate it!",
  "Drink water before you feel thirsty.",
  "A hydrated body is a happy body.",
  "Water helps with focus and clarity.",
  "Hydration supports healthy skin!",
  "Even mild dehydration can zap your energy.",
  "Water improves digestion and metabolism.",
  "Replace one sugary drink today with water!",
  "Cold water boosts alertness too!",
  "Your joints need water too!",
];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get(["interval"], (data) => {
    const interval = data.interval || 120;
    chrome.alarms.create("hydrate", {
      periodInMinutes: interval,
    });
  });
});

chrome.alarms.onAlarm.addListener(() => {
  chrome.storage.sync.get(["goal"], (data) => {
    const tip = hydrationTips[Math.floor(Math.random() * hydrationTips.length)];
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icons/icon.png",
      title: "Time to Hydrate!",
      message: tip,
      priority: 2,
    });

    const newGoal = (data.goal || 0) + 1;
    chrome.storage.sync.set({ goal: newGoal });
  });
});
