import { useRouter } from "next/router";

export default function CategoryCard({ name, id }) {
  const router = useRouter()
  const handleCategoryRoute = () => {
    router.beforePopState(() => {
      // Clear any state you want to remove here
      return true;
    });
    router.push(`/category/${id}?name=${name}`)
  
  }

  return (
    <div className="p-2 w-[200px] h-[60px] text-gray-950 rounded-sm hover:cursor-pointer flex items-center bg-slate border-[1px] border-gray-300" onClick={handleCategoryRoute}>
      {name}
    </div>
  );
}
