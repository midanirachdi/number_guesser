# 🔢 Number Guesser

A simple number-guessing game built with vanilla JavaScript. Guess a number within a range before you run out of attempts.

## 📖 About

The player has three attempts to guess a randomly chosen number between 1 and 10. After each wrong guess, the app shows how many attempts remain. Win by guessing correctly, or lose when attempts run out and the answer is revealed.

You can change the minimum value, maximum value, and number of guesses in `js/app.js`.

## ✨ Features

- Random number generation within a configurable range
- Input validation for out-of-range or non-numeric guesses
- Remaining attempts tracked with `localStorage` across page reloads
- Play again without manually refreshing the page

## 🎮 How to Play

1. Open `index.html` in your browser.
2. Enter a number between the displayed minimum and maximum.
3. Click **Submit**.
4. Keep guessing until you win or run out of attempts.
5. Click **Play again** to start a new round.

## 🚀 Getting Started

No build step or dependencies are required.

```bash
# Clone the repository
git clone https://github.com/midanirachdi/number_guesser.git

# Open the app
open index.html
```

Alternatively, serve the project with any static file server and open it in your browser.

## ⚙️ Configuration

Edit these values at the top of `js/app.js`:

| Variable | Default | Description |
| --- | --- | --- |
| `min` | `1` | Lowest possible number |
| `max` | `10` | Highest possible number |
| `remainingGuesses` | `3` | Number of attempts per round |

## 🛠️ Tech Stack

- [Skeleton](http://getskeleton.com/) — lightweight CSS framework
- [Raleway](https://fonts.google.com/specimen/Raleway) — web font
- Vanilla JavaScript — no frameworks or bundlers

## 📁 Project Structure

```
number_guesser/
├── css/
│   ├── normalize.css
│   └── skeleton.css
├── fonts/
│   └── raleway.css
├── js/
│   └── app.js
├── index.html
└── LICENSE
```

## 📸 Screenshot

![Landing page of the Number Guesser app](https://i.imgur.com/FDuwHQM.png)

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## 👤 Author

Midani Rachdi
