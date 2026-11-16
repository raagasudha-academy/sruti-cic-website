import { useContext, useState } from "react";
import { Download, Share, Smartphone } from "lucide-react";
import { InstallPromptContext } from "../context/InstallPromptContext";

export default function Install() {
  const { installPrompt, clearInstallPrompt } = useContext(InstallPromptContext);
  const [message, setMessage] = useState("");

  const installOnAndroid = async () => {
    if (!installPrompt) return;

    await installPrompt.prompt();
    const choice = await installPrompt.userChoice;
    setMessage(
      choice.outcome === "accepted"
        ? "Śruti is ready on your phone."
        : "You can install Śruti any time from your browser menu.",
    );
    clearInstallPrompt();
  };

  return (
    <>
      <section className="install-hero">
        <p className="eyebrow">Śruti, wherever you are</p>
        <h1>Take learning with you.</h1>
        <p>
          Add Śruti to your phone’s Home Screen for quick, app-style access to
          classes, events and learning resources.
        </p>
      </section>

      <section className="install-options section" aria-label="Installation instructions">
        <article className="install-option install-option-iphone">
          <div className="install-option-icon"><Share size={22} aria-hidden="true" /></div>
          <p className="eyebrow">iPhone</p>
          <h2>Add from Safari</h2>
          <ol>
            <li>Open the Śruti website in Safari.</li>
            <li>Tap the <strong>Share</strong> button.</li>
            <li>Choose <strong>Add to Home Screen</strong>.</li>
            <li>Turn on <strong>Open as Web App</strong>, then tap <strong>Add</strong>.</li>
          </ol>
        </article>

        <article className="install-option install-option-android">
          <div className="install-option-icon"><Smartphone size={22} aria-hidden="true" /></div>
          <p className="eyebrow">Android</p>
          <h2>Install from your browser</h2>
          <p>
            Open the Śruti website in Chrome and choose <strong>Install app</strong>
            from the browser menu.
          </p>
          {installPrompt && (
            <button className="button button-primary install-action" type="button" onClick={installOnAndroid}>
              <Download size={17} aria-hidden="true" /> Install Śruti
            </button>
          )}
          {message && <p className="install-status" role="status">{message}</p>}
        </article>
      </section>

      <section className="install-note">
        <p>
          The app uses the same secure Śruti website and updates as the site
          does. An internet connection is needed for live classes and current
          information.
        </p>
      </section>
    </>
  );
}
