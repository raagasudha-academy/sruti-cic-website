import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";
import AppLink from "./AppLink";

type PathCardProps = {
  icon: LucideIcon;
  title: string;
  to: string;
  children: ReactNode;
};

export default function PathCard({ icon: Icon, title, to, children }: PathCardProps) {
  return (
    <AppLink to={to} className="path-card">
      <Icon size={22} />
      <h3>{title}</h3>
      <p>{children}</p>
      <span>
        Explore <ChevronRight size={15} />
      </span>
    </AppLink>
  );
}
