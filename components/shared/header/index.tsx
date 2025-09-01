// import { ShoppingBag, CircleUserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
// import ThemeModeToggle from "./thememode-toggle";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/vectors/logo.svg"
              width={160}
              height={160}
              alt={`${APP_NAME} logo`}
              priority={true}
              className="w-auto h-auto"
            />
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
