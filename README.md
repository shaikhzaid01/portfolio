# 🚀 Shaikh Zaid — Full Stack Engineering Portfolio

<div align="center">

[![Laravel](https://img.shields.io/badge/Laravel-13.x-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com)
[![React](https://img.shields.io/badge/React-19.x-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![Inertia.js](https://img.shields.io/badge/Inertia.js-3.x-9553E9?style=for-the-badge&logo=inertia&logoColor=white)](https://inertiajs.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![PHP](https://img.shields.io/badge/PHP-8.3+-777BB4?style=for-the-badge&logo=php&logoColor=white)](https://php.net)

<p align="center">
  <strong>A high-performance, modern engineering portfolio showcasing production-ready systems, scalable backends, payment integrations, AI workflows, and full-stack software architecture.</strong>
</p>

[Live Demo](https://shaikhzaid.com) • [Book a Call](https://calendly.com) • [Case Studies](#-featured-case-studies) • [Tech Stack](#-tech-stack)

</div>

---

## 📌 Overview

This repository powers the official personal engineering portfolio of **Shaikh Zaid**, a product-focused Full Stack Engineer specializing in robust backend architectures, distributed workflows, fintech payment pipelines, and modern interactive user interfaces.

Built using the modern **Laravel 13 + Inertia.js v3 + React 19** monolith stack, this application delivers Single Page Application (SPA) speed with server-driven simplicity, full SEO optimization, and strict TypeScript type safety.

---

## ✨ Key Highlights & Features

- ⚡ **Ultra-Fast Inertia.js v3 Architecture**: Seamless SPA navigation without API client boilerplate or state desynchronization.
- 🎨 **Modern Visual Aesthetics**: Glassmorphism, subtle micro-animations, dual Light/Dark theme switching, responsive design, and tailored HSL color palettes.
- 📊 **Engineering Hub & Metrics**: Interactive breakdown of system capabilities, tech stacks, architectural principles, and uptime metrics.
- 💼 **Deep-Dive Case Studies**: Real product problems solved with system design diagrams, responsibility breakdown, and business outcomes.
- 🛡️ **Production-Grade Reliability**: Error boundaries, lazy-loaded sections with skeleton states, and SEO metadata pre-configured.
- 🤖 **AI Workflow Integration**: Architecture demonstration showing how LLM pipelines and automated agents integrate into modern business backends.

---

## 🛠️ Featured Case Studies

| Project | Domain / Type | Key Stack | Highlights |
| :--- | :--- | :--- | :--- |
| **Ivatan** | Super App Backend | `Laravel`, `PHP`, `MySQL`, `REST APIs` | Multi-module backend ecosystem, unified authentication, admin engine, and scalable business workflows. |
| **Skills Pehle** | EdTech + Fintech | `Laravel`, `MySQL`, `Razorpay`, `Cashfree`, `Queues` | Complete learning workflows with multi-tier wallet balances, automated commission settlement, and payment gateway webhooks. |
| **Exam Babu** | AI LMS & Exam Engine | `Laravel`, `MySQL`, `AI APIs`, `LMS Engine` | AI-assisted question generation, real-time exam evaluation, student performance analytics, and administrative management. |
| **Vikas College** | Enterprise CMS | `Laravel`, `MySQL`, `Tailwind CSS` | Custom institutional content management system with role-based permissions and media asset processing. |

---

## 💻 Tech Stack

### Backend
- **Framework**: Laravel 13.x
- **Language**: PHP 8.3+
- **Database & ORM**: MySQL / SQLite via Eloquent ORM
- **Authentication**: Laravel Fortify & Passkeys
- **Routing & Navigation**: Laravel Wayfinder + Inertia Laravel

### Frontend
- **Framework**: React 19.x with TypeScript
- **Glue Layer**: Inertia.js React v3.x
- **Styling**: Tailwind CSS v4.x + `@tailwindcss/vite`
- **UI Components & Icons**: Radix UI Primitives, Lucide React, Sonner Toasts
- **Build Tool**: Vite 8.x + React Compiler plugin

### Tooling & Quality Assurance
- **Linting & Code Formatting**: Laravel Pint, ESLint 9, Prettier with Tailwind Plugin
- **Static Analysis**: Larastan / PHPStan (`phpstan analyse`)
- **Testing**: Pest PHP v4 (`pestphp/pest`)

---

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
- **PHP** >= 8.3
- **Composer** >= 2.x
- **Node.js** >= 20.x & **NPM** >= 10.x
- **Git**

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone git@github.com:shaikhzaid01/portfolio.git
   cd portfolio
   ```

2. **Install PHP and Node dependencies:**
   ```bash
   composer install
   npm install
   ```

3. **Configure Environment:**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. **Run Database Migrations:**
   ```bash
   php artisan migrate
   ```

5. **Start Local Development Server:**
   ```bash
   # Runs Laravel backend, Queue worker, and Vite concurrently:
   npm run dev
   # or via composer:
   composer run dev
   ```

   Alternatively, run services individually:
   ```bash
   php artisan serve
   npm run dev
   ```

6. Open `http://localhost:8000` in your browser.

---

## 📜 Available Scripts

| Command | Purpose |
| :--- | :--- |
| `npm run dev` / `composer run dev` | Start development servers (Laravel + Vite + Queue) |
| `npm run build` | Compile and bundle production frontend assets |
| `npm run types:check` | Run TypeScript type checking without emitting files |
| `npm run lint` / `npm run format` | Run ESLint and Prettier formatting |
| `composer run lint` | Run Laravel Pint for PHP code standard checks |
| `composer run test` / `php artisan test` | Execute test suite using Pest PHP |
| `composer run ci:check` | Run complete CI pipeline (linter, types, and tests) |

---

## 📂 Project Structure

```plaintext
portfolio/
├── app/
│   ├── Http/Controllers/     # Application controllers
│   ├── Models/               # Eloquent data models
│   └── Providers/            # Service providers
├── bootstrap/                # Laravel bootstrapping & routing config
├── config/                   # Application configuration files
├── database/
│   ├── factories/            # Model factories
│   ├── migrations/           # Database migration files
│   └── seeders/              # Database seeders
├── resources/
│   ├── css/                  # Global CSS & Tailwind styles
│   ├── js/
│   │   ├── components/       # Reusable React components & UI primitives
│   │   │   ├── sections/     # Modular portfolio sections (Hero, CaseStudies, etc.)
│   │   │   └── ui/           # Radix & base UI elements
│   │   ├── layouts/          # Application layouts
│   │   ├── pages/            # Inertia Page views (welcome.tsx, etc.)
│   │   └── types/            # TypeScript interface definitions
│   └── views/
│       └── app.blade.php     # Root Blade layout & SEO metadata
├── routes/
│   ├── web.php               # Web application routes
│   └── console.php           # Artisan console commands
├── tests/                    # Pest PHP automated tests
├── composer.json             # PHP package configuration
├── package.json              # Node.js dependencies and scripts
└── vite.config.ts            # Vite bundler configuration
```

---

## 📬 Contact & Connect

- **Name**: Shaikh Zaid
- **GitHub**: [@shaikhzaid01](https://github.com/shaikhzaid01)
- **LinkedIn**: [Shaikh Zaid](https://linkedin.com/in/shaikhzaid01)
- **Schedule a Conversation**: [Calendly](https://calendly.com)

---

<div align="center">
  <sub>Built with care by <a href="https://github.com/shaikhzaid01">Shaikh Zaid</a>. Released under the <a href="LICENSE">MIT License</a>.</sub>
</div>
