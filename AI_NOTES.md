# AI_NOTES

## AI Tools Used

This project was developed with assistance from ChatGPT (GPT-5.5). AI was primarily used for explaining concepts, debugging issues, reviewing code, suggesting architecture improvements, and generating boilerplate code. The implementation, testing, integration, and final decisions were completed manually.

---

## Key Decisions

### 1. Express.js with Modular Structure

I chose Express.js because it provides a lightweight backend and allows the project to be organized into controllers, routes, middleware, services, and configuration files, making the codebase easier to maintain.

### 2. Supabase PostgreSQL

Instead of using a local database, I selected Supabase PostgreSQL to satisfy the requirement for a hosted database while remaining entirely within the free tier.

### 3. Discord Webhook for Notifications

Rather than Slack, I implemented Discord Webhooks to mirror report notifications into a dedicated Discord channel. This simplified deployment and kept all communication within Discord.

---

## Hardest Bug Encountered

The most difficult issue involved configuring the Discord Interactions Endpoint.

Initially, Discord continuously rejected the endpoint with:

"The specified interactions endpoint URL could not be verified."

The issue required understanding Discord's Ed25519 request signature verification as well as the Express correct configuration dependency as I had installed the wrong one and correctly handling the raw request body before JSON parsing. I also had to resolve deployment issues on Render and ensure environment variables were configured correctly.

After correcting the middleware, request parsing, and deployment configuration, Discord successfully verified the endpoint and slash commands became fully functional.

---

## What I Would Improve

With more time, I would add:

* Real-time dashboard updates
* Advanced filtering and search
* Role-based access control
* Multi-server support
* Analytics and reporting
* Better UI animations and responsiveness
* Better use of AI in that

---

## AI Collaboration

AI accelerated development by helping explain Discord's interaction flow properly with correct architecture, JWT authentication, Supabase integration, deployment, and debugging strategies. Every generated solution was tested, adjusted, and integrated into the project before use and commit.
