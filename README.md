# Prescripto - Digital Appointment Management System

## 📖 Introduction

Prescripto is a digital appointment management system designed to streamline the process of booking, managing, and accessing healthcare appointments. Traditional paper-based appointment systems often lead to scheduling conflicts, loss of records, and inconvenience for both doctors and patients. Prescripto addresses these challenges by providing a secure, efficient, and user-friendly platform for healthcare appointment management.

The system enables doctors to manage their appointment schedules, patients to book and track appointments seamlessly, and administrators to oversee doctor availability and appointment records. By digitizing appointment management, Prescripto improves healthcare accessibility, reduces administrative workload, and enhances overall operational efficiency.

---

## 🚀 Features

### 🔐 User Authentication & Authorization

* Secure user registration and login.
* JWT-based authentication and authorization.
* Role-based access control:

  * **Admin**
  * **Doctor**
  * **Patient**

### 👨‍⚕️ Doctor Management

* Manage doctor profiles and availability.
* View and manage scheduled appointments.
* Maintain patient appointment records.

### 👨‍💻 Patient Management

* Register and manage personal profiles.
* Book appointments with available doctors.
* View appointment history and upcoming appointments.

### 📅 Appointment Management

* Schedule appointments online.
* Track doctor availability and appointment slots.
* Manage appointment records efficiently.

### 🔔 Notifications & Alerts

* Toast notifications for appointment booking and updates.
* Real-time feedback for user actions.

### 🛡️ Security Features

* Password encryption and secure authentication.
* JWT token-based session management.
* Protected routes based on user roles.

---

## 🛠️ Technology Stack

### Frontend

* React.js
* Next.js
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Authentication

* JSON Web Token (JWT)

---

## 📂 Project Structure

```text
Prescripto/
│
├── client/              # Frontend Application
├── config/              # Database Configuration
├── models/              # MongoDB Models
├── server.js            # Backend Entry Point
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/your-username/prescripto.git
cd prescripto
```

### Install Backend Dependencies

```bash
npm install
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### Run Backend Server

```bash
npm start
```

### Run Frontend Application

```bash
cd client
npm start
```

---

## 📌 Functional Requirements

### User Authentication & Roles

* Users can register and log in as Admin, Doctor, or Patient.
* Secure login with encrypted passwords and session management.

### Appointment Management

* Patients can book appointments with doctors.
* Doctors can manage appointment schedules.
* Admin can monitor appointment activities.

### Patient Management

* Maintain patient profiles and appointment records.
* Access appointment history and details.

### Notifications & Alerts

* Toast alerts for appointment booking and updates.

---

## 🎯 Benefits

* Reduces paperwork and manual scheduling.
* Improves appointment management efficiency.
* Enhances data security and accessibility.
* Provides a seamless user experience for doctors and patients.
* Supports scalable healthcare management solutions.

---

## 🔮 Future Enhancements

* AI-powered appointment recommendations.
* Telemedicine and video consultation integration.
* Email and SMS notifications.
* Online payment gateway integration.
* Blockchain-based healthcare record management.
* Advanced analytics and reporting dashboard.

---

## 👩‍💻 Author

**Prachi Patil**

MCA Student | Full Stack Developer

Technologies: React.js, Node.js, Express.js, MongoDB, JavaScript, Tailwind CSS
