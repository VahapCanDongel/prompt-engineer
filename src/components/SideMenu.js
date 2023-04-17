import CategoryCard from "./category/CategoryCard";

export default function SideMenu() {
  return (
    <div className=" h-full flex flex-col gap-2 fixed">
      <div className="font-bold text-lg text-gray-900 ml-auto">Categories</div>

      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </div>
  );
}
