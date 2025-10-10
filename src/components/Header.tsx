import { Mountain } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 h-16 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Mountain className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-gradient">Everest Bootcamp</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
