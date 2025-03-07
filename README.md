# 🌍 Full Stack Greeting App

A simple full-stack web application that allows users to enter their name and receive a personalized greeting. Built with **React (Vite) + Tailwind CSS** for the frontend and **Node.js + Express** for the backend.

## 🚀 Features

- 📜 **REST API**: Backend API to generate greetings.
- ⚡ **Fast Frontend**: Built using React with Vite for quick performance.
- 🎨 **Styled with Tailwind CSS**: Modern UI design.
- 🔒 **CORS Enabled**: Ensures smooth API communication.
- 🌍 **Deployable**: Easily deploy to Render, Vercel, or Railway.

---

## 🏗️ Tech Stack

| Technology       | Purpose               |
| ---------------- | --------------------- |
| **React (Vite)** | Frontend UI           |
| **Tailwind CSS** | Styling               |
| **Node.js**      | Backend               |
| **Express.js**   | API Handling          |
| **Axios**        | HTTP Requests         |
| **CORS**         | Cross-Origin Requests |

---

## 📂 Project Structure

fullstack-greeting-app/
│── backend/ # Express.js API
│ ├── server.js # API logic
│ ├── package.json # Dependencies

│── frontend/ # React app (Vite)
│ ├── src/
│ ├── App.jsx # Main UI │
│ ├── main.jsx # React entry point
│ ├── tailwind.config.js # Tailwind setup
│── README.md # Project documentation

---

## 🔧 Installation & Setup

### 🖥️ 1. Clone the Repository

```bash
git clone https://github.com/bablichoudhary/Greeting_App.git
cd Greeting_App

Backend Setup (Node.js + Express)

cd backend
npm install
node server.js

Server will run on http://localhost:8000

Frontend Setup (React + Vite + Tailwind)

cd frontend
npm install
npm run dev

```

🌍 API Endpoints
Method GET  
Endpoint /api/greet?name=Babli
Description Returns greeting for John
