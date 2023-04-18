export default function CategoryCard({ name }) {
  return (
    <div className="p-2 w-[200px] h-[60px] text-gray-950 rounded-md hover:cursor-pointer flex items-center bg-slate border-[1px] border-gray-300">
      {name}
    </div>
  );
}
