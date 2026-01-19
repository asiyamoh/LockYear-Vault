# LockYear Vault

A secure vault application for

## Tech Stack

### Frontend

- **Framework:** React 19.1.0
- **Build Tool:** Vite 7.1.2
- **Router:** TanStack Router 1.44.2
- **State Management:** TanStack React Query 5.90.2
- **Styling:** Tailwind CSS 3.4.18
- **UI Components:** Headless UI 2.2.8, Heroicons 2.2.0
- **Forms:** React Hook Form 7.65.0 with Zod 4.1.12 validation
- **Language:** TypeScript 5.9.2
- **Backend Client:** Supabase JS 2.75.0

### Backend (API)

- **Framework:** NestJS 11.1.6
- **Database ORM:** Prisma 6.15.0
- **Database:** Supabase (PostgreSQL)
- **Language:** TypeScript 5.9.2
- **Validation:** Class Validator 0.14.2, Class Transformer 0.5.1

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL (via Supabase)

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd LockYear-Vault
```

2. Install frontend dependencies

```bash
npm install
```

3. Install API dependencies

```bash
cd api
npm install
cd ..
```

4. Set up environment variables

Copy the example env files and fill in your values:

```bash
cp .env.example .env
cp api/.env.example api/.env
```

5. Set up the database

```bash
cd api
npx prisma generate
npx prisma migrate dev
cd ..
```

### Development

Run the frontend:

```bash
npm run dev
```

Run the API (in a separate terminal):

```bash
cd api
npm run dev
```

The frontend will be available at `http://localhost:3000` and the API at `http://localhost:3001`.

### Build

Build the frontend:

```bash
npm run build
```

Build the API:

```bash
cd api
npm run build
```

## Project Structure

```
LockYear-Vault/
├── api/                    # Backend API
│   ├── src/               # TypeScript source
│   ├── prisma/            # Database schema and migrations
│   └── dist/              # Compiled output
├── src/                   # Frontend source
│   ├── components/        # Reusable components
│   ├── features/          # Feature modules
│   ├── hooks/             # Custom React hooks
│   ├── routes/            # Route definitions
│   ├── types/             # TypeScript types
│   └── utils/             # Utility functions
├── public/                # Static assets
└── dist/                  # Frontend build output
```

## License

Private
