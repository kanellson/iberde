"use client";

import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  label: string;
  icon: IconDefinition;
  href: string;
  active?: boolean;
};

export const NavItem = ({ label, icon, href, active }: Props) => {
  const pathname = usePathname();
  const path = pathname === href;
  return (
    <div>
      <Link
        className={`flex items-center gap-2 py-2 ${active || path ? "text-cyan-600" : "text-slate-300"}`}
        href={href}
      >
        <FontAwesomeIcon
          className="size-4 relative top-[-.035rem]"
          icon={icon}
        />
        <div className="text-lg">{label}</div>
      </Link>
    </div>
  );
};
