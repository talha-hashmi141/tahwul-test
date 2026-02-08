"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_ICON_MAP, DEFAULT_NAV_ICON } from "@/lib/nav-icons";

interface NavLinkProps {
  compressed: boolean;
  href: string;
  iconId: string;
  name: string;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  iconActiveClassName?: string;
  iconInactiveClassName?: string;
  onClick?: () => void;
}

export function NavLink({
  compressed,
  href,
  iconId,
  name,
  className,
  activeClassName = "bg-white/10 text-white",
  inactiveClassName = "hover:bg-white/10 text-white/50 transition-colors",
  onClick,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const Icon = NAV_ICON_MAP[iconId] ?? DEFAULT_NAV_ICON;

  return (
    <Link
      onClick={() => onClick?.()}
      href={href}
      className={cn("group flex items-center rounded-md px-3 py-3 font-medium", isActive ? activeClassName : inactiveClassName, className)}
    >
      <Icon className={cn("mr-3 h-5 w-5 shrink-0")} />
      {!compressed && name}
    </Link>
  );
}
