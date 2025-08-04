<p align="center">
	<a href="https://github.com/wasulabenjamin/web_basics.git">
		<img src="https://img.icons8.com/?size=120&id=114334&format=png&color=000000" alt="logo">
	</a>
</p>

<h3 align="center">Web Basics</h3>

<p align="center">
    Getting started with Web Basics.
    <br> <br>
    <a href="https://github.com/wasulabenjamin/web_basics.git">View Demo</a> . 
    <a href="https://github.com/wasulabenjamin/web_basics/issues/new?template=bug_report.md">Report Bug</a> . 
    <a href="https://github.com/wasulabenjamin/web_basics/issues/new?template=feature_request.md">Request Feature</a>
</p>

<p align="center">
	<br> <br>
	<a href="https://app.codacy.com/gh/wasulabenjamin/web_basics/dashboard">
		<img src="https://app.codacy.com/project/badge/Grade/0a0cf227762141d699edcfcdd5b5caa7"/>
	</a>
    &nbsp;
	<a href="https://github.com/wasulabenjamin/web_basics/graphs/contributors">
    	<img src="https://img.shields.io/github/contributors/wasulabenjamin/web_basics" alt="Contributors"/>
	</a>
    &nbsp;
    <a href="https://github.com/wasulabenjamin/web_basics/network/members">
		<img src="https://img.shields.io/github/forks/wasulabenjamin/web_basics" alt="Forks"/>
    </a>
	&nbsp;
	<a href="https://github.com/wasulabenjamin/web_basics/stargazers">
		<img src="https://img.shields.io/github/stars/wasulabenjamin/web_basics" alt="Stars"/>
	</a>
	&nbsp;
	<a href="https://github.com/wasulabenjamin/web_basics/issues">
		<img src="https://img.shields.io/github/issues/wasulabenjamin/web_basics" alt="Issues"/>
	</a>
	&nbsp;
	<a href="https://github.com/wasulabenjamin/web_basics/blob/master/LICENSE">
		<img src="https://img.shields.io/github/license/wasulabenjamin/web_basics" alt="License"/>
	</a>
</p>

# 📘 Introduction

This is a curated step-by-step learning path covering everything from **basic web development** to **modern fullstack 
apps** using tools like **Vue.js**, **Supabase**, and **PostgreSQL**. The goal: build real skills, not just follow 
tutorials.

Whether you're reviewing fundamentals or pushing into real-time apps, this repo captures one developer’s personal 
journey—openly shared, continually evolving.

## Audience

This tutorial has been prepared for: 
- Beginners looking for a clean, modern intro to web development.
- Developers revisiting fundamentals with a focus on real-world workflows.
- Anyone curious about integrating Vue.js with Supabase and PostgreSQL.

## Prerequisites

Before you start practicing various types of examples given in this reference, we assume that you are already aware 
about GitHub and the Git Version Control System.

# 🧭 Learning Roadmap

## Phase 1: Web Fundamentals

These are the core web building blocks:
- **HTML5**: Tags, elements, forms, semantics
- **CSS3**: Layouts, Flexbox, Grid, animations
- **JavaScript (ES6+)**: DOM, functions, events, objects, APIs
- **JSON**: Data interchange format used in APIs
- **Bootstrap**: UI framework for rapid prototyping
- **Tailwind CSS**: Utility-first CSS framework for custom UIs

Explore inside: `fundamentals/` 📂 

## Phase 2: Frontend Framework – Vue JS

Lightweight, reactive, component-driven frontend framework
- Introduction to Vue
- Vue directives, events, and computed properties
- Props and state management
- Reusable components
- Todo App as capstone
- **Capstone Project**: Task manager with local storage

Explore inside: `vue_tutorials/` 📂 

## Phase 3: Backend & Databases

Here we focus on backend learning without getting lost in boilerplate
- **SQL with PostgreSQL**: Core CRUD operations, schema design, joins, indexes
- **Supabase SDK**:
  - Instant Auth (email/password, OAuth)
  - Hosted PostgreSQL database
  - Auto-generated RESTful and real-time APIs
  - Row-level security
  - **Capstone Project**: Fullstack app with auth and CRUD

