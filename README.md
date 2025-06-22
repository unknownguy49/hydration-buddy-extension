# Hydration Buddy

Hydration Buddy is a browser extension that reminds you to drink water at regular intervals. It features customizable reminder intervals, light/dark mode, hydration tips, and a daily goal tracker.

## Features

- **Customizable Reminder Interval:** Choose how often you want to be reminded to hydrate.
- **Dark/Light Mode:** Toggle between dark and light themes.
- **Hydration Tips:** Get a random hydration tip with each reminder.
- **Daily Goal Tracker:** Track how many glasses of water you've had today and reset the count anytime.

## Installation

Hydration Buddy is designed for modern browsers that support the WebExtension API.

1. Download or clone this repository.
2. Open your browser's extensions/add-ons page:
   - **Chrome/Edge/Brave/Opera:** Go to `chrome://extensions/`
   - **Firefox:** Go to `about:debugging#/runtime/this-firefox`
   - **Safari:** Open Safari, go to Preferences > Extensions, and enable Developer menu. Use "Show Extension Builder" to load the unpacked extension.
3. Enable "Developer mode" or "Load Temporary Add-on" as appropriate.
4. Click "Load unpacked" (Chromium browsers), "Load Temporary Add-on" (Firefox), or use Safari's Extension Builder to select the project directory.

> **Note:** Some APIs or features may behave differently depending on your browser's extension API support and version.

## Usage

- Click the Hydration Buddy icon in your browser toolbar to open the popup.
- Set your preferred reminder interval from the dropdown.
- Toggle between dark and light mode.
- View your daily water intake count and reset it with the "Reset Count" button.

## File Structure

- `manifest.json` – Extension manifest file.
- `popup.html` – The extension's popup UI.
- `popup.js` – Handles popup logic and user interactions.
- `popup.css` – Styles for the popup UI.
- `background.js` – Handles alarms, notifications, and hydration tips.
- `icons/` – Extension icon(s).

## Development

- All settings and counts are stored using the browser's `storage.sync` API.
- Reminders are managed using the browser's `alarms` API.
- Notifications use the browser's `notifications` API.
- The extension does not require any external dependencies.

---

## Stay hydrated!

Stay hydrated!
