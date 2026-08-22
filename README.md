# Raaeel Fatima — Portfolio

A personal portfolio website showcasing my work in software engineering,
UI/UX design, and AI-focused development.

## Overview

This portfolio is designed as a personal career platform where recruiters,
employers, university reviewers, and collaborators can quickly understand
my background, skills, projects, and contact information.

The website includes selected software engineering projects, UX case studies,
professional links, CV access, and a contact form.

## Live Website

https://raaeel-portfolio.vercel.app/

## Features

- Personal introduction and professional profile
- About section
- Selected project showcase
- Individual project case studies
- UX/UI case study for Steady
- CV access
- LinkedIn and GitHub links
- Contact form
- Meeting booking link
- Responsive web design
- Open Graph metadata for social sharing
- Google Analytics for visitor and event tracking
- Favicon and social preview metadata

## Projects

The portfolio currently showcases:

1. **CRUD API**
   - REST API built with Node.js and Express.js
   - SQLite persistence
   - Swagger API documentation

2. **CommandDesigner**
   - Software engineering project
   - Client-server architecture
   - MVC and DAO patterns

3. **InventoryIQ**
   - Inventory management system
   - Structured product and inventory tracking
   - UI/UX-focused interface

4. **Steady**
   - UX case study
   - Figma-based interface and prototype
   - Research, preparation, communication and progress-tracking
     experience for users managing appointment anxiety

## Technology

- HTML
- CSS
- JavaScript
- Figma
- Node.js / Express.js for selected projects
- SQLite for selected projects
- Swagger
- Google Analytics
- Vercel

## Project Structure

```text
raaeel-portfolio/
│
├── index.html
├── style.css
├── script.js
│
├── crud-api.html
├── commanddesigner.html
├── inventoryiq.html
├── steady.html
│
├── swagger.png
├── casetool.png
├── inventory.png
├── steady.png
├── hero.PNG
│── favicon.png

├── raeeelcv.pdf
└── README.md

Getting Started
Prerequisites

No special development environment is required to view the portfolio.

You only need:

A modern web browser
Git, if you want to clone the repository
Clone the repository
git clone https://github.com/raaeel640/raaeel-portfolio.git
cd raaeel-portfolio
Run locally

Because this is a static website, it can be opened directly in a browser.

Open:

index.html

For a more reliable local development experience, serve the folder
through a local web server such as VS Code Live Server.

Usage

From the homepage, visitors can:

Read the introduction
Learn more about me
Browse selected projects
Open individual project case studies
View my CV
Visit my GitHub and LinkedIn profiles
Book a meeting
Send a message through the contact form
Architecture

The portfolio uses a simple static frontend architecture.

                 ┌─────────────────────┐
                 │     Visitor         │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │    index.html       │
                 │   Portfolio Home    │
                 └──────────┬──────────┘
                            │
              ┌─────────────┼─────────────┐
              │             │             │
              ▼             ▼             ▼
        ┌──────────┐  ┌───────────┐  ┌───────────┐
        │ About    │  │ Projects  │  │ Contact   │
        └──────────┘  └─────┬─────┘  └───────────┘
                            │
              ┌─────────────┼─────────────┐
              ▼             ▼             ▼
        CRUD API     CommandDesigner   InventoryIQ
                            │
                            ▼
                         Steady
                       UX Case Study

        HTML + CSS + JavaScript
                    │
                    ▼
                  Vercel
Analytics and Social Sharing

Google Analytics is integrated to understand how visitors interact
with the portfolio.

The portfolio also includes Open Graph metadata so that shared links
can generate title, description, and image previews on social platforms.

The social sharing metadata was tested using an Open Graph audit tool.

Current Analytics Snapshot

The portfolio has received initial real visitor activity, including:

7 active users
66 events
Visitors from Pakistan and the United States
16 recorded views for the portfolio page title

These numbers represent an early snapshot rather than long-term traffic
and will change as more people visit the site.

V2 Evaluation Results

The second social-preview audit produced a 93/100 site health score.

The audit confirmed:

OG title: 5/5 pages
OG description: 5/5 pages
OG image: 5/5 pages
Canonical URLs: 5/5 pages
Critical issues: 0

The remaining recommendations were mainly related to image dimensions,
aspect ratios, and minor metadata optimization.

The portfolio was also checked across social preview formats including
LinkedIn, Facebook, and X/Twitter.

Limitations

Current limitations include:

The portfolio is hosted on a Vercel subdomain rather than a custom
domain because a custom domain was outside the current budget.
Social preview images are functional but some image dimensions are
not perfectly optimized for every platform's recommended aspect ratio.
Analytics data is still limited because the website is relatively new.
The portfolio is primarily a static frontend, so content updates
currently require editing and redeploying the site.
AI Transparency

AI tools were used as development and design support during the project,
including help with brainstorming, content refinement, debugging,
implementation guidance, and iteration.

I reviewed and tested the resulting implementation myself, including
the deployed website, navigation, project links, analytics setup,
social metadata, and social preview behavior.

Future Improvements

Planned improvements include:

Adding more project case studies
Improving social preview image dimensions
Expanding analytics-based insights
Adding further accessibility improvements
Connecting a custom domain when budget allows
Continuing to update the portfolio as new projects are completed
Author

Raaeel Fatima

Software Engineering Student & UI/UX Designer



GitHub: https://github.com/raaeel640
LinkedIn: https://www.linkedin.com/in/raaeel-fatima-8475a133/
Portfolio: https://raaeel-portfolio.vercel.app/
