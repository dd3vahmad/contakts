# Contakts

A full-stack contact management app built with **Next.js**, **Supabase**, **Tailwind CSS**, and **Shadcn UI**. It supports authentication, user-specific data access, inline editing, and handles large datasets efficiently.

---

## Features

- **Authentication**

  - Supabase Auth (email + password)
  - Protected routes (redirects if unauthenticated)

- **Contacts Table**

  - Each user can:
    - View only their contacts
    - Add new contacts (name + email)
    - Edit contacts inline
  - Large dataset handling (500+ contacts)
    - Pagination or virtual scroll

- **Security**

  - Row-Level Security (RLS) policies applied
  - Users can only access their own contacts

- **Bonus Features**
  - Debounced search by name/email
  - Sorting and filtering
  - Responsive UI (Tailwind + Shadcn)
  - Local + remote Supabase setup
  - Deployed on Vercel

---

## 📦 Tech Stack

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [TanStack Table](https://tanstack.com/table) (for performant tables)

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/dd3vahmad/contakts.git
cd contakts
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup and Run Supabase

```bash
npx supabase start

npx supabase db reset
```

### 4. Add credentials to .env and update

```
cp .env.example .env

```

### 5. Start the application

```
npm run dev
```
