create table if not exists public.portfolio_content (
  id text primary key,
  profile jsonb not null default '{}'::jsonb,
  skills text[] not null default '{}',
  experience jsonb not null default '[]'::jsonb,
  education jsonb not null default '[]'::jsonb,
  achievements text[] not null default '{}',
  projects jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default timezone('utc', now())
);

alter table public.portfolio_content enable row level security;

create policy "public can read portfolio content"
on public.portfolio_content
for select
to anon, authenticated
using (true);

create policy "authenticated users can upsert portfolio content"
on public.portfolio_content
for all
to authenticated
using (true)
with check (true);

insert into public.portfolio_content (
  id,
  profile,
  skills,
  experience,
  education,
  achievements,
  projects
)
values (
  'main',
  '{
    "name": "Zerin Shaima Meem",
    "title": "Software Engineer | AI & Research Enthusiast",
    "location": "Omaha, Nebraska",
    "phone": "+1 (402) 590-3433",
    "email": "zerin.shaima.meem@gmail.com",
    "linkedin": "https://linkedin.com/in/zerin-shaima-meem",
    "github": "https://github.com/ZSMeem",
    "summary": "Programmer with strong passion for Software Engineering and Artificial Intelligence. I enjoy building practical systems, solving algorithmic problems, and doing research that has real-world impact.",
    "about": "I am a software engineer and graduate student who enjoys web development, AI, and systems research. My background in competitive programming strengthened my problem-solving skills, and my academic and industry experiences helped me grow as both an engineer and a researcher."
  }'::jsonb,
  array['C', 'C++', 'JavaScript', 'TypeScript', 'Python', 'React.js', 'Node.js', 'Git/GitHub', 'Postman', 'Storybook', 'Jest', 'AWS'],
  '[
    {
      "role": "Graduate Research Assistant",
      "org": "University of Nebraska Omaha",
      "time": "Aug 2025 – Present",
      "points": [
        "Investigating and implementing rate adaptation algorithms for wireless networking using NS-3.",
        "Designing AI-driven network congestion control algorithms for large-scale disaggregated storage systems."
      ]
    },
    {
      "role": "Software Engineer I",
      "org": "Samsung R&D Institute Bangladesh",
      "time": "Jan 2025 – Jul 2025",
      "points": [
        "Worked on a web-based semantic knowledge graph modeling tool using Next.js.",
        "Built persistent real-time graph canvas interactions with drag-and-drop support.",
        "Used Jest, Playwright, and Storybook for testing and UI component isolation."
      ]
    }
  ]'::jsonb,
  '[
    {
      "degree": "Masters in Computer Science",
      "school": "University of Nebraska Omaha",
      "time": "Aug 2025 – Present",
      "extra": ""
    },
    {
      "degree": "Bachelor of Science in Computer Science and Engineering",
      "school": "Chittagong University of Engineering and Technology",
      "time": "Jan 2019 – May 2024",
      "extra": "CGPA: 3.67/4.00"
    }
  ]'::jsonb,
  array[
    'Graduate Research and Creative Activity (GRACA) Scholarship, UNO, Summer 2026.',
    'Honorable Mention at the UNO C-Bytes Research Showcase.',
    'Solved 3000+ problems across online judges.',
    '3-time ICPC Regionalist.',
    'Global Rank 9th in ICPC AlgoQueen 2024 Final.'
  ],
  '[
    {
      "title": "CSI-based Position Independent Gesture Recognition System",
      "description": "An LSTM-based gesture recognition system using WiFi CSI data, published in IEEE WIECON-ECE 2024.",
      "tools": ["Python", "LSTM", "WiFi CSI", "IEEE"]
    },
    {
      "title": "CUET Competitive Programming Community Management System",
      "description": "A platform for real-time leaderboard tracking, contest monitoring, and performance visualization for competitive programmers.",
      "tools": ["React", "Node.js", "Leaderboard", "Data Visualization"]
    }
  ]'::jsonb
)
on conflict (id) do nothing;
