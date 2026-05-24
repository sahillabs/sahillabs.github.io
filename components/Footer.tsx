import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <Reveal>
          <div className="big">
            Let&apos;s <span className="grad-text">build</span> something.
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <a className="mail" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="socials">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              github
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              linkedin
            </a>
            <a href={profile.resumePdf} target="_blank" rel="noopener noreferrer">
              resume.pdf
            </a>
          </div>
        </Reveal>
        <div className="small">
          © {new Date().getFullYear()} Sahil Khatkar · built with Next.js, TypeScript &amp; Framer Motion
        </div>
      </div>
    </footer>
  );
}
