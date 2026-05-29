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
- Theme toggle support (Dark / Light)

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

Interactions:

- ScrollSpy highlighting active section on scroll
- Smooth scroll navigation
- Back to top button appears after scrolling

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
- Detail modal with extended content: large image, features, architecture, tech stack, lessons learned

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

Featured Project:

- Student Management System should be highlighted as the featured project
- Prominent layout with large image, rich description, architecture summary, frontend/backend/database stack, GitHub and Live Demo links
- Project filters for All / Fullstack / Frontend

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

- Required fields.
- Real submission via EmailJS or equivalent
- Toast notification on submit success or failure (e.g. Sonner)

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

# Deployment

- Build locally with `npm install` and `npm run build`.
- Ensure production assets are generated under `dist/`.
- Use Vercel to deploy the `dist` output directory.
- If Vercel needs explicit configuration, include `vercel.json` with `distDir: "dist"`.
- Tailwind CSS v4 should be integrated with `@tailwindcss/vite` and `@import "tailwindcss";` in `src/index.css`.
- Avoid legacy Tailwind directives like `@tailwind base`, `@tailwind components`, and `@tailwind utilities` when using Tailwind v4.

---

# Implementation Plan

This plan breaks the project into concrete implementation phases so the portfolio can be built incrementally and deployed reliably.

1. Foundation

- Initialize the Vite + React + TypeScript project.
- Install dependencies: `@vitejs/plugin-react`, `tailwindcss`, `@tailwindcss/vite`, `framer-motion`, `lucide-react`.
- Configure Tailwind v4 via `src/index.css` and `vite.config.ts`.
- Add base layout and global styling for dark glassmorphism.

2. Core layout and sections

- Build `Navbar` with fixed header, transparent top state, and glass effect on scroll.
- Create `Hero`, `About`, `Skills`, `Projects`, `Experience`, `Contact`, and `Footer` sections.
- Use separate components for reusable UI pieces: `SectionTitle`, `ProjectCard`, `SkillCard`.
- Add page anchors and smooth scrolling behavior.

3. Feature enhancements

- Implement Dark/Light theme toggle with persistent preference in `localStorage`.
- Add ScrollSpy so the active section updates while scrolling.
- Show a back-to-top button after the user scrolls down.
- Add project filters for `All`, `Fullstack`, and `Frontend`.
- Create a featured project display for the Student Management System.
- Build a project detail modal with large image, features, architecture, tech stack, and lessons learned.

4. Contact & notifications

- Add a contact form with `name`, `email`, and `message` fields.
- Include client-side validation for required fields.
- Integrate EmailJS or an equivalent email service for real message delivery.
- Add toast notifications with a lightweight library such as Sonner.

5. Polish and production readiness

- Add Framer Motion animations: fade-in sections, staggered hero text, hover card scale.
- Ensure responsive layouts across mobile, tablet, and desktop breakpoints.
- Optimize images and lazy load if needed.
- Add SEO metadata and Open Graph tags to `index.html`.
- Run `npm run build` and confirm `dist/` is generated successfully.

---

# Deliverables

Generate:

- Complete React + TypeScript codebase
- Tailwind CSS setup
- Responsive UI
- Animation implementation
- Production-ready structure

The result should look like a premium modern developer portfolio suitable for internship, fresher, and junior fullstack developer applications.
