importScripts('tips.js');

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get(['interval'], (data) => {
    const interval = data.interval || 120;
    chrome.alarms.create('hydrate', {
      periodInMinutes: interval
    });
  });
});

chrome.alarms.onAlarm.addListener(() => {
  chrome.storage.sync.get(['sound', 'goal'], (data) => {
    const tip = hydrationTips[Math.floor(Math.random() * hydrationTips.length)];
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icons/icon.png',
      title: 'Time to Hydrate!',
      message: tip,
      priority: 2
    });

    if (data.sound) {
      const audio = new Audio('sounds/water.mp3');
      audio.play();
    }

    const newGoal = (data.goal || 0) + 1;
    chrome.storage.sync.set({ goal: newGoal });
  });
});
