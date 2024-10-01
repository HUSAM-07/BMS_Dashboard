# BMS Dashboard

![BMS Dashboard Logo](/public/Home_Page.png)

## Overview

BMS Dashboard is an internal management tool designed specifically for the BITS Motorsports Team. This web application streamlines various aspects of team management, including task tracking, sponsorship management, and resource organization.

## Features

- **Task Management**: Create, assign, and track tasks across different categories.
- **Sponsorship Database**: Maintain a centralized database of sponsors and their contributions.
- **Internal Tools**: Quick access to essential team tools and resources.
- **Accomplishments Tracker**: Log and showcase team achievements.
- **Creative Assets Management**: Organize and access team's creative materials.
- **Feedback System**: Collect and act on advisor feedback.

## Tech Stack

- **Frontend**: Next.js 13 with React
- **Styling**: Tailwind CSS
- **UI Components**: Custom components built with Radix UI
- **State Management**: React Hooks
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/HUSAM-07/bms-dashb.git
   ```

2. Navigate to the project directory:
   ```
   cd bms-dashb
   ```

3. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

4. Run the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `/src/app`: Next.js 13 app directory containing page components
- `/src/components`: Reusable React components
- `/src/lib`: Utility functions and content data
- `/public`: Static assets including images and icons

## Key Components

### MainNav

The main navigation component, responsive for both desktop and mobile views.

![MainNav Screenshot](/public/Home_Page.png)

### BentoGrid

A grid layout on the homepage showcasing different sections of the dashboard.

![BentoGrid Screenshot](/public/bentogrid-screenshot.png)

### TaskList

A component for displaying and managing tasks.

![TaskList Screenshot](/public/Tasks_Page.png)

## Customization

- Modify `/src/lib/content.js` to update the content across the application.
- Adjust styling in individual components or in the global CSS file.

## Deployment

[Add instructions for deploying the application to your preferred platform]

## Contributing

We welcome contributions to the BMS Dashboard! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

## License

[Specify your license here, e.g., MIT License]

## Contact

For any queries or support, please contact [Your Contact Information].

---

Designed and developed with ❤️ by the Mohammed Husamuddin, Ex-Head of Business & Marketing, Team BITS Motorsports
