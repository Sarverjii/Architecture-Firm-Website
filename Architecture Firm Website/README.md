# Tashdid Architects - Website User Guide

## Table of Contents
1. [Getting Started](#getting-started)
2. [Public Website Navigation](#public-website-navigation)
3. [Admin Dashboard Guide](#admin-dashboard-guide)
4. [Content Management Guide](#content-management-guide)

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sarverjii/Architecture-Firm-Website.git
   cd Architecture-Firm-Website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add your Firebase and Cloudinary credentials (see [Environment Variables](#environment-variables)).

4. **Start the development server:**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open in browser:**
   - Visit `http://localhost:5173` (or the port shown in your terminal).

## Public Website Navigation

### Homepage
1. **Hero Section**
   - View the main banner image
   - Click the "View Projects" button to see featured works
   - Use the navigation menu at the top to access different sections

2. **Featured Projects**
   - Scroll down to see the featured projects carousel
   - Click on any project to view its details
   - Use the arrow buttons to navigate through projects
   - Click "View All Projects" to see the complete portfolio

3. **Services Overview**
   - Scroll to see the services section
   - Click on any service to learn more
   - View service icons and brief descriptions
   - Click "Learn More" for detailed information

4. **Contact Section**
   - Find the contact form at the bottom
   - Fill in your details:
     - Name
     - Email
     - Phone
     - Message
   - Click "Send Message" to submit

### Projects Page
1. **Project Gallery**
   - View all projects in a grid layout
   - Use filters to sort by:
     - Project type
     - Location
     - Year
   - Click on any project to view details

2. **Project Details**
   - View high-resolution images
   - Read project specifications
   - See location information
   - View completion date
   - Read client testimonials
   - View design challenges and solutions


### About Us Page
1. **Company Information**
   - Read company history
   - View mission and vision
   - See team members
   - View awards and recognition
   - Find office locations

2. **Team Section**
   - View team member profiles
   - Read individual bios
   - See team member specialties
   - View contact information

### Contact Page
1. **Contact Form**
   - Fill in your details
   - Select inquiry type
   - Write your message
   - Attach files if needed
   - Submit the form

2. **Location Information**
   - View office location on map
   - Get directions
   - See business hours
   - Find contact numbers
   - View social media links

## Admin Dashboard Guide

### Dashboard Overview
1. **Quick Stats**
   - View total projects
   - See new inquiries
   - Check website visitors
   - View recent activities

2. **Navigation Menu**
   - Projects
   - Messages
   - Clients


### Project Management
1. **Adding a New Project**
   - Click "Add New Project"
   - Fill in project details:
     - Project name
     - Location
     - Completion date
     - Description
   - Upload project images
   - Add project specifications
   - Set project category
   - Click "Save"

2. **Editing Projects**
   - Find project in the list
   - Click "Edit"
   - Modify any details
   - Update images
   - Save changes


## Content Management Guide

### Image Guidelines
1. **Recommended Sizes**
   - Hero images: 1920x1080px
   - Project thumbnails: 800x600px
   - Team photos: 400x400px
   - Service icons: 200x200px

2. **File Formats**
   - Use JPG for photographs
   - Use PNG for graphics with transparency
   - Maximum file size: 2MB

### Text Guidelines
1. **Project Descriptions**
   - Keep it concise
   - Include key specifications
   - Add location details
   - Mention completion date

2. **Service Descriptions**
   - Clear and professional
   - Include process steps
   - Add relevant details
   - Keep formatting consistent

### Regular Maintenance
1. **Weekly Tasks**
   - Check for new inquiries
   - Update project status
   - Review website performance
   - Backup content

2. **Monthly Tasks**
   - Update featured projects
   - Review and update services
   - Check team information
   - Update testimonials



This guide is regularly updated. For the latest version, please check the admin dashboard or contact the support team.

## Environment Variables

Create a `.env` file in the root directory and add:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id

VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_cloudinary_upload_preset
```

## Deployment

You can deploy this project to any static hosting provider. Popular options:

- **Vercel:** [vercel.com](https://vercel.com/)
- **Netlify:** [netlify.com](https://netlify.com/)
- **Firebase Hosting:** [firebase.google.com/products/hosting](https://firebase.google.com/products/hosting)

Follow the provider's instructions for deploying a React app.

## Contact

- **Project Maintainer:** [Sarverjii](https://github.com/Sarverjii)
- **Repository:** [https://github.com/Sarverjii/Architecture-Firm-Website.git](https://github.com/Sarverjii/Architecture-Firm-Website.git)
- **Email:** sarverjii@gmail.com

---

> _This project is a modern, scalable solution for architecture and design firms looking to showcase their work and connect with clients online._
