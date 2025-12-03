

---

# ⏱️ Simple Stopwatch

A lightweight stopwatch built with **HTML, CSS, and JavaScript**.
It supports **Start**, **Pause**, **Resume**, and **Reset** functionality and displays elapsed time in a clean digital format.

## 🚀 Features

* Start, pause, and reset the timer
* Accurate time tracking using `Date.now()`
* Milliseconds displayed with padding for cleaner formatting
* Responsive and easy-to-modify design
* Beginner-friendly code structure

## 📁 Project Structure

```
/project
  │── index.html     # Structure of the stopwatch
  │── styles.css     # Styling and layout
  └── script.js      # Stopwatch logic
```

## 🧠 How It Works

* Time tracking is done using **timestamp differences** (`Date.now()`).
* A repeating interval updates the display every few milliseconds.
* Formatting uses `.padStart()` to keep numbers consistent (e.g., `04`, `09`, `123`).

## ▶️ How to Use

1. Open `index.html` in your browser.
2. Click **Start** to begin the stopwatch.
3. Click **Pause** to stop time temporarily.
4. Click **Reset** to return the stopwatch to zero.

## 💡 Customization

Feel free to:

* Change the colors in `styles.css`
* Add lap functionality
* Add keyboard shortcuts
* Improve the UI

## 📜 License

This project is free to use and modify for learning or personal projects.

---
