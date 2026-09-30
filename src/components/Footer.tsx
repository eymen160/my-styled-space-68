import { profile } from "../content/site";

export default function Footer() {
  return (
    <footer className="wrap flex flex-col gap-3 py-12 text-sm text-ink-3 sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} {profile.name}</p>
      <p className="flex gap-5">
        <a className="ink-link" href={profile.github} target="_blank" rel="noopener">
          GitHub
        </a>
        <a className="ink-link" href={profile.linkedin} target="_blank" rel="noopener">
          LinkedIn
        </a>
        <a className="ink-link" href="#top">
          Back to top ↑
        </a>
      </p>
    </footer>
  );
}
