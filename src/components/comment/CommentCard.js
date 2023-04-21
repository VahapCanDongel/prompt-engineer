import { useUser } from "@supabase/auth-helpers-react"
import deleteComment from "../../../utils/comment/deleteComment"
import { useState } from "react"

export default function CommentCard({ user_name, user_picture, user_comment, id, user_id }) {
    const currentSignedInUser = useUser()
    const [deleteAlertVisibility, setDeleteAlertVisibility] = useState(true)

    const handleDeleteOperation = async () => {
        await deleteComment({ id })
        setDeleteAlertVisibility(!deleteAlertVisibility)
    }

    return (
        <div className="w-[500px] min-h-[80px] border-[1px] border-gray-300 rounded-sm p-2 my-4">
            <div className="flex gap-2 font-semibold">
                <img src={user_picture} className="w-12 h-12 rounded-full border-indigo-400 border-[1px] p-1" />
                <div>{user_name}</div>
            </div>
            <div className="ml-14 mt-[-18px]">{user_comment}</div>
            {currentSignedInUser == null||  currentSignedInUser.id != user_id ? (
                <div></div>
            ) : (
                <div className="relative left-[460px] bottom-2">
                    <svg width="20" height="20" className=" fill-indigo-400 hover:cursor-pointer" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => setDeleteAlertVisibility(!deleteAlertVisibility)}>
                        <path d="M15 4h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1Zm3.8 6-.613 9.2a3 3 0 0 1-2.993 2.8H8.826a3 3 0 0 1-2.993-2.796L5.205 10H18.8ZM10 11a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0v-7a1 1 0 0 0-1-1Zm4 0a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1Z"></path>
                    </svg>
                </div>
            )

            }

            {!deleteAlertVisibility && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                    <div className="bg-white border-[1px] border-gray-300 w-[400px] h-[240px] absolute z-50 shadow-2xl  flex justify-center items-center flex-col p-2 gap-14">
                        <div className="text-gray-500 text-[20px]">Are you sure you would like to delete your comment?</div>

                        <div className="flex gap-2">
                            <div className="p-2 bg-red-400 w-[100px] text-center text-white rounded-sm hover:cursor-pointer hover:bg-red-300 transition-smooth" onClick={handleDeleteOperation}>Delete</div>
                            <div className="p-2 border-[1px] border-gray-300 w-[100px] text-center text-gray-400 rounded-sm hover:cursor-pointer transition-smooth" onClick={()=> setDeleteAlertVisibility(!deleteAlertVisibility)}>Cancel</div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}