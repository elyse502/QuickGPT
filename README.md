<div align="center">

# QUICKGPT 🤖

AI-Powered Content Generation Platform

![Last Commit](https://img.shields.io/github/last-commit/elyse502/QuickGPT?style=flat-square) 
![Languages](https://img.shields.io/github/languages/top/elyse502/QuickGPT?style=flat-square&color=blue)
![License](https://img.shields.io/badge/license-ISC-blue?style=flat-square)
![Version](https://img.shields.io/badge/version-1.0.0-success?style=flat-square)

*Powered by cutting-edge AI technologies:*

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat-square&logo=react&logoColor=black)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.1.0-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![ImageKit](https://img.shields.io/badge/ImageKit-FF0000?style=flat-square&logo=imagekit&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=flat-square&logo=stripe&logoColor=white)

## LIVE - DEMO 🌐

Visit the 👉 [_LINK 🔗_](https://quick-gpt-ochre.vercel.app)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [AI Capabilities](#ai-capabilities)
- [API Endpoints](#api-endpoints)
- [Payment Integration](#payment-integration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

---

## Overview

QUICKGPT is a comprehensive AI content generation platform that provides:

- 💬 **AI Chat Assistant**: Intelligent conversations with GPT models
- 🎨 **AI Image Generation**: Create stunning visuals from text prompts
- 📝 **Content Creation**: Generate articles, blogs, and creative text
- 👥 **Community Features**: Share and discover AI creations
- 💳 **Credit System**: Flexible pricing with Stripe integration
- 🔐 **User Management**: Secure authentication and profile management

Built with the MERN stack and integrated with OpenAI's powerful AI models for text and image generation.

---

## Key Features

### 🤖 AI-Powered Generation
- **Text Generation**: GPT-4 powered content creation
- **Image Generation**: DALL-E integration for visual content
- **Chat Interface**: Conversational AI assistant
- **Multiple Models**: Support for various AI models and parameters

### 💰 Credit System
- **Flexible Pricing**: Pay-per-use credit system
- **Stripe Integration**: Secure payment processing
- **Credit Management**: Track usage and purchase history
- **Free Tier**: Limited free credits for new users

### 👤 User Experience
- **Secure Authentication**: JWT-based user management
- **Profile Management**: Personalize your AI experience
- **Creation History**: Save and manage generated content
- **Community Sharing**: Share creations with other users

### 🎨 Media Management
- **ImageKit Integration**: Optimized image storage and delivery
- **Fast CDN**: Quick loading times for generated images
- **Image Optimization**: Automatic compression and formatting
- **Secure Uploads**: Protected file storage

---

## Tech Stack

### Frontend (Client)
- **React 19** - Latest React with concurrent features
- **Vite** - Next-generation build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **React Router DOM** - Client-side routing
- **React Hot Toast** - User notifications
- **React Markdown** - Markdown rendering
- **Moment.js** - Date formatting and manipulation

### Backend (Server)
- **Node.js** - JavaScript runtime environment
- **Express 5** - Web application framework
- **MongoDB** - NoSQL database for flexible data storage
- **OpenAI API** - GPT and DALL-E integration
- **ImageKit** - Image optimization and CDN
- **Stripe** - Payment processing
- **Bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing
- **JSON Web Tokens** - Authentication

### DevOps & Deployment
- **Vercel** - Frontend deployment platform
- **Render/Railway** - Backend deployment
- **MongoDB Atlas** - Cloud database service
- **ImageKit CDN** - Media content delivery

---

## Architecture

```groovy
QuickGPT/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── assets/        # Static assets
│   │   ├── components/    # Reusable components
│   │   │   ├── ChatBoot.jsx    # AI chat interface
│   │   │   ├── Message.jsx     # Message component
│   │   │   ├── Sidebar.jsx     # Navigation sidebar
│   │   │   └── ...
│   │   ├── context/       # React context
│   │   │   └── AppContext.jsx  # Global state management
│   │   ├── pages/         # Route pages
│   │   │   ├── Community.jsx   # Community creations
│   │   │   ├── Credits.jsx     # Credit management
│   │   │   ├── LoadImg.jsx     # Image generation
│   │   │   ├── Login.jsx       # Authentication
│   │   │   └── App.jsx         # Main app component
│   │   ├── index.css      # Global styles
│   │   └── main.jsx       # Application entry point
│   ├── package.json       # Dependencies and scripts
│   └── vite.config.js     # Vite configuration
│
├── server/                # Express Backend
│   ├── config/           # Configuration files
│   ├── controllers/      # Business logic
│   ├── middleware/       # Custom middlewares
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── package.json     # Dependencies and scripts
│   └── server.js        # Server entry point
└── LICENSE              # Project license
```

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)
- MongoDB Atlas account or local MongoDB
- OpenAI API account
- ImageKit account
- Stripe account (for payments)

### Installation

1. Clone the repository:
```console
git clone https://github.com/elyse502/QuickGPT.git
cd QuickGPT
```

2. Install client dependencies:
```console
cd client && npm install
```

3. Install server dependencies:
```console
cd ../server && npm install
```

### Environment Variables

**Client (.env)**
```env
VITE_API_BASE_URL=http://localhost:5000
VITE_IMAGEKIT_URL_ENDPOINT=your-imagekit-endpoint
VITE_IMAGEKIT_PUBLIC_KEY=your-imagekit-public-key
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

**Server (.env)**
```env
MONGODB_URI=your-mongodb-connection-string
OPENAI_API_KEY=sk-your-openai-key
IMAGEKIT_PRIVATE_KEY=your-imagekit-private-key
STRIPE_SECRET_KEY=sk_test_...
JWT_SECRET=your-jwt-secret-key
PORT=5000
```

4. Start the development servers:
```console
# Terminal 1 - Start backend
cd server && npm run server

# Terminal 2 - Start frontend
cd client && npm run dev
```

---

## AI Capabilities

### 💬 Text Generation
- **GPT-4 Integration**: State-of-the-art language model
- **Content Types**: Articles, blogs, stories, code, etc.
- **Custom Parameters**: Temperature, max tokens, creativity control
- **Conversational AI**: Context-aware chat interactions

### 🎨 Image Generation
- **DALL-E Integration**: Advanced image generation
- **Multiple Styles**: Various artistic styles and formats
- **Resolution Options**: Different size and quality settings
- **Prompt Optimization**: AI-assisted prompt improvement

### 🔄 Real-time Processing
- **Streaming Responses**: Real-time text generation
- **Progress Indicators**: Generation status updates
- **Error Handling**: Graceful failure recovery
- **Rate Limiting**: Fair usage policies

---

## API Endpoints

### Authentication Routes (`/api/auth`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | User registration |
| POST | `/login` | User login |
| GET | `/profile` | Get user profile |
| PUT | `/profile` | Update user profile |

### AI Routes (`/api/ai`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/generate-text` | Generate text content |
| POST | `/generate-image` | Generate images from text |
| POST | `/chat` | Conversational AI chat |
| GET | `/models` | Get available AI models |

### Credit Routes (`/api/credits`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/balance` | Get user credit balance |
| POST | `/purchase` | Purchase credits via Stripe |
| GET | `/history` | Get credit usage history |

### Community Routes (`/api/community`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/creations` | Get community creations |
| POST | `/share` | Share a creation |
| GET | `/creations/:id` | Get specific creation |

---

## Payment Integration

### Stripe Setup
1. Create a Stripe account
2. Get API keys from Stripe dashboard
3. Configure webhooks for payment events
4. Set up products and pricing in Stripe

### Credit System
- **Free Tier**: 10 free credits on signup
- **Credit Packages**: Various pricing options
- **Usage Tracking**: Real-time credit deduction
- **Purchase History**: Complete transaction records

### Webhook Handling
- **Payment Success**: Credit balance update
- **Payment Failure**: Graceful error handling
- **Subscription Support**: Recurring payments
- **Refund Processing**: Credit reversal

---

## Deployment

### Frontend (Vercel)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2FQuickGPT%2Ftree%2Fmain%2Fclient)

### Backend (Render/Railway)
Deploy with environment variables configured for:
- MongoDB Atlas connection
- OpenAI API integration
- ImageKit configuration
- Stripe payment processing

### Database (MongoDB Atlas)
```bash
# Recommended: MongoDB Atlas Cloud
https://www.mongodb.com/atlas
```

### Environment Setup
```bash
# Production environment variables
MONGODB_URI=your-production-mongodb-uri
OPENAI_API_KEY=your-production-openai-key
STRIPE_SECRET_KEY=your-production-stripe-key
```

---

## Performance

- ⚡ **Fast Loading**: Vite-optimized build process
- 🎯 **AI Response Time**: Optimized API calls
- 📱 **Mobile Responsive**: Tailwind CSS mobile-first design
- 🔒 **Security**: JWT authentication and input validation
- 💾 **Efficient Storage**: MongoDB optimized queries

---

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow React best practices
- Use meaningful commit messages
- Write comprehensive tests
- Update documentation accordingly

---

## License

Distributed under the ISC License. See [`LICENSE`](https://github.com/elyse502/QuickGPT/blob/main/LICENSE) for more information.

---

## Support

For support, email elyseniyibizi502@gmail.com or create an issue in the GitHub repository.

---

## 📞 Contact

For any questions or support, please contact:

- [**NIYIBIZI Elysée**](https://linktr.ee/niyibizi_elysee)👨🏿‍💻 | [Github](https://github.com/elyse502) | [Linkedin](https://www.linkedin.com/in/niyibizi-elys%C3%A9e/) | [Twitter](https://twitter.com/Niyibizi_Elyse).
- **Email**: <elyseniyibizi502@gmail.com>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/niyibizi-elys%C3%A9e/) [![@phenrysay](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Niyibizi_Elyse) [![pH-7](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/elyse502)

---

<div align="center">

**QUICKGPT** - Unleash your creativity with AI! 🚀

*Built with ❤️ using the MERN stack and cutting-edge AI technologies.*

**Made with ❤️ by <i>[Elysée NIYIBIZI](https://elyse502.github.io/Elysee-Portfolio/)</i>**

[⬆ Back to Top](#table-of-contents)

</div>

<br />




