# Careerstream

Smart hiring through personality science. Careerstream uses personality assessments to calculate compatibility scores between candidates and job roles, helping employers find the perfect match based on both soft and hard skills.

## Features

- **Personality Assessments**: Candidates complete comprehensive assessments that evaluate traits across creativity, analytical thinking, collaboration, leadership, and more.
- **Compatibility Scoring**: Our algorithm matches candidate profiles against role requirements to generate actionable compatibility scores.
- **Role-Based Matching**: Employers define what traits matter most for each position, creating weighted profiles for ideal candidates.
- **Two-Sided Platform**: Separate experiences for employers (post jobs, review matches) and candidates (take assessments, find matching roles).

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: [Supabase Auth](https://supabase.com/docs/guides/auth)
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- A Supabase project

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-org/careerstream.git
   cd careerstream
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Copy the example environment file and fill in your values:

   ```bash
   cp .env.example .env.local
   ```

   Required variables:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anon/public key
   - `NEXT_PUBLIC_SITE_URL`: Your production site URL (for SEO)

4. **Configure Supabase Auth**

   In your Supabase dashboard:
   - Go to **Authentication** > **URL Configuration**
   - Set **Site URL** to your production URL (e.g., `https://careerstream.com`)
   - Add redirect URLs:
     - `http://localhost:3000/**` (for local development)
     - `https://your-domain.com/**` (for production)

5. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Add environment variables in Vercel's project settings:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_SITE_URL`
4. Deploy!

## Project Structure

```
careerstream/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles
│   ├── login/page.tsx              # Login page
│   ├── signup/
│   │   ├── employer/page.tsx       # Employer signup
│   │   └── candidate/page.tsx      # Candidate signup
│   ├── employer/dashboard/page.tsx # Employer dashboard
│   ├── candidate/dashboard/page.tsx # Candidate dashboard
│   ├── privacy/page.tsx            # Privacy policy
│   ├── terms/page.tsx              # Terms of service
│   ├── robots.ts                   # robots.txt generation
│   └── sitemap.ts                  # sitemap.xml generation
├── components/                     # Reusable UI components
├── lib/
│   └── supabase/
│       └── client.ts               # Supabase client setup
└── public/                         # Static assets
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

Copyright © 2025 Careerstream. All rights reserved.
