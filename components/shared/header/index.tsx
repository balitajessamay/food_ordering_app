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
              alt={`${APP_NAME} logo`}
              height={160}
              width={160}
              priority={true}
            />
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
