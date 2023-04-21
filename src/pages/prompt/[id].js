import CommentCard from "@/components/comment/CommentCard";
import { useRouter } from "next/router"

export default function Prompt() {
    const router = useRouter()
    const { id } = router.query
    const { data } = router.query
    const parsedData = JSON.parse(data);
    return (
        <div className="flex flex-col mt-3 items-center">
            <div className="border-[1px] border-gray-300 p-2 w-[450px] min-h-[200px] rounded-sm">
                <div className="flex gap-2">
                    <img src={parsedData.user_icon} className="w-12 h-12 rounded-full border-indigo-400 border-[1px] p-1" />
                    <div className="font-semibold text-gray-500 text-[20px]">{parsedData.user}</div>
                </div>
                <div className="ml-14 mb-6 mt-[-17px]">
                    <div className="font-semibold text-gray-500 text-[16px]">{parsedData.title}</div>
                    <div className="text-gray-500 text-[16px]">
                        {parsedData.content}
                    </div>

                </div>
                <div className="flex w-full justify-between items-center">
                    <div className="text-gray-500 flex gap-1 text-[14px]">
                        <div>Posted </div>

                        <div>16/04/2023</div>
                    </div>
                    <div className="flex">
                        <svg
                            width={26}
                            height={26}
                            viewBox="0 0 24 24"
                            className="hover:fill-indigo-400 trans-smooth fill-gray-500"
                        >
                            <path d="m11.293 5.547.707.708.707-.707a5 5 0 1 1 7.07 7.071l-7.07 7.071a1 1 0 0 1-1.414 0l-7.071-7.07a5 5 0 1 1 7.07-7.072Z" />
                        </svg>

                        <div className="text-gray-500">{parsedData.post_likes}</div>
                    </div>
                </div>
            </div>


            <div className="mr-auto mt-6">Comments</div>
            <div className="overflow-auto">
                <CommentCard />
            </div>





        </div>
    )
}