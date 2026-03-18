import { clonePortfolioData } from "../data/portfolioData";
import { isSupabaseConfigured, supabase } from "./supabase";

const TABLE_NAME = "portfolio_content";
const PRIMARY_ROW_ID = "main";

function cleanText(value) {
  return typeof value === "string" ? value.trim() : "";
}

function cleanStringArray(values) {
  if (!Array.isArray(values)) {
    return [];
  }

  return values.map(cleanText).filter(Boolean);
}

function cleanObjectArray(values, mapper) {
  if (!Array.isArray(values)) {
    return [];
  }

  return values
    .map(mapper)
    .filter((item) => Object.values(item).some((value) => value));
}

export function normalizePortfolioData(rawData) {
  const fallback = clonePortfolioData();
  const profile = rawData?.profile ?? {};

  return {
    profile: {
      ...fallback.profile,
      ...profile,
    },
    skills: cleanStringArray(rawData?.skills).length
      ? cleanStringArray(rawData.skills)
      : fallback.skills,
    experience: cleanObjectArray(rawData?.experience, (item) => ({
      role: cleanText(item?.role),
      org: cleanText(item?.org),
      time: cleanText(item?.time),
      points: cleanStringArray(item?.points),
    })).length
      ? cleanObjectArray(rawData.experience, (item) => ({
          role: cleanText(item?.role),
          org: cleanText(item?.org),
          time: cleanText(item?.time),
          points: cleanStringArray(item?.points),
        }))
      : fallback.experience,
    education: cleanObjectArray(rawData?.education, (item) => ({
      degree: cleanText(item?.degree),
      school: cleanText(item?.school),
      time: cleanText(item?.time),
      extra: cleanText(item?.extra),
    })).length
      ? cleanObjectArray(rawData.education, (item) => ({
          degree: cleanText(item?.degree),
          school: cleanText(item?.school),
          time: cleanText(item?.time),
          extra: cleanText(item?.extra),
        }))
      : fallback.education,
    achievements: cleanStringArray(rawData?.achievements).length
      ? cleanStringArray(rawData.achievements)
      : fallback.achievements,
    projects: cleanObjectArray(rawData?.projects, (item) => ({
      title: cleanText(item?.title),
      description: cleanText(item?.description),
      tools: cleanStringArray(item?.tools),
    })).length
      ? cleanObjectArray(rawData.projects, (item) => ({
          title: cleanText(item?.title),
          description: cleanText(item?.description),
          tools: cleanStringArray(item?.tools),
        }))
      : fallback.projects,
  };
}

export async function getPortfolioContent() {
  if (!isSupabaseConfigured || !supabase) {
    return {
      data: clonePortfolioData(),
      source: "local",
    };
  }

  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select("profile, skills, experience, education, achievements, projects")
    .eq("id", PRIMARY_ROW_ID)
    .maybeSingle();

  if (error) {
    throw error;
  }

  if (!data) {
    return {
      data: clonePortfolioData(),
      source: "local",
    };
  }

  return {
    data: normalizePortfolioData(data),
    source: "supabase",
  };
}

export async function savePortfolioContent(portfolioData) {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error(
      "Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY first."
    );
  }

  const normalizedData = normalizePortfolioData(portfolioData);

  const payload = {
    id: PRIMARY_ROW_ID,
    profile: normalizedData.profile,
    skills: normalizedData.skills,
    experience: normalizedData.experience,
    education: normalizedData.education,
    achievements: normalizedData.achievements,
    projects: normalizedData.projects,
    updated_at: new Date().toISOString(),
  };

  const { error } = await supabase.from(TABLE_NAME).upsert(payload);

  if (error) {
    throw error;
  }

  return normalizedData;
}
