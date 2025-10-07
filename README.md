# My Todo NextJS App

A modern, feature-rich todo application built with Next.js 15, TypeScript, and Firebase. This app offers a seamless task management experience with AI-powered task generation, real-time synchronization, and a beautiful dark/light theme system.

## ✨ Features

### 🔐 Authentication
- **Email & Password Authentication** with Firebase Auth
- **Google OAuth** for quick sign-in
- **Password Reset** functionality
- **Email Verification** for new accounts
- Protected routes with automatic redirects

### 📝 Task Management
- **Create, Read, Update, Delete** todos with real-time sync
- **Priority Levels** (Low, Medium, High) with color-coded indicators
- **Due Dates** with visual formatting
- **Task Completion** tracking with visual status indicators
- **Search & Filter** by title and completion status
- **Sorting** by creation date, due date, or priority
- **Pagination** for large task lists
- **Individual Task Detail Pages** with complete information

### 🤖 AI Assistant
- **AI-Powered Task Generation** using Groq's Llama 3.1 model
- Generate multiple related tasks from a single prompt
- Seamlessly add AI-generated tasks to your todo list

### 🎨 User Experience
- **Dark/Light Theme** with system preference detection
- **Responsive Design** optimized for mobile, tablet, and desktop
- **Real-time Sync Status** indicator (online/offline)
- **Loading States** and error handling throughout
- **Smooth Animations** and modern UI components

### 🔄 Data Management
- **Real-time Firebase Firestore** integration
- **Offline Support** with Dexie.js local database
- **Automatic Sync** when connection is restored
- **User-specific Data** isolation

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** (App Router)
- **React 19**
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling
- **next-themes** for theme management

### Backend & Services
- **Firebase Authentication** for user management
- **Firebase Firestore** for real-time database
- **Groq API** for AI task generation
- **Dexie.js** for offline local storage

### UI Components
- **Custom Component Library** with consistent design
- **Radix UI** primitives for accessibility
- **Lucide Icons** for consistent iconography
- **Responsive Modals** and dialogs

### Development Tools
- **ESLint** with Next.js configuration
- **TypeScript** strict mode
- **PostCSS** with Tailwind CSS

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm, yarn, or pnpm
- Firebase project setup
- Groq API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-todo-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Setup**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Firebase Configuration
   NEXT_PUBLIC_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_PROJECT_ID=your_firebase_project_id
   NEXT_PUBLIC_STORAGE_BUCKET=your_firebase_storage_bucket
   NEXT_PUBLIC_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   NEXT_PUBLIC_APP_ID=your_firebase_app_id
   NEXT_PUBLIC_MEASUREMENT_ID=your_firebase_measurement_id
   
   # Groq API Configuration
   GROQ_API_KEY=your_groq_api_key
   ```

4. **Firebase Setup**
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com)
   - Enable Authentication with Email/Password and Google providers
   - Create a Firestore database
   - Copy your configuration to the `.env.local` file

5. **Groq API Setup**
   - Get a free API key from [GroqCloud](https://console.groq.com)
   - Add the key to your `.env.local` file

6. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

7. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📱 Usage

### Getting Started
1. **Sign Up** for a new account or **Sign In** with existing credentials
2. **Create your first todo** using the "Add New Todo" button
3. **Set priorities and due dates** for better organization
4. **Use the AI Assistant** to generate related tasks for your projects

### Features Guide
- **Click on a todo item** to view its detailed information
- **Use the edit button** to modify task details
- **Toggle completion** by clicking the status icon
- **Filter and sort** your tasks using the toolbar
- **Switch themes** using the theme toggle in the header

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   └── generate-tasks/ # AI task generation endpoint
│   ├── login/             # Authentication page
│   ├── todos/             # Main todos page
│   │   └── [id]/          # Individual todo detail page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page (redirects to todos)
├── components/            # Reusable UI components
│   ├── modals/           # Modal components
│   ├── Button.tsx        # Custom button component
│   ├── Card.tsx          # Card layout components
│   ├── Dialog.tsx        # Dialog/modal wrapper
│   ├── Header.tsx        # Navigation header
│   ├── Icons.tsx         # Icon components
│   ├── Input.tsx         # Form input component
│   ├── Pagination.tsx    # Pagination component
│   ├── SearchFilter.tsx  # Search and filter component
│   ├── TodoItem.tsx      # Individual todo item
│   └── theme-provider.tsx # Theme context provider
├── context/              # React context providers
│   ├── AuthContext.tsx   # Authentication state
│   └── ThemeContext.tsx  # Theme management
├── hooks/                # Custom React hooks
│   └── useOnlineStatus.ts # Network status hook
├── lib/                  # External service configurations
│   └── firebase.ts       # Firebase initialization
└── utils/                # Utility functions
    ├── api.ts            # Firestore operations
    └── db.ts             # Database types and offline storage
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy this app is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Add your environment variables in Vercel's dashboard
4. Deploy!

### Deploy on Other Platforms

This is a standard Next.js application and can be deployed on any platform that supports Node.js:
- Netlify
- Railway
- Render
- AWS Amplify
- Google Cloud Platform

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Firebase](https://firebase.google.com/) for authentication and real-time database
- [Groq](https://groq.com/) for fast AI inference
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) for accessible UI primitives

## 📞 Support

If you have any questions or run into issues, please:
1. Check the existing [Issues](../../issues)
2. Create a new issue with detailed information
3. Include screenshots and error messages when applicable

---

Built with ❤️ using Next.js and modern web technologies.
