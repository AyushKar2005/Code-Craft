# 🚀 Code Runner Platform

A full-stack online code execution platform that allows users to write, run, and test code directly in the browser with real-time output and custom input support.

Built using modern web technologies with a clean developer-focused UI, secure execution flow, and multi-language support.

---

# ✨ Features

* ⚡ Real-time code execution
* 🧠 Multi-language support
* 🖥️ Monaco code editor integration
* 📥 Custom input (stdin) support
* 📤 Instant output rendering
* 🎨 Responsive and modern UI
* 🔒 Secure isolated code execution using Docker
* 🌐 Full-stack architecture
* 📂 File-based execution handling
* ⏱️ Fast execution workflow

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Next.js
* TypeScript
* Tailwind CSS
* Monaco Editor

## Backend

* Node.js
* Express.js
* Docker

## Other Tools

* REST APIs
* Child Process / Containerized Execution
* File System Handling

---

# 📸 Project Overview

The platform provides an interactive coding environment where users can:

* Select a programming language
* Write code in a professional editor
* Provide custom input
* Execute code securely
* View output instantly

The backend handles code compilation and execution inside isolated Docker containers to ensure security and stability.

---

# 🧩 Supported Languages

* C
* C++
* Java
* Python
* JavaScript

More languages can be added easily through the execution engine.

---

# 📁 Folder Structure

```bash
code-runner/
│
├── client/              # Frontend application
├── server/              # Backend server
├── docker/              # Docker execution setup
├── temp/                # Temporary execution files
├── public/
├── components/
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone the Repository

```bash
git clone <your-repository-url>
cd code-runner
```

## 2️⃣ Install Dependencies

### Frontend

```bash
cd client
npm install
```

### Backend

```bash
cd server
npm install
```

---

# ▶️ Running the Project

## Start Frontend

```bash
npm run dev
```

## Start Backend

```bash
npm start
```

---

# 🐳 Docker Setup

Make sure Docker is installed and running.

Verify installation:

```bash
docker --version
```

The platform uses Docker containers for isolated and secure code execution.

---

# 🔐 Security Considerations

* Isolated execution environment
* Temporary file cleanup
* Restricted container access
* Controlled execution flow
* Prevents direct system access

---

# 💡 Future Improvements

* User authentication
* Code sharing
* Execution history
* Theme customization
* AI code assistance
* Collaborative coding rooms
* Online compiler analytics
* Competitive programming mode

---

# 🧠 What I Learned

While building this project, I explored:

* Full-stack application architecture
* Docker-based code execution
* Backend process management
* Secure sandbox environments
* Frontend editor integrations
* API communication
* Real-time execution handling

---

# 👨‍💻 Author

Ayush Kar

* B.Tech CSE Student
* Passionate about Full-Stack Development, AI, and System Design

---

# ⭐ Contributions

Contributions, suggestions, and improvements are always welcome.

Feel free to fork the project and experiment with new features.

---

# 📜 License

This project is open-source and available under the MIT License.
