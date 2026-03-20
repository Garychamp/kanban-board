# Kanban Board

A dynamic, browser-based Kanban board for organizing and tracking tasks across three workflow stages: **To Do**, **In Progress**, and **Done**. Tasks persist between sessions using the browser's `localStorage`.

🔗 **[Live Demo](https://garychamp.github.io/kanban-board/)**

---

## Screenshot

![Kanban Board Screenshot](https://github.com/user-attachments/assets/351de2df-5134-4c25-9517-13e4b51724cf)

---

## Features

- 📋 **Three-column layout** — To Do, In Progress, and Done
- ➕ **Add tasks** — Click the "+ Add Task" button in any column to create a new task
- 🗑️ **Delete tasks** — Remove individual tasks with the delete button on each card
- 🖱️ **Drag and drop** — Move tasks between columns by dragging them
- 💾 **Persistent storage** — Tasks are saved to `localStorage` and restored on page reload
- 📱 **Responsive design** — Works on both desktop and mobile screens

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling and responsive layout |
| JavaScript (Vanilla) | Interactivity, drag-and-drop, and localStorage |

---

## Getting Started

No build steps or dependencies required. Simply open the app in a browser:

1. Clone the repository:
   ```bash
   git clone https://github.com/Garychamp/kanban-board.git
   ```
2. Open `index.html` in your browser.

Or use the **[live demo](https://garychamp.github.io/kanban-board/)** directly.

---

## Usage

1. Click **+ Add Task** in any column and enter your task in the prompt.
2. Drag a task card to move it to a different column.
3. Click the **×** button on a card to delete that task.
4. All changes are automatically saved to your browser's local storage.

---

## License

This project is licensed under the [MIT License](LICENSE).
