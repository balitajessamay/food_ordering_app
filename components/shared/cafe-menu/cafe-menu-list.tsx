import CafeMenuCard from "./cafe-menu-card";
import { MenuItem } from "@/types";

const CafeMenuList = ({
  data,
  title,
  limit,
}: {
  data: MenuItem[];
  title?: string;
  limit?: number;
}) => {
  const limitedData = limit ? data.slice(0, limit) : data;

  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4 text-(--accent-color)">{title}</h2>
      {limitedData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4">
          {limitedData.map((menuitem: MenuItem) => (
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
