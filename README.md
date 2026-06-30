# Discord Slash Command Bot

## Overview

This project is a full-stack Discord Slash Command Bot built with Node.js, Express.js, PostgreSQL (Supabase), and the Discord Interactions API.

The application allows Discord users to execute slash commands while providing an authenticated admin dashboard to monitor interactions, configure command behavior, and manage reports.

---

## Features

* Discord Slash Commands

  * `/status`
  * `/report`
* Discord Interaction Endpoint
* Ed25519 Signature Verification
* Discord Webhook Notifications
* PostgreSQL database using Supabase
* JWT-based Admin Authentication
* Protected Admin Dashboard
* Interaction History Dashboard
* Configurable Command Settings
* Responsive UI
* Deployment on Render

---

## Tech Stack

### Backend

* Node.js
* Express.js
* PostgreSQL
* Supabase
* JWT
* bcrypt
* discord-interactions
* axios

### Frontend

* HTML
* CSS
* JavaScript

### Deployment

* Render

---

## Project Structure

```
config/
controllers/
middleware/
models/
public/
routes/
scripts/
services/
server.js
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd discord-slash-bot
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file using `.env.example` and configure the following variables:

* PORT
* JWT_SECRET
* DATABASE_URL
* DISCORD_APPLICATION_ID
* DISCORD_PUBLIC_KEY
* DISCORD_BOT_TOKEN
* DISCORD_WEBHOOK_URL

---

## Running Locally

```bash
npm run dev
```

---

## Deployment

The application is deployed on Render.

Database is hosted on Supabase.

Discord Developer Portal is used for the bot, slash commands, and interaction endpoint configuration.

---

## Functionality

* Discord users execute slash commands.
* Discord sends interactions to the deployed endpoint.
* Every request is verified using Discord's Ed25519 signature.
* Reports are stored in PostgreSQL.
* Notifications are mirrored to a Discord webhook.
* Administrators can log in to the dashboard to:

  * View interaction history
  * Update command settings
  * Log out securely

---

## Future Improvements

* Multi-server support
* Search and filtering
* Pagination
* Role-based access control
* Real-time dashboard updates
* Analytics and reporting
