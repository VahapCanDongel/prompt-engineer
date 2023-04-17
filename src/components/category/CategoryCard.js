export default function CategoryCard() {
  return (
    <div className="p-2 w-[200px] h-[60px] text-gray-950 rounded-md hover:cursor-pointer flex items-center bg-slate border-[1px] border-gray-300">
      <svg width={20} height={20} fill="#030712" viewBox="0 0 24 24">
        <path d="M10 20V3H8v17H5V2h11a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-6Zm1-14v2h5V6h-5Zm0 3v2h5V9h-5ZM8 20h2v2H8v-2Z" />
      </svg>
      Education
    </div>
  );
}
