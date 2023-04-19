import SideMenu from "@/components/SideMenu";
import PromptCard from "@/components/prompt/PromptCard";
export default function Home() {
  return (
    <div className="w-full rounded-md flex items-center flex-col ml-[200px]">
      <div className="overflow-auto h-[800px] rounded-md no-vertical-scrollbar flex flex-col">
        <div className="flex w-[800px] gap-2 justify-end">
          <SideMenu />
        </div>
        <div className="text-gray-900 text-lg font-semibold my-4">Most Liked Prompts</div>
        <PromptCard />
        <PromptCard />
        <PromptCard />
        <PromptCard />
        <PromptCard />
      </div>
    </div>
  );
}
