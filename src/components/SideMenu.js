import { useEffect, useState } from "react";
import CategoryCard from "./category/CategoryCard";
import getCategories from "../../utils/category/getCategories";

export default function SideMenu() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  return (
    <div className=" h-full flex flex-col gap-2 fixed">
      <div className="font-bold text-lg text-gray-900 ml-auto">Categories</div>

      {Array.isArray(categories) &&
        categories.map((data, index) => (
          <CategoryCard key={index} name={data.name} />
        ))}
    </div>
  );
}
