import CafeMenuList from "@/components/shared/cafe-menu/cafe-menu-list/cafe-menu-list";
import sampleData from "@/db/sample-data";

const HomePage = () => {
  return (
    <>
      <CafeMenuList data={sampleData.menus} title="Our Menu" />
    </>
  );
};

export default HomePage;
