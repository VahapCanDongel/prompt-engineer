import SideMenu from "@/components/SideMenu";
import PromptCard from "@/components/prompt/PromptCard";
import getPrompts from "../../utils/prompt/getPrompt";
import { useEffect, useState } from "react";
export default function Home() {
  const [prompts, setPrompts] = useState([])


  useEffect(()=> {
    const fetchPrompts = async () => {
      const prompts  = await getPrompts()
      setPrompts(prompts)
    }
    fetchPrompts()
  },[prompts])
 



  return (
    <div className="w-full rounded-md flex items-center flex-col ml-[200px]">
      <div className="overflow-auto h-[800px] rounded-md no-vertical-scrollbar flex flex-col">
        <div className="flex w-[800px] gap-2 justify-end">
          <SideMenu />
        </div>
        <div className="text-gray-900 text-lg font-semibold my-4">Most Liked Prompts</div>
        {
          Array.isArray(prompts) && prompts.map((data, index) => (
            <PromptCard user={data.user_name} user_icon={data.user_picture} title={data.title} content={data.content} post_likes={data.likes} id={data.id}/>
          ))
        }
       
      
      </div>
    </div>
  );
}
