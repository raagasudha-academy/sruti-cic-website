import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { navigate } from "../hooks/useBrowserRoute";

type AppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
  children: ReactNode;
};

export default function AppLink({ to, children, onClick, ...props }: AppLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    const isModifiedClick =
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey;

    if (isModifiedClick) return;

    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
