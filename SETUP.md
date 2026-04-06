# Social Media Money Mastery - Setup Guide

## Firebase Setup Instructions

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter your project name and follow the setup wizard
4. Enable Google Analytics (optional)

### 2. Create a Firestore Database

1. In your Firebase project, go to "Firestore Database"
2. Click "Create database"
3. Select "Start in production mode" or "Start in test mode"
4. Choose your database location

### 3. Get Your Firebase Configuration

1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click the web icon (</>)
4. Register your app
5. Copy the Firebase configuration object

### 4. Update Environment Variables

Edit the `.env` file in your project root and replace the values with your Firebase config:

```
VITE_FIREBASE_API_KEY=your_actual_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_actual_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_actual_sender_id
VITE_FIREBASE_APP_ID=your_actual_app_id
```

### 5. Set Up Firestore Collections

In Firestore, create a collection named `posts` with the following structure:

```javascript
{
  title: "Your Post Title",
  content: "Your post content here...",
  category: "meme", // or any other category id
  imageUrl: "https://example.com/image.jpg",
  createdAt: Timestamp,
  author: "Author Name"
}
```

### 6. Update Your Links

Update the following in the code:

**Etsy Product Links** (in `src/components/Header.tsx`):
- Replace `https://etsy.com/shop/yourshop/...` with your actual Etsy product links

**Discord Link** (in `src/components/Header.tsx`):
- Replace `https://discord.gg/your-server` with your actual Discord invite link

**Social Media Links** (in `src/components/Sidebar.tsx`):
- Update all YouTube, Facebook, Instagram, and TikTok links for each category

### 7. Firestore Security Rules (Optional but Recommended)

For production, set up proper security rules in Firestore:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /posts/{post} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## Running the Application

```bash
npm install
npm run dev
```

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy to any static hosting service.
