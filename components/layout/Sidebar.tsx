import { cn } from "@/lib/utils";
import { navItems } from "@/data";
import { NavLink } from "./NavLink";
import Image from "next/image";
import { ArrowLeftToLine, ArrowRightToLine, X } from "lucide-react";

interface SidebarProps {
  className?: string;
  open: boolean;
  toggleSidebar: () => void;
  compressed: boolean;
  toggleCompress: () => void;
}

export function Sidebar({ open, toggleSidebar, className, compressed, toggleCompress }: SidebarProps) {
  return (
    <>
      <div
        className={cn(
          "fixed top-0 left-0 h-screen z-50 flex flex-col bg-[#1d3557] text-white p-4 gap-4",

          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          "transition-transform duration-300 ease-in-out",
          className
        )}
      >
        {/* Logo */}
        <div className="flex justify-between items-center">
          <Image src={"/logo/site-logo.webp"} alt="Tahwul Logo" width={140} height={40} className={cn(compressed && "ml-2 w-6 h-10 object-cover object-left")} />
          <button className="lg:hidden p-2 rounded-md bg-white/10 h-fit">
            <X className="text-gray-300" onClick={toggleSidebar} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 flex flex-col gap-2 py-4">
          {navItems.map(item => (
            <NavLink
              compressed={compressed}
              onClick={toggleSidebar}
              key={item.id}
              href={item.href}
              iconId={item.icon}
              name={item.name}
              activeClassName="bg-white/10 text-white"
              inactiveClassName="hover:bg-white/10 hover:text-white/80 text-white/50 transition-colors"
            />
          ))}
        </nav>

        <button
          onClick={toggleCompress}
          className="hidden lg:flex absolute -right-4 border border-gray-200 shadow-sm rounded-full bg-white p-2 items-center justify-center"
        >
          {!compressed ? <ArrowLeftToLine className="text-black" size={20} /> : <ArrowRightToLine className="text-black" size={20} />}
        </button>
      </div>
      {open && <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" onClick={toggleSidebar} />}
    </>
  );
}