Explore inside: `backend/` 📂 

# 🚀 Getting Started

## Requirements

Before diving in, ensure you have:
- Basic understanding of programming concepts
- [Git](https://git-scm.com/) installed
- Code editor ([Sublime Text](https://www.sublimetext.com/download) recommended)
- Modern web browser (Google Chrome recommended)
- [Node.js](https://nodejs.org/en/download) installed for Vue.js projects

## Folder Structure

Each topic is organized by folder. Start with `/fundamentals/01_html` and progress through the folders in order.

```bash
web_basics/
├── .github/ 									# Contribution guidelines
├── assets/
├── backend_supabase/ 				# Server-side technologies
│   ├── 01_postgresql/        # Database fundamentals
│   ├── 02_supabase_auth/ 		# Supabase Auth
│   ├── 03_supabase_crud/ 		# Supabase APIs
│   └── 04_realtime/ 					# Supabase Realtime
├── fundamentals/ 						# Core web technologies
│   ├── 01_html/ 							# Semantic markup examples
│   ├── 02_css/ 							# Layouts, animations, responsive
│   ├── 03_js/ 								# Modern JS patterns
│   ├── 04_json/ 							# JavaScript Object Notation
│   ├── 05_bootstrap/ 				# Component-based prototyping
│   └── 06_tailwind/ 					# Utility-first CSS workflows
├── notes/
├── vue_tutorials/ 						# Vue.js ecosystem
│   ├── 01_intro/ 						# Core concepts
│   ├── 02_components/ 				# Reusable patterns
│   ├── 03_reactivity/
│   └── 04_project_todo/ 			# Practical application
├── .codacy.yaml
├── .editorconfig
├── .gitattributes
├── .gitignore
├── 404.html
├── CHANGELOG.md
├── LICENSE
├── README.md
├── favicon.ico
├── icon.png
├── icon.svg
├── index.html
├── robots.txt
├── site.webmanifest
├── webpack.common.js
├── webpack.config.dev.js
└── webpack.config.prod.js
```

## Usage

- Fork repository and clone it locally
- Explore learning paths by customizing the content inside `fundamentals/`, `vue_tutorials/` and `backend/` as per your 
requirements or intention

> Please share the goodness & don't forget leaving a :star: on the repository.

# 🧩 Contributing

This is an open source example template, therefore developers are encouraged to contribute and help maintain the project 
throughout its life cycle. Any contributions will be highly appreciated.

Looking to contribute something to this template?

Please read through the [contributing guidelines][contributing_guidelines], included are directions for opening issues, 
coding standards, and notes on development.

# 🐛 Bugs and Feature Requests

Have a bug or a feature request? **Here is to how you can help:** 
* Having problems with the tutorial? [Please report a bug][report_bug]
* Is your problem or idea you would wish implemented not addressed yet? [Please request a feature][request_feature]

# 🙌 Acknowledgements

* [Bootstrap](https://getbootstrap.com/docs/5.3) for a powerful, feature-packed frontend toolkit.
* [Tailwind](https://tailwindcss.com/docs/) Labs for incredible dev ergonomics
* [Vue core](https://www.tutorialspoint.com/vuejs/index.htm) team for building something simple yet powerful
* [Supabase](https://supabase.com/dashboard/org) team for simplifying backend


<!--
	As you might notice, I'm using markdown "reference style" links for readability.
	Reference links are enclosed in brackets [] instead of parentheses ().
	https://www.markdownguide.org/basic-syntax/
-->
[view_demo]: https://github.com/wasulabenjamin/web_basics
[report_bug]: https://github.com/wasulabenjamin/web_basics/issues/new?template=bug_report.md
[request_feature]: https://github.com/wasulabenjamin/web_basics/issues/new?template=feature_request.md
[contributing_guidelines]: https://github.com/wasulabenjamin/web_basics/blob/main/.github/CONTRIBUTING.md
