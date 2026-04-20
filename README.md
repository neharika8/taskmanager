# 🚀 Task Manager Web Application

A full-stack web application that allows users to manage their daily tasks with secure authentication and real-time database storage.

---

## 🌐 Live Demo

* 🔗 Frontend: https://taskmanager-sigma-umber.vercel.app
* 🔗 Backend API: https://taskmanager-thdl.onrender.com

---

## 📌 Features

* 🔐 User Authentication (Signup & Login)
* 🔑 JWT-based secure login system
* 📝 Add new tasks
* 📋 View all tasks (user-specific)
* ❌ Delete tasks
* ✔ Mark tasks as completed
* 🚪 Logout functionality
* ☁️ Fully deployed (Frontend + Backend)

---

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS (Bootstrap)
* JavaScript (Fetch API)

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose)

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## 📂 Project Structure

```
project/
│
├── backend/
│   ├── server.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── task.js
│   └── .env
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── signup.html
│   └── dashboard.html
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the backend folder:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## ▶️ Run Locally

### 1️⃣ Clone Repository

```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2️⃣ Start Backend

```
cd backend
npm install
node server.js
```

### 3️⃣ Run Frontend

Open `frontend/index.html` in your browser

---

## 🔌 API Endpoints

### Authentication

* POST `/api/auth/signup` → Register user
* POST `/api/auth/login` → Login user

### Tasks

* GET `/api/tasks` → Get all tasks
* POST `/api/tasks` → Create task
* PUT `/api/tasks/:id` → Update task
* DELETE `/api/tasks/:id` → Delete task

---

## 🎥 Demo

(Add your demo video link here – Google Drive or YouTube)

---https://drive.google.com/file/d/1-T_p2nM-WGd_pAUjrk89XKhuEDuatURN/view?usp=sharing

## 🙌 Author

**Neharika Kavala**

---

## 💡 Future Improvements

* ✏️ Edit task functionality UI
* 📅 Add due dates & reminders
* 📱 Mobile responsive design improvements
* 🌙 Dark mode support
* 📊 Task analytics dashboard

---
