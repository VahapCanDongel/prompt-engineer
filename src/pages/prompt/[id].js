import CommentCard from "@/components/comment/CommentCard";
import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router"
import addComment from "../../../utils/comment/addComment";
import { useEffect, useState } from "react";
import getComments from "../../../utils/comment/getComments";

export default function Prompt() {
    const router = useRouter()
    const { id } = router.query
    const { data } = router.query
    const parsedData = JSON.parse(data);

    

    const currentSignedInUser = useUser()

    const prompt_id = id
    const user_id = currentSignedInUser.id
    const user_name = currentSignedInUser.user_metadata.full_name
    const user_picture = currentSignedInUser.user_metadata.picture
    const [user_comment, setUserComment] = useState('')

    const [comments, setComments] = useState([])

    const handleAddComment = async () => {
        if(!currentSignedInUser){
            router.push('/login')
        }else{
            await addComment({prompt_id, user_id, user_name, user_picture, user_comment })
        }
    }

    useEffect(() => {
        const fetchComments = async () =>{
            const comments = await getComments({prompt_id})
            setComments(comments)
        }
        fetchComments()
    })


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



            <div className="my-2">
                <div className="text-gray-500 text-[16px]">Give feedback!</div>
                <textarea placeholder="Comment..." className="text-gray-500 border-[1px]  border-gray-300 p-2 w-[450px] resize-none focus:outline-none h-[130px]" onChange={(e) => setUserComment(e.target.value)}></textarea>
                <div className="p-2 w-[60px] bg-indigo-300 flex justify-center items-center rounded-sm text-white ml-auto select-none hover:bg-indigo-400 hover:cursor-pointer transition-smooth" onClick={handleAddComment}>Add</div>
            </div>
            <div className="mr-auto mt-6">Comments</div>
            <div className="overflow-auto h-[500px] mb-3">
                {
                Array.isArray(comments) && 
                    comments.map((data, index) => (
                        <CommentCard  user_name={data.user_name} user_comment={data.user_comment} user_picture={data.user_picture} id={data.id} user_id={data.user_id}/>
                    ))
                }

            </div>





        </div>
    )
}