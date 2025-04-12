# Demo React/Firebase Blog Overview

A blog, maybe a bit more like reddit, in a much smaller scale and definitely not fully polished.
I use this project to experiment with Firebase as an alternative to deploying 'full-stack' applications.
The idea is simple, understand limitations.

---

## Features/Technologies Used

A React and Firebase App that allows users:

- Login
- Create Posts
- Edit owned posts
- Read other users posts
- Interactive canvas on Homepage

### Technologies

- *React* with *Vite*: Vite is my go-to for every react project.
- *React-Router*: for routing and navigation.
- *Firebase*: for authentication and database
- *Tailwindcss*: for UI design.

## Setup

### Prerequisites

- Nodejs Installed
- Firebase account and web SDK

### Installation

1. Clone de Repository:

   ```bash
   git clone <repository-url>
   ```

2. Install Dependencies:

   ```bash
   npm install
   ```

3. Create `.env` variable for API keys:

    ```ini
    VITE_FIREBASE_API_KEY=apiKey
    VITE_FIREBASE_AUTH_DOMAIN=authDomain
    VITE_FIREBASE_PROJECT_ID=projectId
    VITE_FIREBASE_STORAGE_BUCKET=storageBucket
    VITE_FIREBASE_MESSAGE_SENDER_ID=messageSenderId
    VITE_FIREBASE_APP_ID=appId
    VITE_FIREBASE_MEASUREMENT_ID=measurementId
    ```

4. Setup Firebase Configuration:
  You will be given the code for the configuration when you setup your firebase/firestore account and add your application. (More on this later)

5. Start Development Server:

   ```bash
   npm run dev
   ```

---

## Folder Structure

```
react-firebase/
├── public/               # Static assets
├── src/
│   ├── components/       # Page Modals to Read/Write Posts (e.g., CreatePost, PostDetail)
│   │   ├── ui/           # Reusable UI components (e.g., Navbar, Footer)
│   ├── pages/            # Application pages (e.g., LoginPage, Posts)
│   ├── context/          # Context and Providers (e.g., Theme, Auth)
│   ├── config/           # General configuration files (e.g., Firebase Configuration)
│   └── styles/           # CSS and styling files
├── .env                  # Environment variables (optional)
└── package.json          # Project dependencies and scripts
```

---

## Key Features

1. Authentication:

   - Login/Logout
   - Firebase Authentication with Google Provider

2. Blog Posts
   - Logged in Users can create and save their on posts
   - Logged in Users can edit the posts they own
   - Users can read what all users posted

3. Permanent Storage
   - Firebase/firestore stores users posts

4. Themed
   - Using tailwind and Context Providers to create light/dark themes

## Firebase Integration

To use firebase you will need to create and account and add firebase to your application using their SDK:

```js
  import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  import { getAuth } from "firebase/auth";
  const firebaseConfig = {
      apiKey: YOUR_KEY
      authDomain: YOUR_KEY
      projectId: YOUR_KEY
      storageBucket: YOUR_KEY
      messagingSenderId: YOUR_KEY
      appId: YOUR_KEY
      measurementId: YOUR_KEY
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  export { db, auth };
```

Once that is done you can run your application and test locally.
You will need to configure the firestore database rules on firebase to make sure your database is secure.

## Testing

Try to create a post without an account an account.
Create an account and create a post
Check firebase firestore to see if the data is being saved properly.
Try to edit a post you do not own.
Try to edit your own post.
Check firebase to see if the new data persisted.
All test is done in the browser/browser console

## Deploy

- *Netlify* and *Github* for CI/CD deployments

## Future

This is a work in progress and has been a way for me to experiment with firebase and its capabilities.
Updates to the codebase will be soon available.
