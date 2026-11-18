# FitNova – Adaptive Fitness Intelligence Platform

FitNova is an AI-powered fitness platform that combines workout planning, diet guidance, progress tracking, analytics and chat support in one full-stack web application. Instead of static templates, it adjusts recommendations based on the user's activity and progress history.

## Features

### Account and Profile
* Secure signup and login with JWT cookie sessions.
* Email OTP verification and password recovery.
* Personal health profile: age, gender, height, weight, activity level and food preference.
* Automatic BMI and BMR calculation.
* Profile photo upload.

### AI Plans
* Personalized daily diet plan with calories, protein, carbs and fats.
* Weekly workout plan based on goal and fitness level.
* One-click full plan regeneration.
* Weekly automatic plan adjustment based on progress.

### AI Chat
* AI fitness assistant for logged-in users.
* Guest chat on the public site with usage limits.

### Progress Tracking
* Log weight, workouts and daily check-ins.
* Streak tracking and achievement badges.
* Goal setting, goal progress and completion.
* Weight timeline and progress graphs.

### Analytics and Reports
* Weekly, monthly and advanced analytics.
* Workout adherence, diet adherence and habit score.
* Monthly fitness report with PDF download.

### Premium Coaching
* Custom macro targets.
* Meal swaps and meal adjustments.
* Recovery insights.

### Support
* Contact form on the public site.
* Support tickets inside the dashboard.

## How It Works

1. The user signs up and completes their health profile.
2. The app generates a diet and workout plan with AI.
3. The user logs weight, workouts and daily check-ins.
4. The app analyzes progress and shows streaks, badges and reports.
5. Every week the plan is adjusted automatically based on the user's results.

## Pages

* Home, About, Contact, Login and Signup (public).
* Dashboard: Overview, Daily Plan, User Progression, Daily Analytics, Your Progress, Current Goals, User Support and AI Chat.

## Tech Stack

* **Frontend:** React, Vite, Tailwind CSS, Framer Motion, Recharts
* **Backend:** Node.js, Express, JWT authentication
* **Database:** MongoDB (Mongoose)
* **AI:** Groq API
* **Services:** Cloudinary (image upload), Nodemailer (email)