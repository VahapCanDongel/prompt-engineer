import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import getPrompts from "../../../utils/category/getPrompts"
import SideMenu from "@/components/SideMenu"
import PromptCard from "@/components/prompt/PromptCard"

export default function Category(){
    const router = useRouter()
    const { id } = router.query
    const {name} = router.query
    const [prompts, setPromts] = useState([])
    
    useEffect(()=> {
        const fetchPrompts = async () => {
          const prompts =   await getPrompts({id})
          setPromts(prompts)
        }
        fetchPrompts()
    })



    return(
        <div className="overflow-auto h-[800px] rounded-md no-vertical-scrollbar flex flex-col">
        <div className="flex w-[800px] gap-2 justify-end">
          <SideMenu/>
        </div>
        <div className="text-gray-900 text-lg font-semibold my-4">{name} Prompts</div>
        {
          Array.isArray(prompts) && prompts.map((data, index) => (
            <PromptCard user={data.user_name} user_icon={data.user_picture} title={data.title} content={data.content} post_likes={data.likes} id={data.id}/>
          ))
        }
       
      
      </div>

    )
}