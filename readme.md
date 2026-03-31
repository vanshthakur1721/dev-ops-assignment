# 🏋️ Gym Member Tracker API

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Docker](https://img.shields.io/badge/Docker-Container-blue)
![CI](https://img.shields.io/badge/CI-GitHub_Actions-orange)

---

## 📌 Project Overview
The Gym Member Tracker API is a simple and efficient backend application built using Node.js and Express. It allows gym owners to manage members, track subscription plans, and maintain records easily.

This project also demonstrates modern DevOps practices such as containerization using Docker and continuous integration using GitHub Actions.

---

## 🚀 Features
- ➕ Add new gym members  
- 📋 View all members  
- 📊 Track subscription status  
- ⚡ Lightweight and fast API  
- 🔄 CI pipeline automation  

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js  
- **Containerization:** Docker  
- **CI/CD:** GitHub Actions  

---

## 📂 Project Structure
├── index.js
├── package.json
├── Dockerfile
└── .github/
└── workflows/
└── main.yml


---

## ▶️ Running the Application Locally

### Step 1: Install Dependencies
```bash
npm install

Step 2: Start Server
node index.js

Step 3: Open Browser
http://localhost:3000

🔹 Home Route
GET /
🔹 Get All Members
GET /members
🔹 Add Member
POST /add-member
Request Body:
{
  "name": "Vansh",
  "plan": "Monthly"
}
🐳 Docker Setup
Build Docker Image
docker build -t gym-app .
Run Docker Container
docker run -p 3000:3000 gym-app
⚙️ Continuous Integration (CI)

This project uses GitHub Actions to automate the development workflow.

✔ Pipeline Features:
Automatically triggered on every push
Installs project dependencies
Runs basic checks
Builds Docker image
🎯 Key Learnings
Building REST APIs using Express.js
Containerizing applications using Docker
Setting up CI pipelines using GitHub Actions
Automating build processes
🚀 Future Improvements
🔐 Add authentication (JWT)
🗄️ Integrate database (MongoDB)
🌐 Build frontend dashboard
📈 Add analytics and reports
👨‍💻 Author

Vansh Thakur

📌 Conclusion

This project demonstrates a complete workflow of developing a backend application, containerizing it, and automating the build process using CI tools. It reflects real-world development and deployment practices used in the industry.


