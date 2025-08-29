import Image from "next/image";
import CafeMenuCard from "./cafe-menu-card";
// interface CafeMenuListProps {
//   name: string;
//   slug: string;
//   category: string;
//   description: string;
//   image: string;
//   price: number;
//   rating: number;
//   numReviews: number;
//   available: boolean;
//   isFeatured: boolean;
// }

const CafeMenuList = ({
  data,
  title,
  limit,
}: {
  data: any;
  title?: string;
  limit?: number;
}) => {
  const limitedData = limit ? data.slice(0, limit) : data;

  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4 text-(--accent-color)">{title}</h2>
      {limitedData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4">
          {limitedData.map((menuitem: any) => (
            <CafeMenuCard key={menuitem.slug} cafeMenu={menuitem} />
          ))}
        </div>
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
};

export default CafeMenuList;
