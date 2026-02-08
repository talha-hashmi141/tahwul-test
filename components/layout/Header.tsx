import { currentUser } from "@/data";
import { SearchInput } from "./SearchInput";
import { NotificationButton } from "./NotificationButton";
import { UserMenu } from "./UserMenu";
import { Menu, X } from "lucide-react";

export function Header({ toggleSidebar, open }: { toggleSidebar: () => void; open: boolean }) {
  return (
    <header className="relative z-10 flex h-20 items-center justify-between shadow-sm border-b border-b-gray-50 bg-white px-4 md:px-6">
      <button onClick={toggleSidebar} className="lg:hidden bg-gray-100 rounded-md p-2">
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <SearchInput placeholder="Search" className="lg:flex hidden ml-2" />
      <div className="flex items-center gap-6">
        <NotificationButton count={1} />
        <UserMenu user={currentUser} />
      </div>
    </header>
  );
}
