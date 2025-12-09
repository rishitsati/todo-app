# React To-Do List Application

This project is a simple To-Do List application built using **React** and the **Vite** toolchain.

It allows users to add new tasks, mark tasks as completed, delete tasks, and edit existing tasks, fulfilling the core requirements of the React assignment.

## 📋 Requirements Fulfilled

  * **Project Setup:** Created using Vite[cite: 8].
  * **Core Components:** Uses functional components including `App`, `Header`, `ToDoList`, and `ToDoItem`.
  * **State Management:** Application state (the list of to-dos) is managed in the `App` component and passed down via props.
  * **Dynamic Lists:** To-do items are rendered dynamically using the `.map()` function with unique keys.
  * **Event Handling (CRUD):**
      * Add new items [cite: 25]
      * Mark items as completed (Toggle) [cite: 26]
      * Delete items [cite: 27]
      * Edit existing items [cite: 28]

## 🛠️ Technology Stack

  * **Framework:** React (Functional Components) [cite: 5]
  * **Build Tool:** Vite [cite: 8]
  * **Language:** JavaScript (ES6+)
  * **Styling:** Pure CSS (or mention if you used Bootstrap/Tailwind)

## 🚀 Installation Guide

Follow these steps to set up and run the project locally on your machine.

### Prerequisites

You need to have **Node.js** and **npm** (Node Package Manager) installed.

### 1\. Clone the Repository

```bash
git clone https://github.com/rishitsati/todo-app.git
cd react-todo-assignment
```

### 2\. Install Dependencies

Install all the required packages listed in the `package.json` file:

```bash
npm install
```

> **Note:** As per submission instructions, please ensure you remove the `node_modules` folder before submitting your final zipped project (if applicable).

### 3\. Run the Application

Start the development server. The application will typically open on `http://localhost:5173/`.

```bash
npm run dev
```

### 4\. Running the Build (Optional)

You can also build the production version of the app:

```bash
npm run build
```

The compiled files will be placed in the `dist` directory.

-----

Now that the `README.md` is ready, the only remaining mandatory steps are:

1.  **Enhance Styling** (to make it user-friendly and visually appealing, if desired).
2.  **Commit History:** Ensure you have at least 5 relevant commits.
3.  **Submit** the GitHub repository link.

Would you like to review your commits or add some more advanced styling?