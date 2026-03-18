import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { clonePortfolioData } from "../data/portfolioData";
import { useAuth } from "../hooks/useAuth";
import { getPortfolioContent, savePortfolioContent } from "../lib/portfolioApi";

function createBlankExperience() {
  return { role: "", org: "", time: "", points: [""] };
}

function createBlankEducation() {
  return { degree: "", school: "", time: "", extra: "" };
}

function createBlankProject() {
  return { title: "", description: "", tools: [""] };
}

function AuthForm() {
  const { signIn, isConfigured } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitting(true);
    setError("");

    try {
      await signIn(email, password);
    } catch (signInError) {
      setError(signInError.message ?? "Unable to sign in.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="admin-shell">
      <div className="admin-card auth-card">
        <div className="admin-header">
          <div>
            <p className="section-label">Admin</p>
            <h2 className="admin-title">Portfolio Editor</h2>
          </div>
          <Link to="/" className="admin-link">
            Back to site
          </Link>
        </div>

        {!isConfigured && (
          <p className="form-hint error-text">
            Supabase is not configured yet. Add your Vercel or local env vars
            before login can work.
          </p>
        )}

        <form className="admin-form" onSubmit={handleSubmit}>
          <label className="form-field">
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              disabled={!isConfigured || submitting}
              required
            />
          </label>

          <label className="form-field">
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Your password"
              disabled={!isConfigured || submitting}
              required
            />
          </label>

          {error && <p className="error-text">{error}</p>}

          <button
            type="submit"
            className="btn btn-dark admin-submit"
            disabled={!isConfigured || submitting}
          >
            {submitting ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}

function EditorSection({ title, children }) {
  return (
    <section className="admin-section">
      <h3>{title}</h3>
      {children}
    </section>
  );
}

export default function AdminPage() {
  const { session, loading: authLoading, signOut, isConfigured } = useAuth();
  const [draft, setDraft] = useState(() => clonePortfolioData());
  const [loadingContent, setLoadingContent] = useState(true);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!session) {
      setLoadingContent(false);
      return;
    }

    let active = true;

    async function loadContent() {
      setLoadingContent(true);
      setError("");

      try {
        const result = await getPortfolioContent();

        if (active) {
          setDraft(result.data);
        }
      } catch (loadError) {
        if (active) {
          setError(loadError.message ?? "Unable to load portfolio content.");
        }
      } finally {
        if (active) {
          setLoadingContent(false);
        }
      }
    }

    loadContent();

    return () => {
      active = false;
    };
  }, [session]);

  const updateProfile = (field, value) => {
    setDraft((current) => ({
      ...current,
      profile: {
        ...current.profile,
        [field]: value,
      },
    }));
  };

  const updateStringList = (section, index, value) => {
    setDraft((current) => ({
      ...current,
      [section]: current[section].map((item, itemIndex) =>
        itemIndex === index ? value : item
      ),
    }));
  };

  const addStringListItem = (section) => {
    setDraft((current) => ({
      ...current,
      [section]: [...current[section], ""],
    }));
  };

  const removeStringListItem = (section, index) => {
    setDraft((current) => ({
      ...current,
      [section]: current[section].filter((_, itemIndex) => itemIndex !== index),
    }));
  };

  const updateObjectListItem = (section, index, field, value) => {
    setDraft((current) => ({
      ...current,
      [section]: current[section].map((item, itemIndex) =>
        itemIndex === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  const addObjectListItem = (section, value) => {
    setDraft((current) => ({
      ...current,
      [section]: [...current[section], value],
    }));
  };

  const removeObjectListItem = (section, index) => {
    setDraft((current) => ({
      ...current,
      [section]: current[section].filter((_, itemIndex) => itemIndex !== index),
    }));
  };

  const updateExperiencePoint = (experienceIndex, pointIndex, value) => {
    setDraft((current) => ({
      ...current,
      experience: current.experience.map((item, itemIndex) =>
        itemIndex === experienceIndex
          ? {
              ...item,
              points: item.points.map((point, currentPointIndex) =>
                currentPointIndex === pointIndex ? value : point
              ),
            }
          : item
      ),
    }));
  };

  const addExperiencePoint = (experienceIndex) => {
    setDraft((current) => ({
      ...current,
      experience: current.experience.map((item, itemIndex) =>
        itemIndex === experienceIndex
          ? {
              ...item,
              points: [...item.points, ""],
            }
          : item
      ),
    }));
  };

  const removeExperiencePoint = (experienceIndex, pointIndex) => {
    setDraft((current) => ({
      ...current,
      experience: current.experience.map((item, itemIndex) =>
        itemIndex === experienceIndex
          ? {
              ...item,
              points: item.points.filter(
                (_, currentPointIndex) => currentPointIndex !== pointIndex
              ),
            }
          : item
      ),
    }));
  };

  const updateProjectTool = (projectIndex, toolIndex, value) => {
    setDraft((current) => ({
      ...current,
      projects: current.projects.map((item, itemIndex) =>
        itemIndex === projectIndex
          ? {
              ...item,
              tools: (item.tools ?? []).map((tool, currentToolIndex) =>
                currentToolIndex === toolIndex ? value : tool
              ),
            }
          : item
      ),
    }));
  };

  const addProjectTool = (projectIndex) => {
    setDraft((current) => ({
      ...current,
      projects: current.projects.map((item, itemIndex) =>
        itemIndex === projectIndex
          ? {
              ...item,
              tools: [...(item.tools ?? []), ""],
            }
          : item
      ),
    }));
  };

  const removeProjectTool = (projectIndex, toolIndex) => {
    setDraft((current) => ({
      ...current,
      projects: current.projects.map((item, itemIndex) =>
        itemIndex === projectIndex
          ? {
              ...item,
              tools: (item.tools ?? []).filter(
                (_, currentToolIndex) => currentToolIndex !== toolIndex
              ),
            }
          : item
      ),
    }));
  };

  const handleSave = async (event) => {
    event.preventDefault();

    setSaving(true);
    setStatus("");
    setError("");

    try {
      const nextDraft = await savePortfolioContent(draft);
      setDraft(nextDraft);
      setStatus("Saved to Supabase.");
    } catch (saveError) {
      setError(saveError.message ?? "Unable to save portfolio content.");
    } finally {
      setSaving(false);
    }
  };

  if (authLoading) {
    return (
      <div className="admin-shell">
        <div className="admin-card">Checking session...</div>
      </div>
    );
  }

  if (!session) {
    return <AuthForm />;
  }

  return (
    <div className="admin-shell">
      <div className="admin-card">
        <div className="admin-header">
          <div>
            <p className="section-label">Admin</p>
            <h2 className="admin-title">Edit Portfolio Content</h2>
            <p className="form-hint">
              Changes save to Supabase and appear on the public home page.
            </p>
          </div>

          <div className="admin-actions">
            <Link to="/" className="admin-link">
              View site
            </Link>
            <button type="button" className="btn btn-light" onClick={signOut}>
              Sign out
            </button>
          </div>
        </div>

        {!isConfigured && (
          <p className="error-text">
            Supabase is not configured. Saving is disabled until your env vars
            are set.
          </p>
        )}

        {loadingContent ? (
          <p>Loading content...</p>
        ) : (
          <form className="admin-form" onSubmit={handleSave}>
            <EditorSection title="Profile">
              <div className="form-grid">
                <label className="form-field">
                  <span>Name</span>
                  <input
                    value={draft.profile.name}
                    onChange={(event) => updateProfile("name", event.target.value)}
                  />
                </label>
                <label className="form-field">
                  <span>Title</span>
                  <input
                    value={draft.profile.title}
                    onChange={(event) =>
                      updateProfile("title", event.target.value)
                    }
                  />
                </label>
                <label className="form-field">
                  <span>Location</span>
                  <input
                    value={draft.profile.location}
                    onChange={(event) =>
                      updateProfile("location", event.target.value)
                    }
                  />
                </label>
                <label className="form-field">
                  <span>Phone</span>
                  <input
                    value={draft.profile.phone}
                    onChange={(event) =>
                      updateProfile("phone", event.target.value)
                    }
                  />
                </label>
                <label className="form-field">
                  <span>Email</span>
                  <input
                    value={draft.profile.email}
                    onChange={(event) =>
                      updateProfile("email", event.target.value)
                    }
                  />
                </label>
                <label className="form-field">
                  <span>LinkedIn URL</span>
                  <input
                    value={draft.profile.linkedin}
                    onChange={(event) =>
                      updateProfile("linkedin", event.target.value)
                    }
                  />
                </label>
                <label className="form-field">
                  <span>GitHub URL</span>
                  <input
                    value={draft.profile.github}
                    onChange={(event) =>
                      updateProfile("github", event.target.value)
                    }
                  />
                </label>
              </div>

              <label className="form-field">
                <span>Summary</span>
                <textarea
                  rows="4"
                  value={draft.profile.summary}
                  onChange={(event) =>
                    updateProfile("summary", event.target.value)
                  }
                />
              </label>

              <label className="form-field">
                <span>About</span>
                <textarea
                  rows="5"
                  value={draft.profile.about}
                  onChange={(event) =>
                    updateProfile("about", event.target.value)
                  }
                />
              </label>
            </EditorSection>

            <EditorSection title="Skills">
              {draft.skills.map((skill, index) => (
                <div key={`skill-${index}`} className="repeat-row">
                  <input
                    value={skill}
                    onChange={(event) =>
                      updateStringList("skills", index, event.target.value)
                    }
                  />
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => removeStringListItem("skills", index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="btn btn-light"
                onClick={() => addStringListItem("skills")}
              >
                Add skill
              </button>
            </EditorSection>

            <EditorSection title="Experience">
              {draft.experience.map((item, index) => (
                <div key={`experience-${index}`} className="editor-card">
                  <div className="form-grid">
                    <label className="form-field">
                      <span>Role</span>
                      <input
                        value={item.role}
                        onChange={(event) =>
                          updateObjectListItem(
                            "experience",
                            index,
                            "role",
                            event.target.value
                          )
                        }
                      />
                    </label>
                    <label className="form-field">
                      <span>Organization</span>
                      <input
                        value={item.org}
                        onChange={(event) =>
                          updateObjectListItem(
                            "experience",
                            index,
                            "org",
                            event.target.value
                          )
                        }
                      />
                    </label>
                    <label className="form-field">
                      <span>Time</span>
                      <input
                        value={item.time}
                        onChange={(event) =>
                          updateObjectListItem(
                            "experience",
                            index,
                            "time",
                            event.target.value
                          )
                        }
                      />
                    </label>
                  </div>

                  <div className="subsection">
                    <p className="subsection-title">Bullet points</p>
                    {item.points.map((point, pointIndex) => (
                      <div
                        key={`experience-${index}-point-${pointIndex}`}
                        className="repeat-row"
                      >
                        <input
                          value={point}
                          onChange={(event) =>
                            updateExperiencePoint(
                              index,
                              pointIndex,
                              event.target.value
                            )
                          }
                        />
                        <button
                          type="button"
                          className="btn btn-light"
                          onClick={() =>
                            removeExperiencePoint(index, pointIndex)
                          }
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => addExperiencePoint(index)}
                    >
                      Add bullet
                    </button>
                  </div>

                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => removeObjectListItem("experience", index)}
                  >
                    Remove experience
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="btn btn-light"
                onClick={() => addObjectListItem("experience", createBlankExperience())}
              >
                Add experience
              </button>
            </EditorSection>

            <EditorSection title="Education">
              {draft.education.map((item, index) => (
                <div key={`education-${index}`} className="editor-card">
                  <div className="form-grid">
                    <label className="form-field">
                      <span>Degree</span>
                      <input
                        value={item.degree}
                        onChange={(event) =>
                          updateObjectListItem(
                            "education",
                            index,
                            "degree",
                            event.target.value
                          )
                        }
                      />
                    </label>
                    <label className="form-field">
                      <span>School</span>
                      <input
                        value={item.school}
                        onChange={(event) =>
                          updateObjectListItem(
                            "education",
                            index,
                            "school",
                            event.target.value
                          )
                        }
                      />
                    </label>
                    <label className="form-field">
                      <span>Time</span>
                      <input
                        value={item.time}
                        onChange={(event) =>
                          updateObjectListItem(
                            "education",
                            index,
                            "time",
                            event.target.value
                          )
                        }
                      />
                    </label>
                    <label className="form-field">
                      <span>Extra</span>
                      <input
                        value={item.extra}
                        onChange={(event) =>
                          updateObjectListItem(
                            "education",
                            index,
                            "extra",
                            event.target.value
                          )
                        }
                      />
                    </label>
                  </div>

                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => removeObjectListItem("education", index)}
                  >
                    Remove education
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="btn btn-light"
                onClick={() => addObjectListItem("education", createBlankEducation())}
              >
                Add education
              </button>
            </EditorSection>

            <EditorSection title="Achievements">
              {draft.achievements.map((achievement, index) => (
                <div key={`achievement-${index}`} className="repeat-row">
                  <input
                    value={achievement}
                    onChange={(event) =>
                      updateStringList("achievements", index, event.target.value)
                    }
                  />
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => removeStringListItem("achievements", index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="btn btn-light"
                onClick={() => addStringListItem("achievements")}
              >
                Add achievement
              </button>
            </EditorSection>

            <EditorSection title="Projects">
              {draft.projects.map((project, index) => (
                <div key={`project-${index}`} className="editor-card">
                  <label className="form-field">
                    <span>Title</span>
                    <input
                      value={project.title}
                      onChange={(event) =>
                        updateObjectListItem(
                          "projects",
                          index,
                          "title",
                          event.target.value
                        )
                      }
                    />
                  </label>
                  <label className="form-field">
                    <span>Description</span>
                    <textarea
                      rows="4"
                      value={project.description}
                      onChange={(event) =>
                        updateObjectListItem(
                          "projects",
                          index,
                          "description",
                          event.target.value
                        )
                      }
                    />
                  </label>

                  <div className="subsection">
                    <p className="subsection-title">Required tools</p>
                    {(project.tools ?? []).map((tool, toolIndex) => (
                      <div
                        key={`project-${index}-tool-${toolIndex}`}
                        className="repeat-row"
                      >
                        <input
                          value={tool}
                          onChange={(event) =>
                            updateProjectTool(index, toolIndex, event.target.value)
                          }
                        />
                        <button
                          type="button"
                          className="btn btn-light"
                          onClick={() => removeProjectTool(index, toolIndex)}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => addProjectTool(index)}
                    >
                      Add tool tag
                    </button>
                  </div>

                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => removeObjectListItem("projects", index)}
                  >
                    Remove project
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="btn btn-light"
                onClick={() => addObjectListItem("projects", createBlankProject())}
              >
                Add project
              </button>
            </EditorSection>

            {(status || error) && (
              <div className="status-stack">
                {status && <p className="success-text">{status}</p>}
                {error && <p className="error-text">{error}</p>}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-dark admin-submit"
              disabled={!isConfigured || saving}
            >
              {saving ? "Saving..." : "Save changes"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
