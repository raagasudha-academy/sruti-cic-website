import { useEffect, useState } from "react";

function currentPath() {
  const path = window.location.pathname || "/";
  return path.startsWith("/") ? path : `/${path}`;
}

/** Navigate to a new path using the History API, without a full page reload. */
export function navigate(to: string) {
  if (to !== currentPath()) {
    window.history.pushState({}, "", to);
  }

  window.dispatchEvent(new PopStateEvent("popstate"));
}

export default function useBrowserRoute() {
  const [path, setPath] = useState(currentPath);

  useEffect(() => {
    const update = () => {
      setPath(currentPath());
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    window.addEventListener("popstate", update);
    return () => window.removeEventListener("popstate", update);
  }, []);

  return path;
}
