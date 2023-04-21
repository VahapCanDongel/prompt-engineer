import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export default function PromptCard({
  user,
  user_icon,
  title,
  description,
  post_likes,
  post_date,
}) {

  const signedUser = useUser()
  const router = useRouter()
  const handlePromptLike = () => {
    if(!signedUser){
      router.push('/login')
    }else{
      console.log('Perfom liking functionality')
    }
  }



  return (
    <div className="w-[500px] min-h-[80px] p-4 rounded-md bg-gray-100 my-1 flex-shrink-0">
      <div className="flex gap-2">
        <img src={user_icon} className="w-12 h-12 rounded-full border-indigo-400 border-[1px] p-1" />
        <div className="font-semibold text-gray-500">{user}</div>
      </div>
      <div  className="ml-14 mb-6 mt-[-17px]">
        <div className="font-semibold text-gray-500">{title}</div>
        <div className="text-gray-500">
          {description}
        </div>

      </div>
    

      <div className="flex w-full justify-between items-center">
        <div className="text-gray-500 flex gap-1 text-[14px]">
          <div>Posted </div>

          <div>16/04/2023</div>
        </div>
        <div className="flex" onClick={handlePromptLike}>
          <svg
            width={26}
            height={26}
            viewBox="0 0 24 24"
            className="hover:fill-indigo-400 trans-smooth fill-gray-500"
          > 
            <path d="m11.293 5.547.707.708.707-.707a5 5 0 1 1 7.07 7.071l-7.07 7.071a1 1 0 0 1-1.414 0l-7.071-7.07a5 5 0 1 1 7.07-7.072Z" />
          </svg>

          <div className="text-gray-500">{post_likes}</div>
        </div>
      </div>
    </div>
  );
}
