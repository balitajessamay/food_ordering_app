import { Button } from "@/components/ui/button";
import Link from "next/link";
import ThemeModeToggle from "./thememode-toggle";
import { CircleUserRound, MenuIcon, ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ThemeModeToggle />
        <Button asChild variant="ghost">
          <Link href="/orders">
            <ShoppingBag /> Orders
          </Link>
        </Button>
        <Button asChild>
          <Link href="/sign-in">
            <CircleUserRound /> Sign In
          </Link>
        </Button>
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <MenuIcon strokeWidth={3} className="text-(--accent-color)" />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start p-2">
            <SheetHeader>
              <SheetTitle>Navigation Menu</SheetTitle>
            </SheetHeader>
            <ThemeModeToggle />
            <Button asChild variant="ghost">
              <Link href="/orders">
                <ShoppingBag /> Orders
              </Link>
            </Button>
            <Button asChild>
              <Link href="/sign-in">
                <CircleUserRound /> Sign In
              </Link>
            </Button>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
