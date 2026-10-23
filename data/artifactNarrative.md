Original Artifact: https://github.com/JLimbert85/MobileArchitectAndProgramming  
Enhanced Artifact: https://github.com/JLimbert85/weight-tracker

## Category One: Software Engineering & Design

### Overview

The artifact is a weight-tracking Android application developed for CS-360. The app allows users to set a goal weight and log their daily progress toward reaching that goal.

### Selected Artifact & Objectives

I selected this project to demonstrate my proficiency in full-stack and cross-platform development. By refactoring the native Android application into a full-stack web app using the **MEAN stack (MongoDB, Express.js, Angular, Node.js)**, I highlighted my ability to:

- **Cross-Platform & Full-Stack Migration:** Refactored the native Android application into a full-stack web app using the **MEAN stack (MongoDB, Express.js, Angular, Node.js)**.
- **Core Competencies Demonstrated:**
    - Translating and refactoring code across different programming languages and software architectures.
    - Building scalable, modern web applications from existing mobile codebases.

### Key Challenges & Technical Insights

Transitioning from a mobile-native view to a responsive web platform presented unique layout challenges:

- **Screen Orientation & Space Utilization:** The original layout was designed specifically for portrait mobile screens. When viewed on a desktop browser in landscape orientation, the bottom-tabbed navigation and narrow layout felt inefficient and visually unappealing.
- **Adaptive Design Solution:** I implemented an adaptive interface that dynamically restructures based on the device's viewport size:
    - **Desktop View:** Reorganizes elements into a single, comprehensive dashboard that efficiently utilizes wide screen space.
    - **Mobile View:** Reverts to a streamlined, touch-friendly navigation structure suited for mobile web browsers.

### Course Outcomes

Porting a native application to a multi-platform web environment showcases my ability to deliver adaptable, user-centric solutions. As cross-platform accessibility remains an essential requirement in software development, this project demonstrates my competence in responsive design and full-stack engineering.

## Category Two: Algorithms & Data Structures

### Overview

This artifact is the same weight-tracking application originally created for **CS-360**, refined to highlight advanced data management, computational enhancements, and software architecture.

### Selected Artifact & Objectives

I selected this project to showcase my ability to build cross-platform features and update the data structures and algorithms used to fetch and display data as well as implement new algorithms for displaying BMI and implementing a chart view for displaying the data over time.

- **Algorithmic & Feature Enhancements:**
    - **BMI Calculation:** Implemented an algorithm to calculate real-time Body Mass Index (BMI) using user height and weight inputs.
    - **Data Visualization:** Integrated dynamic progress charts to track user weight trends over time.
- **Modular Architecture:** Centralized data fetching and state management into a single, reusable Angular service. This allowed multiple components—such as the BMI calculator and progress charts—to consume a single source of truth, resulting in clean, coherent, and maintainable code.

### Key Challenges & Technical Insights

Integrating the Angular frontend with a MongoDB backend presented key challenges around data fetching and real-time state synchronization.

- **The Problem:** Achieving real-time UI updates initially led me to implement WebSockets to monitor database changes continuousy. However, testing revealed this approach created unnecessary network overhead for an application of this scale.
- **The Solution:** I refactored the data-handling pipeline to rely on event-driven updates that trigger API calls only when data is added, modified, or deleted.
    - **Outcome:** Eliminated redundant database queries, optimized network calls, and ensured immediate UI responsiveness upon user action.

### Course Outcomes

By refactoring the data architecture and implementing modular component design, I met professional quality standards for clean code. Centralizing backend interactions and creating reusable data streams demonstrates my ability to design efficient, scalable software solutions aligned with modern industry practices.

## Category Three: Databases

### Overview

This artifact is the same weight-tracking application originally developed for **CS-360**, refined to focus on cloud database migration, API architecture, and user authentication.

### Selected Artifact & Objectives

I selected this project to demonstrate my ability to expand a application across platforms by replacing its local on-device SQL database with a cloud-hosted MongoDB solution.

- **Reusable API Endpoints:** Designed robust RESTful API endpoints for full CRUD operations, decoupling the database logic to support multiple potential frontends.
- **Secure Authentication:** Implemented user authentication and access control directly into the backend architecture to ensure user data remains isolated and secure.

### Key Challenges & Technical Insights

Migrating to a MongoDB backend introduced critical architectural and security decisions:

- **Secure Authentication & JWT:** To avoid storing sensitive user credentials in plaintext, I implemented password hashing using salt algorithms before database persistence. I integrated JSON Web Tokens (JWT) to securely handle client session management and authorization across requests.
- **Database Schema & Data Modeling:** I evaluated two data modeling strategies for storing daily weight entries:
    - **Option A (Subdocuments):** Storing entries inside an array within the user document. This risks hitting MongoDB's 16MB document size limit as user logs grow over time.
    - **Option B (Normalized Collections):** Creating a separate collection for weight logs linked via the user’s unique ID.
    - **Decision:** I chose normalized collections to ensure infinite scalability without risking document size constraints.

### Course Outcomes

By designing a centralized MongoDB database and integrating secure, token-based authentication, I met my planned course outcomes. This project directly demonstrates my ability to adopt a **security mindset**, enforce data privacy, and build scalable backends aligned with modern industry standards.
