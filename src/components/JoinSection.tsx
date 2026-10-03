import { ExternalLink } from "lucide-react";
import { registrationUrl } from "../data/navigation";

export default function JoinSection() {
  return (
    <section className="join-section">
      <div>
        <p className="eyebrow eyebrow-light">Learn with Śruti</p>
        <h2>Interested in joining a class?</h2>
        <p>Use the registration form to register or enquire about Śruti sessions.</p>
      </div>
      <a className="button button-gold" href={registrationUrl} target="_blank" rel="noreferrer">
        Register / Enquire <ExternalLink size={16} />
      </a>
    </section>
  );
}
