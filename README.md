# Project Summary
This project implements the backend server for the Trust Nexus Web Application (Viewer Panel) using Node.js and MySQL.
It provides public APIs to fetch dynamic content such as blogs, insights, services, industries, careers, and regions.

The backend is fully modular and expandable, supporting future features like the Admin Panel and Deployment.

# Technologies Used
- Node.js
- Express.js
- MySQL (mysql2)
- dotenv
- bcrypt (for password hashing, prepared for Admin users)
- JWT (authentication ready for Admin users)
- CORS (for frontend integration)

 # Available Public APIs (No Authentication Required)
- GET /api/content — Fetch all blogs, insights, education, and tech posts
- GET /api/content/:type — Fetch posts filtered by type (blog, insight, education, tech)
- GET /api/services — Fetch all services offered
- GET /api/industries — Fetch all industries covered
- GET /api/careers — Fetch all open career opportunities
- GET /api/regions — Fetch all office locations

# Notes
- Only public viewer APIs are active currently.
- Admin Panel APIs (login, content management) are implemented but paused until frontend is ready.
- Dummy data has been inserted into the database for testing purposes.
- Postman collections are available for easy testing.
- The backend is ready for deployment to cloud hosting (Render, Railway, Azure).
- 
# Developed by
Rija Jilani ❤


