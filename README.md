# 📝 SmartTask - Fullstack Task Manager App

A full-stack Task Manager web application built using **Angular** (frontend) and **Spring Boot** (backend) with **MongoDB/MySQL** for data storage. Supports **JWT Authentication** and optional **Dockerization**.

---

## 📂 Project Structure

## 🚀 Features

✅ Create / View / Update / Delete tasks   
✅ Task filtering by status (TO_DO, IN_PROGRESS, DONE)  
✅ REST API with Spring Boot  
✅ Angular UI with Reactive Forms  
✅  MySQL support  
✅ Dockerized

---

## 🛠️ Tech Stack

- **Frontend**: Angular, TypeScript, Angular Material  
- **Backend**: Spring Boot, Java, Spring Data JPA  
- **Database**: MySQL  
- **Tools**: Git, VS Code, Docker
  
---

How to Run Backend & Frontend
To get the app running, first make sure your database is set up (you can find the instructions below). Then, go into the backend folder and start the Spring Boot server using the command ./mvnw spring-boot:run. Once the backend is up and running, open a new terminal, go into the frontend folder, install the dependencies with npm install, and start the Angular app using ng serve. After that, just open your browser and go to http://localhost:4200 — and you're good to go!


## 🛠️ MySQL Database Configuration

Before running the backend, make sure your MySQL server is up and running.

### 📌 Step 1: Create the Database
Use any MySQL tool (MySQL CLI, Workbench, phpMyAdmin, etc.) and run:

In SQL  - CREATE DATABSE tasks;

### Step 2: Configure spring boot 
In the file backend/src/main/resources/application.properties, make sure you have the following:
### MySQL Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
spring.datasource.username=Your_username
spring.datasource.password=your_mysql_password

### JPA Settings
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect

### Step 3: Make Sure MySQL Driver is in pom.xml
In backend/pom.xml, check if this dependency exists. If not, add it:

<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
</dependency>

### Step 4: Run the Backend
cd backend
./mvnw spring-boot:run

---

## 📸 Screenshots

### 📋 Task List View

![Task_m1](https://github.com/user-attachments/assets/6ecac005-2c0a-4215-a290-482855a48e95)

### 📝 Task Creation Form

![Task_m2](https://github.com/user-attachments/assets/3967d0de-755c-463d-88b8-6b1a0b2477ee)

