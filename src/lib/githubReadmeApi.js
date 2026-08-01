const RAW_README_URL = import.meta.env.DEV
  ? "/readme.md"
  : "https://raw.githubusercontent.com/ZSMeem/my-portfolio/main/README.md";

function extractSection(content, name) {
  const re = new RegExp(`## ${name}\\n([\\s\\S]*?)(?=\\n## |$)`, "i");
  const m = content.match(re);
  return m ? m[1].trim() : "";
}

function parseBullets(text) {
  return text
    .split("\n")
    .filter((l) => l.startsWith("- "))
    .map((l) => l.slice(2).trim())
    .filter(Boolean);
}

function parseProfile(text) {
  const map = {};
  for (const line of text.split("\n")) {
    const m = line.match(/^- \*\*(.+?):\*\*\s+(.+)$/);
    if (m) map[m[1].toLowerCase()] = m[2].trim();
  }
  return {
    name: map["name"] || "",
    title: map["title"] || "",
    location: map["location"] || "",
    phone: map["phone"] || "",
    email: map["email"] || "",
    linkedin: map["linkedin"] || "",
    github: map["github"] || "",
    scholar: map["google scholar"] || "",
  };
}

function parseSkillGroups(text) {
  return text
    .split(/\n(?=### )/)
    .filter(Boolean)
    .map((block) => {
      const lines = block.trim().split("\n");
      const category = lines[0].replace(/^### /, "").trim();
      const items = lines
        .slice(1)
        .join(" ")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      return { category, items };
    })
    .filter((g) => g.category);
}

function parseExperience(text) {
  return text
    .split(/\n(?=### )/)
    .filter(Boolean)
    .map((block) => {
      const lines = block.trim().split("\n");
      const parts = lines[0].replace(/^### /, "").split(" | ");
      const points = lines
        .slice(1)
        .filter((l) => l.startsWith("- "))
        .map((l) => l.slice(2).trim());
      return {
        role: parts[0]?.trim() || "",
        org: parts[1]?.trim() || "",
        time: parts[2]?.trim() || "",
        points,
      };
    })
    .filter((e) => e.role);
}

function parseEducation(text) {
  return text
    .split(/\n(?=### )/)
    .filter(Boolean)
    .map((block) => {
      const lines = block.trim().split("\n");
      const parts = lines[0].replace(/^### /, "").split(" | ");
      const extras = lines
        .slice(1)
        .filter((l) => l.startsWith("- "))
        .map((l) => l.slice(2).trim());
      return {
        degree: parts[0]?.trim() || "",
        school: parts[1]?.trim() || "",
        time: parts[2]?.trim() || "",
        extra: extras.join(", "),
      };
    })
    .filter((e) => e.degree);
}

function parseProjects(text) {
  return text
    .split(/\n(?=### )/)
    .filter(Boolean)
    .map((block) => {
      const lines = block.trim().split("\n");
      const title = lines[0].replace(/^### /, "").trim();
      const toolsLine = lines.find((l) => /^\*\*Tools:\*\*/.test(l));
      const tools = toolsLine
        ? toolsLine
            .replace(/^\*\*Tools:\*\*\s*/, "")
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean)
        : [];
      const imageLine = lines.find((l) => /^!\[.*\]\(.*\)/.test(l));
      const image = imageLine
        ? imageLine.match(/^!\[.*\]\((.*)\)/)[1].trim()
        : "";
      const linkLine = lines.find((l) => /^\*\*Link:\*\*/.test(l));
      const link = linkLine
        ? linkLine.replace(/^\*\*Link:\*\*\s*/, "").trim()
        : "";
      const repoLine = lines.find((l) => /^\*\*Repo:\*\*/.test(l));
      const repo = repoLine
        ? repoLine.replace(/^\*\*Repo:\*\*\s*/, "").trim()
        : "";
      const description = lines
        .slice(1)
        .filter(
          (l) =>
            !/^\*\*Tools:\*\*/.test(l) &&
            !/^!\[.*\]\(.*\)/.test(l) &&
            !/^\*\*Link:\*\*/.test(l) &&
            !/^\*\*Repo:\*\*/.test(l)
        )
        .join(" ")
        .trim();
      return { title, description, tools, image, link, repo };
    })
    .filter((p) => p.title);
}

export async function getReadmeContent() {
  const res = await fetch(RAW_README_URL);
  if (!res.ok) throw new Error(`Failed to fetch README: ${res.status}`);
  const raw = await res.text();

  const START = "<!-- PORTFOLIO_START -->";
  const END = "<!-- PORTFOLIO_END -->";
  const si = raw.indexOf(START);
  const ei = raw.indexOf(END);
  const content =
    si !== -1 && ei !== -1 ? raw.slice(si + START.length, ei) : raw;

  const profileData = parseProfile(extractSection(content, "Profile"));
  const githubUsername = profileData.github?.split("/").pop();

  return {
    profile: {
      ...profileData,
      avatar: githubUsername ? `https://github.com/${githubUsername}.png` : "",
      summary: extractSection(content, "Summary"),
      about: extractSection(content, "About"),
    },
    skills: parseSkillGroups(extractSection(content, "Skills")),
    experience: parseExperience(extractSection(content, "Experience")),
    education: parseEducation(extractSection(content, "Education")),
    achievements: parseBullets(extractSection(content, "Achievements")),
    projects: parseProjects(extractSection(content, "Projects")),
    research: parseProjects(extractSection(content, "Research")),
  };
}
