# NestJS Authentication: API Key & JWT Strategy

[![NestJS](https://img.shields.io/badge/NestJS-v10-red?style=flat-square&logo=nestjs)](https://nestjs.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=flat-square&logo=node.js)](https://nodejs.org)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)
[![Medium](https://img.shields.io/badge/Medium-Article-black?style=flat-square&logo=medium)](https://medium.com/@alpercitak/nest-js-authenticate-with-both-api-key-and-jwt-4a22bf7b3049)

> A comprehensive demonstration project showcasing how to implement multiple authentication strategies in NestJS using both API Key and JWT token-based authentication methods.

## 📚 Featured Article

Read the detailed walkthrough on Medium: **[NestJS: Authenticate with Both API Key and JWT](https://medium.com/@alpercitak/nest-js-authenticate-with-both-api-key-and-jwt-4a22bf7b3049)**

## ✨ Features

- 🔐 **Dual Authentication**: Support for API Key and JWT-based authentication
- 🛡️ **Guards & Strategies**: Custom Passport.js strategies and NestJS guards
- 🔒 **Local Strategy**: Username/password authentication support
- 📦 **Type-Safe**: Full TypeScript support with type definitions
- ✅ **Well-Tested**: Includes unit and e2e tests
- 🚀 **Production-Ready**: Clean, maintainable code following NestJS best practices

## 🔑 Authentication Methods

### 1. **API Key Authentication**
- Pass API key via `X-API-Key` header
- Simple key-based access control
- Ideal for service-to-service communication

### 2. **JWT Authentication**
- Token-based authentication
- Secure user sessions
- Support for token expiration and refresh

### 3. **Local Strategy**
- Traditional username/password authentication
- Local Passport strategy implementation
- Foundation for JWT token generation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (or npm/yarn)

### Installation & Setup

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm start:dev

# Run tests
pnpm test

# Run e2e tests
pnpm test:e2e
```

The application will start on `http://localhost:3000`

## 📁 Project Structure

```
src/
├── auth/
│   ├── auth.module.ts          # Authentication module
│   ├── auth.service.ts         # Core authentication logic
│   ├── guard/                  # Custom authentication guards
│   │   ├── apikey-auth.guard.ts
│   │   ├── jwt-auth.guard.ts
│   │   └── local-auth.guard.ts
│   └── strategy/               # Passport.js strategies
│       ├── apikey.strategy.ts
│       ├── jwt.strategy.ts
│       └── local.strategy.ts
├── data/
│   └── users/                  # User data service
├── app.controller.ts           # Main application routes
├── app.module.ts               # Root application module
├── app.service.ts              # Application service
└── main.ts                     # Application entry point
```

## 🔌 API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `GET` | `/` | API Key | Health check (protected by API Key guard) |
| `POST` | `/login` | Local | Authenticate with username/password |
| `GET` | `/jwt` | JWT | Protected endpoint (requires JWT token) |

## 📖 Usage Examples

### Authenticate with API Key

```bash
# Access the root endpoint with API Key
curl -H "X-API-Key: your-api-key" http://localhost:3000/
```

### Authenticate with JWT

```bash
# Login to get JWT token
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{"username":"user","password":"pass"}'

# Use token to access protected endpoint
curl -H "Authorization: Bearer YOUR_JWT_TOKEN" http://localhost:3000/jwt
```

## 🛠️ Technology Stack

- **NestJS**: Progressive Node.js framework
- **Passport.js**: Authentication middleware
- **TypeScript**: Type-safe development
- **Jest**: Testing framework
- **pnpm**: Package manager

## 📝 Learn More

For an in-depth explanation of the implementation, guard usage, and authentication flows, please visit the [Medium article](https://medium.com/@alpercitak/nest-js-authenticate-with-both-api-key-and-jwt-4a22bf7b3049).

## 💡 Key Concepts Covered

- Implementing custom Passport strategies
- Creating reusable authentication guards
- Combining multiple authentication methods
- Securing routes with different auth mechanisms
- Best practices for authentication in NestJS

## 📄 License

This project is licensed under the MIT License.

---

**Happy coding!** 🎉

For questions or feedback, feel free to reach out or comment on the [Medium article](https://medium.com/@alpercitak/nest-js-authenticate-with-both-api-key-and-jwt-4a22bf7b3049).
