import { useContext, useState, type ReactNode } from "react";
import AppLink from "./AppLink";
import { InstallPromptContext } from "../context/InstallPromptContext";

type InstallCtaProps = {
  children: ReactNode;
  className: string;
};

export default function InstallCta({ children, className }: InstallCtaProps) {
  const { installPrompt, clearInstallPrompt } = useContext(InstallPromptContext);
  const [installed, setInstalled] = useState(false);

  const promptToInstall = async () => {
    if (!installPrompt) return;

    await installPrompt.prompt();
    const choice = await installPrompt.userChoice;
    setInstalled(choice.outcome === "accepted");
    clearInstallPrompt();
  };

  if (installed) {
    return (
      <span className={`${className} install-cta-installed`} role="status">
        Śruti added
      </span>
    );
  }

  if (installPrompt) {
    return (
      <button className={className} type="button" onClick={promptToInstall}>
        {children}
      </button>
    );
  }

  return (
    <AppLink to="/install" className={className}>
      {children}
    </AppLink>
  );
}
