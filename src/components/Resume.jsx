import { FiDownload, FiExternalLink } from "react-icons/fi";

const RESUME_URL = `${import.meta.env.BASE_URL}resume/ZSM_Resume_.pdf`;

export default function Resume() {
  return (
    <section className="section resume-page">
      <h3>Resume</h3>

      <div className="resume-actions">
        <a
          href={RESUME_URL}
          download="Zerin_Shaima_Meem_Resume.pdf"
          className="btn btn-dark btn-icon"
        >
          <FiDownload aria-hidden="true" />
          Download Resume
        </a>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noreferrer"
          className="btn btn-light btn-icon"
        >
          <FiExternalLink aria-hidden="true" />
          Open in New Tab
        </a>
      </div>

      <div className="card resume-embed-card">
        <object
          data={RESUME_URL}
          type="application/pdf"
          className="resume-embed"
          aria-label="Zerin Shaima Meem resume preview"
        >
          <p>
            Your browser can't preview this PDF.{" "}
            <a href={RESUME_URL} target="_blank" rel="noreferrer">
              Open the resume in a new tab
            </a>{" "}
            instead.
          </p>
        </object>
      </div>
    </section>
  );
}
