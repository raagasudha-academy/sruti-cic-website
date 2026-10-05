import { useEffect, useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Classes from "./pages/Classes";
import Community from "./pages/Community";
import Teachers from "./pages/Teachers";
import About from "./pages/About";
import Lyrics from "./pages/Lyrics";
import useHashRoute from "./hooks/useHashRoute";
import ChatWidget from "./components/ChatWidget";

const pages = {
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
  const path = useHashRoute();
  const mainRef = useRef<HTMLElement>(null);

  const page = pages[path as keyof typeof pages] ?? pages["/"];
  const Page = page.component;

  useEffect(() => {
    document.title =
      page.title === "Home"
        ? "Śruti CIC"
        : `${page.title} | Śruti CIC`;

    mainRef.current?.focus({
      preventScroll: true,
    });

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [path, page.title]);

  return (
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
  );
}