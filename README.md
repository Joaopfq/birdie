# Birdie

**Birdie** is a social network developed with the goal of practicing and learning modern web technologies. The project uses **Next.js**, **React**, and **TypeScript** for building the interface and logic, integrating authentication with **Clerk**, cloud database via **Neon**, data management with **Prisma**, styling with **Tailwind CSS** and **shadcn/ui**, file uploads via **uploadthing**, and deployment on **Vercel**.

## Technologies Used
- [Next.js](https://nextjs.org/) – Fullstack framework for React
- [React](https://reactjs.org/) – Library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) – JavaScript superset with static typing
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.dev/) – Accessible components integrated with Tailwind
- [Clerk](https://clerk.com/) – User authentication
- [Neon](https://neon.tech/) – Serverless PostgreSQL database
- [PostgreSQL](https://www.postgresql.org/) – Relational database
- [Prisma](https://www.prisma.io/) – ORM for TypeScript
- [uploadthing](https://uploadthing.com/) – File upload service
- [Vercel](https://vercel.com/) – Frontend and backend deployment platform

## Features
- Authentication with Clerk (email, social media, etc.)
- Create and view posts with text and/or images
- Image uploads
- Interaction with posts (likes and comments)
- Access to other users' profiles
- Notifications for follows, likes, and comments
- Feed with the latest posts
- Responsive interface with a modern design

## How to Run Locally

### 1. Clone the repository
    ``` bash
    git clone git@github.com:Joaopfq/birdie.git
    cd birdie
    ```

### 2. Install dependencies
    ``` bash
    npm install
    ```

### 3. Set up environment variables
    Create a `.env` file based on the `.env.example` file.

### 4. Run database migrations
    ``` bash
    npx prisma generate
    npx prisma migrate dev
    ```

### 5. Start the development server
    ``` bash
    npm run dev
    ```