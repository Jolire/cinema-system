# 🎬 Cinema Ticket Booking System

A modern web application for booking cinema tickets online. Built with Spring Boot backend and React frontend.

## 📋 Project Documentation

### 📊 System Requirements Specification
- **[SRS Document](./docs/SRS.md)** - Complete Software Requirements Specification with use cases, diagrams, and technical requirements

### 🗂️ Documentation Structure
docs/   
├── SRS.md # Software Requirements Specification    
├── diagrams/ # System diagrams and architecture    
│ ├── use_cases/ # Use case diagrams and descriptions   
│ ├── sequences/ # Sequence diagrams    
│ └── classes/ # Class diagrams 
└── api/ # API documentation    

## 🚀 Features

- **User Registration & Authentication** - Secure JWT-based auth system
- **Movie Catalog** - Browse available movies with details
- **Session Management** - View showtimes and available seats
- **Ticket Booking** - Real-time seat selection and booking
- **Order History** - Track your booking history
- **Admin Panel** - Manage movies, sessions, and analytics

## 🛠️ Technology Stack

### Backend
- **Java 17** - Primary programming language
- **Spring Boot** - Application framework
- **Spring Security** - Authentication and authorization
- **JPA/Hibernate** - ORM and database management
- **PostgreSQL** - Database system
- **Maven** - Dependency management

### Frontend
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Styling framework
- **Axios** - HTTP client

## 📁 Project Structure
cinema-system/  
├── backend/ # Spring Boot application  
│ ├── src/  
│ │ └── main/java/com/cinema/   
│ │ ├── controllers/ # REST controllers 
│ │ ├── services/ # Business logic  
│ │ ├── models/ # Entity classes    
│ │ ├── repositories/ # Data access layer   
│ │ └── security/ # Auth configuration  
│ └── pom.xml   
├── frontend/ # React application   
│ ├── src/  
│ │ ├── components/ # React components  
│ │ ├── pages/ # Page components    
│ │ ├── services/ # API services    
│ │ └── types/ # TypeScript definitions 
│ └── package.json  
└── docs/ # Project documentation   
└── SRS.md # Requirements specification 

## 🚀 Quick Start

### Prerequisites
- Java 17+
- Node.js 16+
- PostgreSQL 12+

### Backend Setup
```bash
cd backend
./mvnw spring-boot:run
Frontend Setup
```
```bash
cd frontend
npm install
npm start
```

### 📚 API Documentation
The API documentation is available when running the application:
- Swagger UI: http://localhost:8080/swagger-ui.html
- API Endpoints: http://localhost:8080/api