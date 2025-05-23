## 🧠 SmartTask Fullstack App

A simple full-stack **Task Management** application built with **Angular** (frontend) and **Spring Boot** (backend). It allows users to perform core CRUD operations—create, view, update, and delete tasks.

---

### 🔧 Tech Stack

| Frontend         | Backend     | Database      |
| ---------------- | ----------- | ------------- |
| Angular          | Spring Boot | MySQL         |
| Angular Material | REST API    | JPA           |

> *\*You can use either in-memory H2 for dev or MySQL/PostgreSQL for production.*

---

### ✨ Features

* Add new tasks
* View all tasks
* Update task title, description & status
* Delete tasks
* Responsive UI with Angular Material

---

### 📁 Project Structure

```
smarttask-fullstack-app/
│
├── backend/              # Spring Boot backend
│   ├── src/
│   └── pom.xml
│
├── frontend/             # Angular frontend
│   ├── src/
│   └── angular.json
```

---

### ▶️ How to Run

#### 👥 Backend – Spring Boot

```bash
cd backend
./mvnw spring-boot:run
```

* Server runs on: `http://localhost:8080`

#### 🌐 Frontend – Angular

```bash
cd frontend
npm install
ng serve
```

* Frontend runs on: `http://localhost:4200`

---

### 📸 Screenshots

*Add some screenshots here (Postman, UI previews, terminal logs, etc.)*

---

### 🚀 Future Improvements

* Add authentication (JWT)
* Connect to a real database (MySQL/PostgreSQL)
* Filter/sort/search tasks
* Deploy with Docker or Vercel/Render

---

### 📬 Contact

Created by [@vilajini](https://github.com/vilajini) – feel free to connect!
