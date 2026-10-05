import { useEffect, useState } from "react";

function currentPath() {
  const path = window.location.hash.replace(/^#/, "") || "/";
  return path.startsWith("/") ? path : `/${path}`;
}

export default function useHashRoute() {
  const [path, setPath] = useState(currentPath);

  useEffect(() => {
    const update = () => {
      setPath(currentPath());
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  return path;
}
