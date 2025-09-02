import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MenuItem } from "@/types";

const CafeMenuCard = ({ cafeMenu }: { cafeMenu: MenuItem }) => {
  const floatPrice = Number(cafeMenu.price).toFixed(2);

  return (
    <Card className="w-full max-w-xs bg-transparent ring ring-(--foreground-accent) shadow-[-8px_8px_0px_2px_#000000]">
      <CardHeader className="p-0">
        <Link href={`/cafe-menu/${cafeMenu.slug}`}>
          <Image
            src={cafeMenu.image}
            alt={cafeMenu.name}
            width={300}
            height={300}
            priority={true}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <Link href={`/cafe-menu/${cafeMenu.slug}`}>
          <h2 className="text-sm font-extrabold">{cafeMenu.name}</h2>
        </Link>
        <div className="flex-between gap-4">
          <p>{cafeMenu.rating} Stars</p>
          {cafeMenu.isAvailable ? (
            <p className="font-bold text-(--accent-color)">P{floatPrice}</p>
          ) : (
            <p className="text-destructive">Not Available</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CafeMenuCard;
