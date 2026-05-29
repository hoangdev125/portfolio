# Fullstack Developer Portfolio Website

## Project Overview

Xây dựng một website Portfolio cá nhân dành cho Fullstack Developer.

Mục tiêu:
- Thiết kế hiện đại, chuyên nghiệp.
- Tập trung showcase kỹ năng và dự án.
- Responsive trên mọi thiết bị.
- Tối ưu hiệu năng.
- Có thể deploy trực tiếp lên Vercel.

---

# Tech Stack

Frontend:
- React
- TypeScript
- Vite
- Tailwind CSS

Libraries:
- Framer Motion (animation)
- Lucide React (icons)

Deployment:
- Vercel

---

# Design Requirements

Phong cách:

- Dark Theme
- Modern UI
- Glassmorphism
- Gradient Effects
- Smooth Animations
- Professional Developer Portfolio
- Clean Layout
- Minimal but Premium

Màu sắc chính:

Background:
- #0f172a
- #020617

Accent:
- #3b82f6
- #8b5cf6
- #06b6d4

Text:
- White
- Gray variants

---

# Folder Structure

src/

components/
- Navbar.tsx
- Footer.tsx
- SectionTitle.tsx
- ProjectCard.tsx
- SkillCard.tsx

sections/
- Hero.tsx
- About.tsx
- Skills.tsx
- Projects.tsx
- Experience.tsx
- Contact.tsx

data/
- skills.ts
- projects.ts

types/
- index.ts

assets/
- images/

App.tsx

---

# Navbar Section

Requirements:

- Fixed top
- Transparent when page top
- Glass effect after scrolling
- Smooth scroll navigation

Menu:

- Home
- About
- Skills
- Projects
- Experience
- Contact

Mobile:

- Hamburger menu

---

# Hero Section

Content:

Xin chào 👋

Tôi là Hoàng

Fullstack Developer

Xây dựng ứng dụng web hiện đại bằng React,
TypeScript, Spring Boot và MySQL.

Buttons:

- View Projects
- Download CV

Social Links:

- GitHub
- LinkedIn
- Facebook

Design:

- Large typography
- Gradient heading
- Animated appearance
- Background glow effects

---

# About Section

Purpose:

Giới thiệu ngắn gọn về bản thân.

Content:

Sinh viên CNTT đam mê phát triển ứng dụng web.

Frontend:
- React
- TypeScript
- Tailwind CSS

Backend:
- Java
- Spring Boot

Database:
- MySQL

Statistics Cards:

- Projects Completed
- Technologies Learned
- Learning Experience

Design:

- Two-column layout
- Glass cards
- Responsive

---

# Skills Section

Display skills in cards.

Skills:

Frontend:
- HTML
- CSS
- JavaScript
- TypeScript
- React
- Tailwind CSS

Backend:
- Java
- Spring Boot

Database:
- MySQL

Tools:
- Git
- GitHub
- VS Code
- Postman

Card Requirements:

- Hover effect
- Slight scale animation
- Icon support

Layout:

Desktop:
4 columns

Tablet:
2 columns

Mobile:
1 column

---

# Projects Section

Most important section.

Display projects as premium cards.

Each project contains:

- Image
- Project Name
- Description
- Tech Stack
- GitHub Link
- Live Demo Link

Projects:

1. Student Management System

Description:
Fullstack application for managing students,
departments, classes, and academic information.

Tech:
- React
- TypeScript
- Spring Boot
- MySQL

Features:
- CRUD Student
- CRUD Department
- Search
- Filter
- Dashboard

2. Quiz Application

Description:
Interactive quiz application.

Tech:
- React
- TypeScript

Features:
- Multiple Choice
- Score Calculation
- Result Screen

3. Portfolio Website

Description:
Personal developer portfolio.

Tech:
- React
- Tailwind CSS

Card Design:

- Glassmorphism
- Hover animation
- Gradient borders

---

# Experience Section

Timeline Layout.

Education:

Information Technology Student

Content:

Display education journey and learning progress.

Design:

Vertical timeline.

---

# Contact Section

Fields:

- Name
- Email
- Message

Buttons:

- Send Message

Additional Contacts:

- Email
- GitHub
- LinkedIn
- Facebook

Design:

Glassmorphism form.

Validation:

Required fields.

---

# Footer

Contains:

- Copyright
- Social Links

Simple and clean.

---

# Animations

Use Framer Motion.

Requirements:

Hero:
- Fade Up
- Stagger Animation

Sections:
- Fade In on Scroll

Cards:
- Scale on Hover

Navbar:
- Smooth Transition

---

# Responsive Requirements

Mobile First.

Breakpoints:

sm:
640px

md:
768px

lg:
1024px

xl:
1280px

All sections must work perfectly on:

- Mobile
- Tablet
- Desktop

---

# Code Quality

Requirements:

- TypeScript Strict Mode
- Reusable Components
- Clean Folder Structure
- Strong Typing
- No Hardcoded UI Data Inside Components

Use separate files:

skills.ts
projects.ts

for all displayed data.

---

# SEO

Include:

- Meta title
- Meta description
- Open Graph tags

Title:

Hoàng | Fullstack Developer

Description:

Fullstack Developer Portfolio built with React, TypeScript, Spring Boot and MySQL.

---

# Performance

Requirements:

- Lazy loading where appropriate
- Optimized images
- Clean React structure
- Fast initial load

---

# Deliverables

Generate:

- Complete React + TypeScript codebase
- Tailwind CSS setup
- Responsive UI
- Animation implementation
- Production-ready structure

The result should look like a premium modern developer portfolio suitable for internship, fresher, and junior fullstack developer applications.
