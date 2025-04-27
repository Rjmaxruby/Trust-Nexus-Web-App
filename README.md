# Trust Nexus Backend (Viewer Panel APIs)

Welcome to the Trust Nexus Backend repository! 
This backend is built with **Node.js** and **MySQL** and serves the **public Viewer Panel** for the Trust Nexus Web Application.

##  Technologies Used
- Node.js
- Express.js
- MySQL (via mysql2)
- dotenv (environment variables)
- bcrypt (password hashing, prepared for Admin Panel)
- JWT (prepared for Admin authentication)
- CORS (for frontend integration)

---

##  Folder Structure
# trust-nexus-backend/ ├── config/ 
# Database connection ├── controllers/ 
# All logic for APIs ├── routes/ 
# API route handlers ├── middleware/ 
# JWT auth middleware (for future admin panel) ├── server.js 
# Main server file ├── .env 
# Environment variables ├── package.json


# APIs
| Method | Endpoint | Description |

| GET | `/api/content` | Get all blogs, insights, education, tech articles |
| GET | `/api/content/:type` | Get content by type (blog, insight, education, tech) |
| GET | `/api/services` | Get all services |
| GET | `/api/industries` | Get all industries |
| GET | `/api/careers` | Get all open job positions |
| GET | `/api/regions` | Get all office locations |
✅ All APIs are **public** — no authentication needed.
