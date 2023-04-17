import CategoryCard from "./category/CategoryCard";

export default function SideMenu() {
  return (
    <div className="mr-auto h-full flex flex-col gap-2 fixed">
      <div className="font-bold text-lg text-gray-900">Categories</div>

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
