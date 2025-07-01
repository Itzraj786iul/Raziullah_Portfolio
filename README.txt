# 🧠 Raziullah Ansari - Data Science Portfolio

Welcome to my professional portfolio website built to showcase my skills, projects, and expertise in data science, machine learning, and analytics.

🌐 **Live Site**: [https://raziullah-portfolio.vercel.app](https://raziullah-portfolio.vercel.app)

![Portfolio Preview](https://raw.githubusercontent.com/Itz793/Raziullah_Portfolio/main/public/images/preview.png)

---

## 📁 Project Structure

da_portfolio/
├── public/ # Frontend (HTML, CSS, JS)
├── backend-contact-form/ # Backend (Express.js + Nodemailer)
│ └── server.js
├── vercel.json # Vercel routing config
├── package.json
└── README.md


---

## 💼 Features

- **Responsive & Professional UI/UX**
- **Contact Form with:**
  - Name, Email, and Message fields
  - Backend integration using Express
  - Nodemailer to send emails directly to Gmail
- **Form submissions emailed instantly**
- **Full deployment using Vercel**

---

## ✨ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Node.js, Express.js, Nodemailer
- **Deployment:** Vercel
- **Email Delivery:** Gmail SMTP (App Password)

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

git clone https://github.com/Itzraj786iul/Raziullah_Portfolio.git
cd Raziullah_Portfolio


### 2. Install Backend Dependencies

cd backend-contact-form
npm install

*Installs express, cors, nodemailer*

---

### 🔐 Gmail App Password Setup

1. **Visit [Google App Passwords](https://myaccount.google.com/apppasswords)**
2. **Generate a 16-digit password for "Mail"**
3. **Use that in `server.js`:**


auth: {
user: 'your-email@gmail.com',
pass: 'your-app-password'
}

**⚠️ Always use Gmail App Password — never your real password.**

---

### ✅ Environment Variables (Optional)

Instead of hardcoding, use a `.env` file in `backend-contact-form`:

**.env**

MAIL_USER=your-email@gmail.com
MAIL_PASS=your-app-password


**In `server.js`:**
require('dotenv').config();

const transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
user: process.env.MAIL_USER,
pass: process.env.MAIL_PASS
}
});

**Don’t forget to set environment variables on Vercel Dashboard as well!**

---

### 🚀 Deployment on Vercel

**`vercel.json` ensures both frontend and backend are routed properly:**

{
"version": 2,
"builds": [
{ "src": "backend-contact-form/server.js", "use": "@vercel/node" },
{ "src": "public/**/", "use": "@vercel/static" }
],
"routes": [
{ "src": "/contact", "dest": "/backend-contact-form/server.js" },
{ "src": "/(.)", "dest": "/public/$1" }
]
}

**Deploy Steps:**
1. **Push project to GitHub**
2. **Go to [https://vercel.com](https://vercel.com)**
3. **Click New Project → Select repo**
4. **Configure environment variables (if needed)**
5. **Click Deploy**

---

### 📦 Form JS Logic (Frontend)

const form = document.getElementById('contactForm');

form.addEventListener('submit', async (e) => {
e.preventDefault();

const payload = {
name: document.getElementById('name').value,
email: document.getElementById('email').value,
message: document.getElementById('message').value
};

try {
const res = await fetch('/contact', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(payload)
});const result = await res.json();

if (result.success) {
  alert('✅ Message sent successfully!');
  form.reset();
} else {
  alert('❌ Failed to send message.');
}
} catch (error) {
alert('❌ Server error. Is the backend running?');
}
});


---

### 🛡️ Security Notes

- **❌ Never commit passwords or secrets to GitHub**
- **✅ Use `.env` files locally and environment variables on Vercel**
- **✅ Use Gmail App Passwords, not your Gmail login**

---

### 📧 Contact

You can reach me through the contact form on the live site:

🔗 [https://raziullah-portfolio.vercel.app](https://raziullah-portfolio.vercel.app)

---

### 🏷 License

This project is for personal portfolio and educational use only.  
© 2025 Raziullah Ansari. All rights reserved.

---
