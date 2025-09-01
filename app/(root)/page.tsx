import CafeMenuList from "@/components/shared/cafe-menu/cafe-menu-list";
import { getLatestMenuItems } from "@/lib/actions/cafemenu.actions";

const HomePage = async () => {
  const latestMenuItems = await getLatestMenuItems();

  return (
    <>
      <CafeMenuList data={latestMenuItems} title="Best Sellers" limit={3} />
    </>
  );
};

export default HomePage;
