import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Classes from "./pages/Classes";
import Community from "./pages/Community";
import Teachers from "./pages/Teachers";
import Directors from "./pages/Directors";
import About from "./pages/About";
import Lyrics from "./pages/Lyrics";
import useBrowserRoute from "./hooks/useBrowserRoute";
import ChatWidget from "./components/ChatWidget";
import Registration from "./pages/Registration";
import Install from "./pages/Install";
import { InstallPromptContext, type InstallPromptEvent } from "./context/InstallPromptContext";

const pages = {
  "/register": { title: "Student registration", component: Registration },
  "/install": { title: "Install Śruti", component: Install },
  "/": {
    title: "Home",
    component: Home,
  },
  "/events": {
    title: "Events",
    component: Events,
  },
  "/classes": {
    title: "Classes",
    component: Classes,
  },
  "/community": {
    title: "Community",
    component: Community,
  },
  "/directors": {
    title: "Our Directors",
    component: Directors,
  },
  "/teachers": {
    title: "Teachers",
    component: Teachers,
  },
  "/about": {
    title: "About",
    component: About,
  },
  "/lyrics": {
    title: "Lyrics",
    component: Lyrics,
  },
};

export default function App() {
  const path = useBrowserRoute();
  const mainRef = useRef<HTMLElement>(null);
  const [installPrompt, setInstallPrompt] = useState<InstallPromptEvent | null>(null);

  useEffect(() => {
    const handleInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as InstallPromptEvent);
    };
    const handleInstalled = () => setInstallPrompt(null);

    window.addEventListener("beforeinstallprompt", handleInstallPrompt);
    window.addEventListener("appinstalled", handleInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleInstallPrompt);
      window.removeEventListener("appinstalled", handleInstalled);
    };
  }, []);

  const page = pages[path as keyof typeof pages] ?? pages["/"];
  const Page = page.component;

  useEffect(() => {
    document.title =
      page.title === "Home"
        ? "Śruti"
        : `${page.title} | Śruti`;

    mainRef.current?.focus({
      preventScroll: true,
    });

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [path, page.title]);

  return (
    <InstallPromptContext.Provider
      value={{ installPrompt, clearInstallPrompt: () => setInstallPrompt(null) }}
    >
      <>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>

        <Header path={path} />

        <main
          ref={mainRef}
          id="main-content"
          tabIndex={-1}
          aria-label={`${page.title} page`}
        >
          <Page />
        </main>

        <Footer />
        <ChatWidget />
      </>
    </InstallPromptContext.Provider>
  );
}
