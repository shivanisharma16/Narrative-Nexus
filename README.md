# 📌 Narrative Nexus - AI Content Generator  

**Narrative Nexus** is an AI-powered content generator application designed to help users create engaging and high-quality content efficiently. Built using **Next.js, React, Tailwind CSS, PostgreSQL, Drizzle ORM, and Clerk for authentication**, the platform allows users to generate AI-driven content through customizable templates.  

![Hero Screenshot](screenshots/hero-image.png)  

---

## 🚀 Features  

✅ **AI-Powered Content Generation** – Generate high-quality text efficiently using AI.  
✅ **User Authentication** – Secure authentication with **Clerk**.  
✅ **Customizable Templates** – Users can create and modify content templates.  
✅ **Dashboard for Usage & Subscriptions** – View usage statistics and manage subscriptions.  
✅ **Responsive UI** – Built with **Tailwind CSS** for a seamless user experience.  

---

## 🛠 Tech Stack  

```bash
Frontend:    Next.js, React, Tailwind CSS  
Backend:     Next.js API routes, PostgreSQL, Drizzle ORM  
Auth:        Clerk  
Payments:    Razorpay  
AI Model:    Google's Free AI API  
```

---

## 📂 Project Structure  

```bash
/narrative-nexus
│── /app
│   ├── /auth       # Authentication pages
│   ├── /dashboard  # User dashboard
│   ├── /api        # Backend API routes
│── /components     # Reusable UI components
│── /lib           # Database configuration with Drizzle ORM
│── /public        # Static assets (images, icons, etc.)
│── /styles        # Global styles
│── next.config.js  # Next.js configuration
│── package.json   # Dependencies & scripts
│── README.md      # Project documentation
```

---

## 🔧 Installation  

### **Prerequisites**  
Ensure you have the following installed:  

```sh
# Install Node.js (v18 or later)
https://nodejs.org/

# Install npm (comes with Node.js) or yarn
npm -v   # Check npm version
yarn -v  # Check yarn version (if using yarn)

# Install PostgreSQL and set up a database
https://www.postgresql.org/download/
```

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/your-username/narrative-nexus.git
cd narrative-nexus
```

### **2️⃣ Install Dependencies**  
```sh
npm install
```

### **3️⃣ Set Up Environment Variables**  
Create a `.env.local` file in the root directory and add:  

```sh
DATABASE_URL=your_postgresql_connection_string
CLERK_SECRET_KEY=your_clerk_secret
RAZORPAY_KEY=your_razorpay_key
GOOGLE_AI_API_KEY=your_google_api_key
```

### **4️⃣ Run the Application**  
```sh
npm run dev
```
The application will be available at **http://localhost:3000**  

---

## 📸 Screenshots  

### **Home Page**
![Home Page](screenshots/homepage.png)  

### **Dashboard**
![Dashboard](screenshots/dashboard.png)  

### **AI Content Generation**
![AI Generator](screenshots/generator.png)  

---

## 🚀 Deployment  

### **Vercel Deployment**  
```bash
1. Connect your GitHub repo to Vercel.  
2. Set up environment variables in Vercel's settings.  
3. Deploy with one click!  
```

### **Self-Hosting (Optional)**  
To deploy manually, build the project and start it:  
```sh
npm run build
npm start
```

---

## 🛠 Future Enhancements  

```bash
- 🌟 Advanced AI models for better content generation  
- 🔥 More customizable templates  
- 📊 Analytics and user insights  
```

---

