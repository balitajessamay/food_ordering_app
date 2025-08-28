import Image from "next/image";
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
      <h2 className="h2-bold mb-4">{title}</h2>
      {limitedData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {limitedData.map((menuitem: any) => (
            <div className="border p-4">
              <Image
                src={menuitem.image}
                alt={menuitem.name}
                width={200}
                height={200}
                className="w-85 h-48 object-cover mb-4"
              />
              <h3 className="h3-semi mb-2">{menuitem.name}</h3>
              <p className="mb-2">{menuitem.description}</p>
              <p className="font-bold">P{menuitem.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
};

export default CafeMenuList;
