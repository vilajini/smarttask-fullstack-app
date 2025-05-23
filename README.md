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

### 📸 Video
![Task_m2](https://github.com/user-attachments/assets/b91d5a4b-2283-462f-9534-03d96f166726)
![Task_m1](https://github.com/user-attachments/assets/58ffb30e-664b-4b39-8a02-dfaa172e4d6c)
https://github.com/user-attachments/assets/8c94464c-b02e-468f-a901-5116a0971213


---

### 🚀 Future Improvements

* Add authentication (JWT)
* Connect to a real database (MySQL/PostgreSQL)
* Filter/sort/search tasks
* Deploy with Docker or Vercel/Render

---

### 📬 Contact

Created by [@vilajini](https://github.com/vilajini) – feel free to connect!
