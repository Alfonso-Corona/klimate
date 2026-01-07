
import { useTheme } from "@/context/theme-provider";
import { Moon, Sun } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import CitySearch from "./CitySearch";

type CloudProps = {
  size: string;
  theme?: string;
  className: string;
};

const Cloud = ({ size, theme = "#000000", className }: CloudProps): ReactNode => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
      >
        <path
          fill={theme}
          d="M16 4h-6v2H8v2H4v2H2v2H0v6h2v2h20v-2h2v-6h-2v-2h-2V8h-2V6h-2V4zm2 8h4v6H2v-6h2v-2h4v2h2v-2H8V8h2V6h6v2h2v4zm0 0v2h-2v-2h2z"
        />
      </svg>
    </div>
  );
};

const Header = () => {
  const {theme, setTheme} = useTheme();
  const isDark = theme === 'dark';
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <Cloud size="auto" className="h-14" theme={theme === 'dark' ? "#ffffff" : '#000000'}/>
        </Link>
        <div className="flex gap-4">

          <CitySearch />

          <div onClick={() => setTheme(isDark ? "light" : "dark")} className={`flex items-center cursor-pointer transition-transform duration-500 ${isDark ? "rotate-180" : "rotate-0"}`}>
            {isDark ? (
              <Sun className="h-6 w-6 text-yellow-500 rotate-0 transition-all" />
            ) : (
              <Moon className="h-6 w-6 text-blue-500 rotate-0 transition-all" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
