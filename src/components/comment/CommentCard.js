import { useUser } from "@supabase/auth-helpers-react"

export default function CommentCard({ user_name, user_picture, user_comment, id, user_id }) {
    const currentSignedInUser = useUser()

    return (
        <div className="w-[500px] min-h-[80px] border-[1px] border-gray-300 rounded-sm p-2 my-4">
            <div className="flex gap-2 font-semibold">
                <img src={user_picture} className="w-12 h-12 rounded-full border-indigo-400 border-[1px] p-1" />
                <div>{user_name}</div>
            </div>
            <div className="ml-14 mt-[-18px]">{user_comment}</div>
            {currentSignedInUser.id != user_id ? (
                <div></div>
            ) : (
                <div className="relative left-[460px]">
                    <svg width="20" height="20" className=" fill-indigo-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 4h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1Zm3.8 6-.613 9.2a3 3 0 0 1-2.993 2.8H8.826a3 3 0 0 1-2.993-2.796L5.205 10H18.8ZM10 11a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0v-7a1 1 0 0 0-1-1Zm4 0a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1Z"></path>
                    </svg>
                </div>
            )

            }
        </div>
    )
}