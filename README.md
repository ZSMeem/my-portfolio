# Portfolio With Supabase Admin

This Vite React portfolio now supports:

- Public portfolio content loaded from Supabase
- Fallback local content when Supabase is not configured yet
- Email/password login at `/admin`
- A protected admin editor for profile, skills, experience, education, achievements, and projects

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env` from `.env.example` and add:

```bash
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

3. In Supabase SQL Editor, run [supabase/schema.sql](/Users/zerinshaimameem/Desktop/my-portfolio/supabase/schema.sql).

4. In Supabase Authentication:
- Enable Email auth
- Create your admin user

5. Start the app:

```bash
npm run dev
```

## Deployment on Vercel

Add the same environment variables in the Vercel project settings:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Then deploy normally.

## Notes

- Public visitors can read the portfolio data.
- Only authenticated users can update it.
- Security is enforced by Supabase Row Level Security policies, not by hiding frontend code.
