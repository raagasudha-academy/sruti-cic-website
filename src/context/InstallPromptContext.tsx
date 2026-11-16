import { createContext } from "react";

export type InstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
};

type InstallPromptContextValue = {
  installPrompt: InstallPromptEvent | null;
  clearInstallPrompt: () => void;
};

export const InstallPromptContext = createContext<InstallPromptContextValue>({
  installPrompt: null,
  clearInstallPrompt: () => undefined,
});
