import type { AnchorHTMLAttributes, ReactNode } from "react";

type AppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
  children: ReactNode;
};

export default function AppLink({ to, children, ...props }: AppLinkProps) {
  return (
    <a href={`#${to}`} {...props}>
      {children}
    </a>
  );
}
